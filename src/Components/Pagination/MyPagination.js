import React, { useState, useEffect } from "react";
import axios from "axios";
import TodosPaginate from "./TodosPaginate";
import PaginateLists from "./PaginateLists";
export default function MyPagination() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todoPerPage] = useState(9);
  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/Urgent/");
      setTodos(response.data);
      setLoading(false);
    };
    fetchTodos();
  }, []);

  // Get current todo

  const indexOfLastTodo = currentPage * todoPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
    console.log(pageNumbers);
  };
  return (
    <div>
      <h1>TODOS</h1>
      <h3>Page {currentPage}</h3>
      <TodosPaginate
        todos={todos}
        loading={loading}
        todoPerPage={todoPerPage}
        currentTodos={currentTodos}
      />
      {/* <PaginateLists
        todoPerPage={todoPerPage}
        totalTodos={todos.length}
        paginate={paginate}
        currentPage={currentPage}
      /> */}
    </div>
  );
}
