import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


function Home() {
    
    const [inputValue, setInputValue] = useState("");
    
    const handleInput = (event) => {
        const value = event.target.value;
        setInputValue(value); 
      };
    return (
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
                        <Button className='btn-home' variant="secondary" size="lg">
                            REGISTER
                        </Button>

                        <p>TASK-1: {inputValue}</p>

                        <Card className="text-center footer-home">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <button class="material-symbols-outlined">
                                    home
                                </button>
                                <button class="material-symbols-outlined">
                                    add
                                </button>

                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Card>


                </Container>

            </div>




        </>

    )
}

export default Home;