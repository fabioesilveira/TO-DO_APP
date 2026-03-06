import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { useContext, useState, useRef, useEffect } from 'react';
import Context from '../Context/Context';
import NavFooter from '../components/NavFooter';

function Register() {
    const [inputValue, setInputValue] = useState("");
    const { setData } = useContext(Context);

    const [showDialog, setShowDialog] = useState(false);
    const [dialogVariant, setDialogVariant] = useState("success");
    const [dialogMsg, setDialogMsg] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
    }, []);

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const openDialog = (variant, msg) => {
        setDialogVariant(variant);
        setDialogMsg(msg);
        setShowDialog(true);
    };

    const handleClick = () => {
        const trimmed = inputValue.trim();

        const formatted =
            trimmed.charAt(0).toUpperCase() + trimmed.slice(1);

        if (!trimmed) {
            openDialog("warning", "Please enter a task to register.");
            return;
        }

        const newTask = {
            id: crypto.randomUUID(),
            text: formatted,
            completed: false,
        };

        setData((prev) => [...prev, newTask]);

        setInputValue("");

        openDialog("success", "Task added successfully!");

        inputRef.current?.focus();
    };

    return (
        <div className='my-container'>
            <header>
                <h1 className='h1-home'>TO DO LIST</h1>
            </header>

            <main>
                <div className='div-register'>
                    <Form.Label className='register-task-home' htmlFor="basic-url">
                        REGISTER TASK:
                    </Form.Label>

                    <InputGroup className='input-size' size="lg">
                        <InputGroup.Text id="inputGroup-sizing-md" className='input-text'>
                            TASK
                        </InputGroup.Text>

                        <Form.Control
                            ref={inputRef}
                            aria-label="Task"
                            type="text"
                            value={inputValue}
                            onChange={handleInput}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleClick();
                            }}
                        />
                    </InputGroup>

                    <Button onClick={handleClick} className='btn-home' variant="secondary" size="lg">
                        REGISTER
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
                        onClick={() => setShowDialog(false)}
                    >
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Register;