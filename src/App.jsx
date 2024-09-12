import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import EditTasks from "./pages/EditTasks";

function App() {
  return (
    <>
    <Routes>
      <Route index element={< Home/>}/>
      <Route path="tasks" element={< Tasks />}/>
      <Route path="editTasks" element={< EditTasks />}/>
    </Routes>
    </>
  )
}

export default App;