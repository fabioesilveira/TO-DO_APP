import Context from './Context';
import { useState } from "react";

function Provider({ children }) {
    const [inputAdded, setInputAdded] = useState([]);
    const [editedInput, setEditedInput] = useState([]);

    const contextValue = {
      inputAdded,
      setInputAdded,
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