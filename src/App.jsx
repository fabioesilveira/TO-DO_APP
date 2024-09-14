import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Register from "./pages/Register";

function App() {
  return (
    <>
    <Routes>
      <Route index element={< Home/>}/>
      <Route path="tasks" element={< Tasks />}/>
      <Route path="register" element={< Register />}/>
    </Routes>
    </>
  )
}

export default App;