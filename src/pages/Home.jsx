import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function Home() {
    return (
        <>
            <div>
                <Container>
                    <Card>
                        <h1 className='h1-home'>TO DO LIST</h1>
                        <Form.Label className='register-task-home' htmlFor="basic-url">REGISTER TASK:</Form.Label>
                        <InputGroup size="lg">
                            <InputGroup.Text id="inputGroup-sizing-lg">TASK</InputGroup.Text>
                            <Form.Control
                                aria-label="Large"

                            />
                        </InputGroup>
                        <Button className='btn-home' variant="secondary" size="lg">
                            REGISTER
                        </Button>
                        
                        <Card className="text-center footer-home">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>


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