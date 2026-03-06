import Context from './Context';
import { useEffect, useState } from "react";

function Provider({ children }) {
    const [data, setData] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [editedInput, setEditedInput] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(data));
    }, [data]);

    const contextValue = {
        data,
        setData,
        editedInput,
        setEditedInput
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export default Provider;