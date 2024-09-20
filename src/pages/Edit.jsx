import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import NavFooter from "../components/NavFooter";
import { useContext, useState } from 'react';
import Context from '../Context/Context';


function Edit() {
    const [editValue, setEditValue] = useState("");
    const { inputAdded, setInputAdded } = useContext(Context)

    const handleInput = (event) => {
        const value = event.target.value;
        setEditValue(value);
    };

    const handleClickEdited = () => {
        const editedTasks = [...inputAdded, editValue];
        setInputAdded(editedTasks)
        
    };
    
    
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
                        value={editValue}
                        onChange={handleInput}


                    />
                </InputGroup>
                <Button onClick={handleClickEdited} className='btn-home' variant="secondary" size="lg">
                    MODIFY
                </Button>

            </main>

            < NavFooter />
        </div>
    )
}

export default Edit;