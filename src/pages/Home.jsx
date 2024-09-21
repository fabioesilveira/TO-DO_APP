import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import Context from '../Context/Context';
import NavFooter from '../components/NavFooter';
import { Link, useNavigate } from 'react-router-dom';


function Home() {


    const { data, setData, editedInput, setEditedInput } = useContext(Context)
    


    const navigate = useNavigate()

    function deleteTask(element) {
        const removeTask = data.filter((e, i) => e !== element)
        setData(removeTask)
    }

    function handleEditTask(element) {
        setEditedInput(element)
        navigate("/edit")
    }


    return (

        <div className='my-container'>
            <header>
                <h1 className='h1-home'>TO DO LIST</h1>
            </header>

            <main>
                {data.map((element, index) => (
                    <div className='div-map-home'>

                        <h4>{index + 1}-{element}</h4>
                        <span onClick={() => deleteTask(element)} class="material-symbols-outlined">
                            delete_forever
                        </span>
                        < span onClick={() => handleEditTask(element)} class="material-symbols-outlined">
                            edit
                        </span>
                    </div>
                ))}
            </main>


            <NavFooter />
        </div>

    )
}

export default Home;