import Context from './Context';
import { useState } from "react";

function Provider({ children }) {
    const [inputAdded, setInputAdded] = useState([]);
    const [count, setCount] = useState([]);


    const contextValue = {
      inputAdded,
      setInputAdded,
      count,
      setCount
    };


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Provider;