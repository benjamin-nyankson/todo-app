import "./App.css";
import Home from "./Components/Home";
import Todos from "./Components/Todos";
import { Routes, Route } from "react-router-dom";
import AddToDo from "./Components/AddToDo";
import Urgent from "./Components/Priority/Urgent";
import High from "./Components/Priority/High";
import Medium from "./Components/Priority/Medium";
import Low from "./Components/Priority/Low";
import MyPagination from "./Components/Pagination/MyPagination";
import AllTodos from "./Components/Priority/AllTodos";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/add" element={<AddToDo />} />
        <Route path="/urgent" element={<Urgent />} />
        <Route path="/high" element={<High />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/low" element={<Low />} />
        <Route path="/paginate" element={<MyPagination />} />
        <Route path="/allTodos" element={<AllTodos />} />

      </Routes>
    </div>
  );
}

export default App;
