import Context from './Context';
import { useState } from "react";

function Provider({ children }) {
    const [data, setData] = useState([]);
    const [editedInput, setEditedInput] = useState("");

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
    )
}


export default Provider;