import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Register from "./pages/Register";

function App() {
  return (
    <>
    <Routes>
      <Route index element={< Home/>}/>
      <Route path="edit" element={< Edit />}/>
      <Route path="register" element={< Register />}/>
    </Routes>
    </>
  )
}

export default App;