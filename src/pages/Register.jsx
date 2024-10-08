import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import Context from '../Context/Context';
import NavFooter from '../components/NavFooter';

function Register() {
    const [inputValue, setInputValue] = useState("");
    const { data, setData } = useContext(Context)

    const handleInput = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const handleClick = () => {
        const tasks = [...data, inputValue]
        setData(tasks)
        console.log(tasks)
    };

    return (
      
            <div className='my-container'>
                <header>
                    <h1 className='h1-home'>TO DO LIST</h1>
                </header>

                <main>
                   
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
                    
                </main>

                < NavFooter />
            </div>
    )
}

export default Register;