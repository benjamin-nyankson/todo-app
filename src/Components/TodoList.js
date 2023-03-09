import React, { useState } from "react";
// import { UserStyleContainer, UserStyle } from "../../Styles/style";
// import UserNavbar from "../../Navbar/UserNavbar";
import {
  Grid,
  Container,
  ButtonGroup,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import TaskCard from "../Components/TaskCard";
const TodoList = ({
  todos,
  title,
  handleDelete,
  sortBy,
  handleSort,
  priority,
  handlePriority,
}) => {
  const [loading, setLoading] = useState();

  return (
    <div>
      <Container>
        <h2 style={{ textAlign: "center" }}>{title}</h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex" }}>
            <h2 style={{ textAlign: "center" }}>Priority </h2>
            <Select value={priority} onChange={handlePriority}>
              <MenuItem value="urgent">Urgent</MenuItem>
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </div>

          <div style={{ display: "flex" }}>
            <h2 style={{ textAlign: "center" }}>Sort </h2>
            <Select value={sortBy} onChange={handleSort}>
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
          </div>
        </div>

        <Grid container spacing={3} sx={{ margin: "auto" }}>
          {todos.map((todo) => (
            <Grid item key={todo.id} xs={12} md={6} lg={4}>
              <TaskCard todo={todo} handleDelete={handleDelete} />
              {/* <TodosPaginate /> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TodoList;
