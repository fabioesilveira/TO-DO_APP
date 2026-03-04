import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import NavFooter from "../components/NavFooter";
import { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";

function Edit() {
    const [newValue, setNewValue] = useState("");
    const { data, setData, editedInput } = useContext(Context);

    const [showDialog, setShowDialog] = useState(false);
    const [dialogVariant, setDialogVariant] = useState("success");
    const [dialogMsg, setDialogMsg] = useState("");

    // preenche o input com o valor atual 
    useEffect(() => {
        setNewValue(editedInput || "");
    }, [editedInput]);

    const openDialog = (variant, msg) => {
        setDialogVariant(variant);
        setDialogMsg(msg);
        setShowDialog(true);
    };

    const handleClickEdited = () => {
        const trimmed = newValue.trim();

        if (!trimmed) {
            openDialog("warning", "Please enter a task to update.");
            return;
        }

        if (trimmed === (editedInput || "").trim()) {
            openDialog("warning", "No changes to save.");
            return;
        }

        const updated = data.map((item) => (item === editedInput ? trimmed : item));
        setData(updated);

        openDialog("success", "Task updated successfully!");
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
                        <InputGroup.Text id="inputGroup-sizing-lg">TASK</InputGroup.Text>

                        <Form.Control
                            id="edit-task"
                            aria-label="Task"
                            type="text"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleClickEdited();
                            }}
                        />
                    </InputGroup>

                    <Button
                        onClick={handleClickEdited}
                        className="btn-home"
                        variant="secondary"
                        size="lg"
                    >
                        MODIFY
                    </Button>
                </div>
            </main>

            <NavFooter />

            {/* Dialog */}
            <Modal show={showDialog} onHide={() => setShowDialog(false)} centered>
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
                        onClick={() => setShowDialog(false)}
                    >
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Edit;