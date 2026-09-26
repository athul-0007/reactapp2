import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import StudentList from "./components/StudentList";



function App() {
  return (
    <BrowserRouter>

   

      <Routes>


   <Route path="/" element={<Index />}>

  <Route index element={<Dashboard/>} />

  <Route path="user" element={<UserList/>} />

  <Route path="std" element={<StudentList/>} />

</Route>
         

      </Routes>

    </BrowserRouter>
  );
}

export default App;