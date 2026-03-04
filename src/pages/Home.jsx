import { useContext, useMemo, useState } from "react";
import Context from "../Context/Context";
import NavFooter from "../components/NavFooter";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Home() {
    const { data, setData, setEditedInput } = useContext(Context);
    const navigate = useNavigate();

    // dialog state
    const [showDialog, setShowDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogMsg, setDialogMsg] = useState("");
    const [dialogVariant, setDialogVariant] = useState("secondary");
    const [onConfirm, setOnConfirm] = useState(() => () => { });

    const openConfirm = ({ title, msg, variant = "secondary", onYes }) => {
        setDialogTitle(title);
        setDialogMsg(msg);
        setDialogVariant(variant);
        setOnConfirm(() => onYes);
        setShowDialog(true);
    };

    const closeDialog = () => setShowDialog(false);

    function requestDelete(taskId) {
        openConfirm({
            title: "Confirm delete",
            msg: "Do you really want to delete this task?",
            variant: "warning",
            onYes: () => {
                setData((prev) => prev.filter((t) => t.id !== taskId));
                closeDialog();
            },
        });
    }

    function requestComplete(taskId) {
        openConfirm({
            title: "Mark as complete",
            msg: "Do you want to mark this task as complete?",
            variant: "primary",
            onYes: () => {
                setData((prev) =>
                    prev.map((t) => (t.id === taskId ? { ...t, completed: true } : t))
                );
                closeDialog();
            },
        });
    }

    function handleEditTask(task) {
        if (task.completed) return;
        setEditedInput(task);
        navigate("/edit");
    }

    const hasTasks = useMemo(() => (data?.length ?? 0) > 0, [data]);

    return (
        <div className="my-container">
            <header>
                <h1 className="h1-home">TO DO LIST</h1>
            </header>

            <main>
                {!hasTasks ? (
                    <p className="empty-state">You currently have no tasks.</p>
                ) : (
                    data.map((task, index) => (
                        <div
                            key={task.id}
                            className={`div-map-home ${task.completed ? "task-completed" : ""}`}
                        >
                            <div className="task-left">
                                <input
                                    type="checkbox"
                                    className="task-checkbox"
                                    checked={task.completed}
                                    disabled={task.completed}
                                    onChange={() => requestComplete(task.id)}
                                    aria-label="Mark task as complete"
                                />
                                <h4 className="h4-task">
                                    {index + 1} - {task.text}
                                </h4>
                            </div>

                            <div className="task-icons">
                                <span
                                    onClick={() => requestDelete(task.id)}
                                    className="material-symbols-outlined task-icon"
                                    role="button"
                                    tabIndex={0}
                                >
                                    delete_forever
                                </span>

                                <span
                                    onClick={() => handleEditTask(task)}
                                    className={`material-symbols-outlined task-icon ${task.completed ? "task-icon-disabled" : ""
                                        }`}
                                    role="button"
                                    tabIndex={0}
                                    aria-disabled={task.completed}
                                >
                                    edit
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </main>

            <NavFooter />

            {/* Confirm Modal */}
            <Modal show={showDialog} onHide={closeDialog} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{dialogTitle}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Alert variant={dialogVariant} className="mb-0">
                        {dialogMsg}
                    </Alert>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDialog}>
                        No
                    </Button>
                    <Button
                        variant={dialogVariant === "warning" ? "danger" : "primary"}
                        onClick={onConfirm}
                    >
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Home;