import "./App.css";
import ForwardButton from "./Buttons/ForwardButton";
import Home from "./Components/Home";
import Todos from "./Components/Todos";
import {Routes, Route} from 'react-router-dom'
import AddToDo from "./Components/AddToDo";
function App() {
  return (
    <div className="App">
  
      {/* <ForwardButton /> */}

      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/todos" element= {<Todos/>}/>
        <Route path="/add" element= {<AddToDo/>}/>
      </Routes>
    </div>
  );
}

export default App;
