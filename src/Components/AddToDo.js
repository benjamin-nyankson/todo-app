import React, { useState } from "react";
import BackButton from "../Buttons/BackButton";
import { Button, TextField, MenuItem, InputLabel, Select } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { FormStyle } from "../Styles/Styles";
export default function AddToDo() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      note: note,
      priority: priority,
    };
    console.log(data);
    fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={FormStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <BackButton style={{ float: "left" }} />
          <h4 title="add task">Add Task</h4>
        </div>

        <TextField
          placeholder="Type your title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          fullWidth
        />
        <br />
        <br />

        <TextField
          placeholder="Type your note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
          fullWidth
        />
        <br />
        <br />

        <label>Priority </label>
        <Select
          name=""
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          fullWidth
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
        </Select>

        <br />
        <br />
        <Button variant="contained" type="submit" fullWidth>
          Add New Task
        </Button>
      </form>
    </div>
    
  );
}
