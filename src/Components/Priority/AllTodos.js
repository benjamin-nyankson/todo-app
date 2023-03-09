import React, { useEffect, useState, useRef } from "react";
import TodoList from "../TodoList";
import AddButton from "../../Buttons/AddButton";
import { Pagination } from "@mui/material";
function AllTodos() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = todos.slice(startIndex, endIndex);
  const pageCount = Math.ceil(todos.length / itemsPerPage);
  const [priority, setPriority] = useState("urgent");
  const sectionRef = useRef(null);

  useEffect(() => {
    // console.log("Loading...");
    // setTimeout(() => {

    switch (priority) {
      case "urgent":
        // console.log(priority);
        fetch("http://localhost:8000/Urgent/")
          .then((response) => response.json())
          .then((data) => {
            setTodos(data);
          })
          .catch((err) => console.log(err));
        // console.log("Loaded");
        break;

      case "high":
        // console.log(priority);
        fetch("http://localhost:8000/High/")
          .then((response) => response.json())
          .then((data) => {
            setTodos(data);
          })
          .catch((err) => console.log(err));
        // console.log("Loaded");
        break;

      case "medium":
        // console.log(priority);
        fetch("http://localhost:8000/Medium/")
          .then((response) => response.json())
          .then((data) => {
            setTodos(data);
          })
          .catch((err) => console.log(err));
        // console.log("Loaded");
        break;

      case "low":
        // console.log(priority);
        fetch("http://localhost:8000/Low/")
          .then((response) => response.json())
          .then((data) => {
            setTodos(data);
          })
          .catch((err) => console.log(err));
        // console.log("Loaded");
        break;
    }

    // }, 3000);
  }, [priority]);

  const handleDelete = async (id) => {
    switch (priority) {
      case "urgent":
        await fetch("http://localhost:8000/Urgent/" + id, {
          method: "DELETE",
        });
        break;

      case "high":
        await fetch("http://localhost:8000/High/" + id, {
          method: "DELETE",
        });
        break;

      case "medium":
        await fetch("http://localhost:8000/Medium/" + id, {
          method: "DELETE",
        });
        break;

      case "low":
        await fetch("http://localhost:8000/Low/" + id, {
          method: "DELETE",
        });
        break;
    }

    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const [sortBy, setSortBy] = useState("newest");
  const [result, setResult] = useState([]);
  const handleSort = (event) => {
    setSortBy(event.target.value);
    // console.log(event.target.value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  useEffect(() => {
    switch (sortBy) {
      case "newest":
        setResult(
          todos
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(startIndex, endIndex)
        );
        // console.log(todos);
        break;

      case "oldest":
        setResult(
          todos
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(startIndex, endIndex)
        );
        // console.log(todos);
        break;
    }
  }, [todos, startIndex, endIndex, sortBy]);

  const handleClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={sectionRef}>
      <TodoList
        todos={result}
        title="Today's Task"
        handleDelete={handleDelete}
        handleSort={handleSort}
        sortBy={sortBy}
        priority={priority}
        handlePriority={handlePriority}
      />
      <br />
      {todos.length > 6 && (
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          onClick={handleClick}
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        />
      )}

      <AddButton />
    </div>
  );
}

export default AllTodos;
