import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import Context from '../Context/Context';
import NavFooter from '../components/NavFooter';
import { Link, useNavigate } from 'react-router-dom';


function Home() {


    const { inputAdded, setInputAdded } = useContext(Context)
    const navigate = useNavigate()

    function deleteTask(element) {
        const removeTask = inputAdded.filter((e, i) => e !== element)
        setInputAdded(removeTask)
    }


    return (

        <div className='my-container'>
            <header>
                <h1 className='h1-home'>TO DO LIST</h1>
            </header>

            <main>
                {inputAdded.map((element, index) => (
                    <div className='div-map-home'>

                        <h4>{index + 1}-{element}</h4>
                        <span onClick={() => deleteTask(element)} class="material-symbols-outlined">
                            delete_forever
                        </span>
                        < Link to="/edit" class="material-symbols-outlined">
                            edit
                        </Link>
                    </div>
                ))}
            </main>


            <NavFooter />
        </div>

    )
}

export default Home;