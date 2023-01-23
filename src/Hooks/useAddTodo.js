import React, { useState } from "react";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
export default function useAddTodo() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState(new Date(dayjs()));
  const [openDialog, setOpenDialog] = React.useState(false);
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const d = new Date(date);
  const completeDate = d.toDateString();
  const completeTime = d.toTimeString().slice(0, -36);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === "" || note === "" || priority === "") {
      alert("All fields are required");
    } else {
      const data = {
        title: title,
        note: note,
        priority: priority,
        date: completeDate,
        time: completeTime,
      };
      const items = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
        
      };

      switch (priority) {
        case "Urgent":
          console.log("Adding");
          setTimeout(() => {
            fetch("http://localhost:8000/Urgent/", items);
            console.log("Added");
            console.log(data);
          }, 3000);

          break;

        case "High":
          fetch("http://localhost:8000/High/", items);
          console.log(data);
          break;

        case "Medium":
          fetch("http://localhost:8000/Medium/", items);
          console.log(data);
          break;

        case "Low":
          fetch("http://localhost:8000/Low/", items);
          console.log(data);
          break;
      }
    }
  };

  const handleCancel = () => {
    if (title !== "" || note !== "" || priority !== "") {
      setOpenDialog(true);
    } else {
      Navigate("/todos");
    }
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleYes = () => {
    Navigate("/todos");
  };
  return [
    title,
    setTitle,
    note,
    setNote,
    priority,
    setPriority,
    date,
    setDate,
    openDialog,
    handleSubmit,
    handleCancel,
    handleClose,
    handleYes,
  ];
}
