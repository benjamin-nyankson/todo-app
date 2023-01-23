import React, { useEffect, useState } from "react";
import TodoList from "../TodoList";
import AddButton from "../../Buttons/AddButton";
function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/High/")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/High/" + id, {
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
      />
      <AddButton />
    </div>
  );
}

export default Todos;
