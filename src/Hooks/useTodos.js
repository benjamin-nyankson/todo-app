import React, { useState, useEffect } from "react";

function useTodos() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/Urgent/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return { todos };
}

export default useTodos;
