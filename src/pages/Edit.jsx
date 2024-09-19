import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import NavFooter from "../components/NavFooter";


function Edit() {
    return (
        <div className='my-container'>
            <header>
                <h1 className='h1-home'>TO DO LIST</h1>
            </header>

            <main>
                <Form.Label className='register-task-home' htmlFor="basic-url">EDIT TASK:</Form.Label>
                <InputGroup className='input-size' size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">TASK</InputGroup.Text>
                    <Form.Control
                        aria-label="Large"
                        type="text"
                        value=""
                        onChange=""


                    />
                </InputGroup>
                <Button className='btn-home' variant="secondary" size="lg">
                    MODIFY
                </Button>

            </main>

            < NavFooter />
        </div>
    )
}

export default Edit;