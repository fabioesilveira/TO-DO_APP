import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import Context from '../Context/Context';
import NavFooter from '../components/NavFooter';


function Home() {

    const { inputAdded } = useContext(Context)

    return (
       
            <Container className='my-container'>
                <Card>
                    <h1 className='h1-home'>TO DO LIST</h1>
                    {inputAdded.map((element) => (
                        <h4>{element}</h4>
                    ))}

                    
                </Card>
                <NavFooter />
            </Container>

    )
}

export default Home;