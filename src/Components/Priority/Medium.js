import React, { useEffect, useState } from "react";
import TodoList from "../TodoList";
import AddButton from "../../Buttons/AddButton";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      fetch("http://localhost:8000/Medium/")
        .then((response) => response.json())
        .then((data) => {
          setTodos(data);
          setOpen(false);
        })
        .catch((err) => console.log(err));
      setOpen(false);
    }, 1000);
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/Medium/" + id, {
      method: "DELETE",
    });
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  return (
    <div>
      <TodoList
        todos={todos}
        title="Today's Task"
        handleDelete={handleDelete}
        open={open}
      />
      <AddButton />
    </div>
  );
}

export default Todos;
