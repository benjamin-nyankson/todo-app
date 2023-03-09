import React from "react";
import { Grid, Container, Paper, IconButton } from "@mui/material";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function TodosPaginate({ todos, loading, todoPerPage }) {
  const [pageNumber, setPageNumber] = useState(0);

  const pagesVisited = pageNumber * todoPerPage;
  const displayTodos = todos
    .slice(pagesVisited, pagesVisited + todoPerPage)
    .map((todo) => {
      return (
        <>
          <Container
            sx={
              {
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                // background: "blue",
              }
            }
          >
            <Grid container spacing={3} sx={{ margin: "auto" }}>
              <Grid container spacing={3} sx={{ margin: "auto" }}>
                <Grid item key={todo.id} >
                  {/* <p>{todo.id}</p> */}
                  <Paper>
                    <h1>{todo.title}</h1>
                    <h3>{todo.priority}</h3>
                    <h3>{todo.note}</h3>
                    <h3>{todo.date}</h3>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </>
      );
    });
  if (loading) {
    return <h2>Loading....</h2>;
  }
  const backIcon = (
    <IconButton>
      <ArrowBackIosIcon></ArrowBackIosIcon>
    </IconButton>
  );

  const forwardIcon = (
    <IconButton>
      <ArrowForwardIosIcon></ArrowForwardIosIcon>
    </IconButton>
  );
  const pageCount = Math.ceil(todos.length / todoPerPage);
  const changePage = (selected) => {
    setPageNumber(selected.selected);
  };
  return (
    <div>
      {displayTodos}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"prevBtns"}
        nextLinkClassName={"nextBtns"}
        activeClassName={"paginateActive"}
      />
    </div>
  );
}

export default TodosPaginate;
