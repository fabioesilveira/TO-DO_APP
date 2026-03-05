import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import NavFooter from "../components/NavFooter";
import { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";

function Edit() {
    const navigate = useNavigate();

    const { data, setData, editedInput } = useContext(Context);
    const [newValue, setNewValue] = useState("");

    const [showDialog, setShowDialog] = useState(false);
    const [dialogVariant, setDialogVariant] = useState("success");
    const [dialogMsg, setDialogMsg] = useState("");

    useEffect(() => {
        setNewValue(editedInput?.text || "");
    }, [editedInput]);

    const openDialog = (variant, msg) => {
        setDialogVariant(variant);
        setDialogMsg(msg);
        setShowDialog(true);
    };

    const handleClickEdited = () => {
        const trimmed = newValue.trim();

        const formatted =
            trimmed.charAt(0).toUpperCase() + trimmed.slice(1);

        if (!trimmed) {
            openDialog("warning", "Please enter a task to update.");
            return;
        }

        if (formatted === (editedInput?.text || "").trim()) {
            openDialog("warning", "No changes to save.");
            return;
        }

        const updated = data.map((t) =>
            t.id === editedInput.id ? { ...t, text: formatted } : t
        );

        setData(updated);
        openDialog("success", "Task updated successfully!");
        setTimeout(() => navigate("/"), 900);
    };

    return (
        <div className="my-container">
            <header>
                <h1 className="h1-home">TO DO LIST</h1>
            </header>

            <main>
                <div className="div-register">
                    <Form.Label className="register-task-home" htmlFor="edit-task">
                        EDIT TASK:
                    </Form.Label>

                    <InputGroup className="input-size" size="lg">
                        <InputGroup.Text id="inputGroup-sizing-lg" className='input-text'>TASK</InputGroup.Text>

                        <Form.Control
                            id="edit-task"
                            aria-label="Task"
                            type="text"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleClickEdited();
                            }}
                            disabled={!!editedInput?.completed}
                        />
                    </InputGroup>

                    <Button
                        onClick={handleClickEdited}
                        className="btn-home"
                        variant="secondary"
                        size="lg"
                        disabled={!!editedInput?.completed}
                    >
                        MODIFY
                    </Button>
                </div>
            </main>

            <NavFooter />

            <Modal
                show={showDialog}
                onHide={() => setShowDialog(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {dialogVariant === "success" ? "Success" : "Attention"}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Alert variant={dialogVariant} className="mb-0">
                        {dialogMsg}
                    </Alert>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant={dialogVariant === "success" ? "primary" : "secondary"}
                        onClick={() => {
                            setShowDialog(false);
                            if (dialogVariant === "success") navigate("/");
                        }}
                    >
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Edit;