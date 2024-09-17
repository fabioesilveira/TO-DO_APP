import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import Context from '../Context/Context';
import NavFooter from '../components/NavFooter';

function Register() {
    const [inputValue, setInputValue] = useState("");
    const {inputAdded, setInputAdded} = useContext(Context)
    const {count, setCount} = useContext(Context)
    
    const handleInput = (event) => {
        const value = event.target.value;
        setInputValue(value); 
      };

    const handleTasks = () => {
        const tasks = [...inputAdded, inputValue]
        setInputAdded(tasks)
        console.log(tasks)
    };

    const incrementCount = () => {
        const taskNumber = []
        setCount(taskNumber); 
      };

    const handleClick = () => {
        handleTasks();
        incrementCount()
    };

    return(
        <>
        <div>
                <Container>
                    <Card>
                        <h1 className='h1-home'>TO DO LIST</h1>
                        <Form.Label className='register-task-home' htmlFor="basic-url">REGISTER TASK:</Form.Label>
                        <InputGroup className='input-size' size="lg">
                            <InputGroup.Text id="inputGroup-sizing-lg">TASK</InputGroup.Text>
                            <Form.Control
                                aria-label="Large"
                                type="text"
                                value={inputValue}
                                onChange={handleInput}
                                

                            />
                        </InputGroup>
                        <Button onClick={handleClick} className='btn-home' variant="secondary" size="lg">
                            REGISTER
                        </Button>


                        < NavFooter />
                    </Card>


                </Container>

            </div>
        
        </>
    )
}

export default Register;