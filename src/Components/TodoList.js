import React from "react";
// import { UserStyleContainer, UserStyle } from "../../Styles/style";
// import UserNavbar from "../../Navbar/UserNavbar";
import { Grid, Container } from "@mui/material";
import TaskCard from "../Components/TaskCard";
const TodoList = ({ todos, title, handleDelete }) => {
  return (
    <div>
      {/* <UserNavbar /> */}
      <Container>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <Grid container spacing={3}>
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
