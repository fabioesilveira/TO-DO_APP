import { useContext } from 'react';
import Context from '../Context/Context';
import NavFooter from '../components/NavFooter';
import { useNavigate } from 'react-router-dom';

function Home() {

    const { data, setData, setEditedInput } = useContext(Context)

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
                        <h4 className='h4-task'>{index + 1} - {element}</h4>

                        <div className="task-icons">
                            <span
                                onClick={() => deleteTask(element)}
                                className="material-symbols-outlined task-icon"
                            >
                                delete_forever
                            </span>

                            <span
                                onClick={() => handleEditTask(element)}
                                className="material-symbols-outlined task-icon"
                            >
                                edit
                            </span>
                        </div>
                    </div>
                ))}
            </main>

            <NavFooter />
        </div>
    )
}

export default Home;