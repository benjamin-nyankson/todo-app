import React, { useState } from "react";
// import { UserStyleContainer, UserStyle } from "../../Styles/style";
// import UserNavbar from "../../Navbar/UserNavbar";
import { Grid, Container, Backdrop, CircularProgress } from "@mui/material";
import ButtonsGroup from "../Buttons/ButtonsGroup";
import TaskCard from "../Components/TaskCard";
const TodoList = ({ todos, title, handleDelete, open }) => {
  return (
    <div>
      <Container>
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <h2 style={{ textAlign: "center" }}>Priority</h2>
        <ButtonsGroup />

        <Grid container spacing={3} sx={{ margin: "auto" }}>
          {todos.map((todo) => (
            <Grid item key={todo.id} xs={12} md={6} lg={4}>
              <TaskCard todo={todo} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TodoList;
