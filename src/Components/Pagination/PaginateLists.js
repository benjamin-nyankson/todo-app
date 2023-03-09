import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function PaginateLists({
  todoPerPage,
  totalTodos,
  paginate,
  currentPage,
}) {
  const [num, setNum] = useState();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todoPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    pageNumbers.map((nums) => setNum(nums));
  });
  return (
    <nav className="nav">
      {pageNumbers.map((number, index) => (
        <ButtonGroup key={index}>
            {num>1 && <Button
            onClick={() => paginate(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </Button>}
          
        </ButtonGroup>
      ))}
    </nav>
  );
}
