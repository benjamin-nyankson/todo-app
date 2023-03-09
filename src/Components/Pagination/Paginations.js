import React, { useEffect, useState } from "react";
import { Pagination, Box } from "@mui/material";
import Paginate from "./Paginate";
const pageSize = 3;

function Paginations({ todos }) {
  const [todo, setTodo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastTodo = currentPage * postsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - postsPerPage;
  const currentTodos = todo.slice(indexOfFirstTodo, indexOfLastTodo);

  // useEffect(() => {
  //   console.log("MMMMM", todos);
  //   console.log(currentPage);
  // });

  const handlePagination = (e) => {
    console.log(e);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Pagination color="primary" count={10} onClick={handlePagination} />
    </Box>
  );
}

export default Paginations;
