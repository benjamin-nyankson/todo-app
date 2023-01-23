import React from "react";
import {
  CardHeader,
  Card,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
function UserCard({ todo, handleDelete }) {
  return (
    <div>
      <Card elevation={4}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(todo.id)}>
              <DeleteOutlineOutlined />
            </IconButton>
          }
          title={todo.title}
          subheader={todo.priority}
        />
        <CardContent>
          <Typography color="textSecondary">{todo.note}</Typography>
          <Typography color="textSecondary">{`${todo.date } at ${todo.time}`}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserCard;
