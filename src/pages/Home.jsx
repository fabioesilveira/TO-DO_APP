import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import Context from '../Context/Context';
import NavFooter from '../components/NavFooter';


function Home() {
    
    
    const { inputAdded } = useContext(Context)
    const { count } = useContext(Context)
    

    return (
       
            <Container className='my-container'>
                
                    <h1 className='h1-home'>TO DO LIST</h1>
                    {inputAdded.map((element) => (
                        <h4>{count}-{element}</h4>
                    ))}

                    
                
                <NavFooter />
            </Container>

    )
}

export default Home;