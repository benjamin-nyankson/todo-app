import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackButton from "../Buttons/BackButton";
import useAddTodo from "../Hooks/useAddTodo";
import ToastsContainer from "./Alert/ToastsContainer";

import {
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { FormStyle, ButtonStyle } from "../Styles/Styles";

export default function AddToDo() {
  const [open, setOpen] = useState(true);
  const [
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
  ] = useAddTodo();

  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Dialog open={openDialog}>
          <DialogTitle id="alert-dialog-title">{"Discard Changes"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to discard all changes?
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              backgroundColor: "lightblue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleYes} variant="contained" disableElevation>
              Yes
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              autoFocus
              disableElevation
            >
              No
            </Button>
          </DialogActions>
        </Dialog>

        <form onSubmit={handleSubmit} style={FormStyle}>
          <h2>Add New Task</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <BackButton style={{ float: "left" }} />
            {/* <h4 title="add task">Add Task</h4> */}
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
            id="note"
          />
          <br />
          <br />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormLabel>Priority:</FormLabel>
            <RadioGroup
              row
              name="row-radio-buttons-group"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <FormControlLabel value="Low" control={<Radio />} label="Low" />
              <FormControlLabel
                value="Medium"
                control={<Radio />}
                label="Medium"
              />

              <FormControlLabel value="High" control={<Radio />} label="High" />
              <FormControlLabel
                value="Urgent"
                control={<Radio />}
                label="Urgent"
              />
            </RadioGroup>
          </div>
          <br />
          <DateTimePicker
            renderInput={(props) => <TextField {...props} fullWidth />}
            label="Select Date and Time"
            value={date}
            fullwidth
            // views={["day", "month"]}
            onChange={(newValue) => {
              setDate(newValue);
            }}
          />
          <br />
          <br />

          <div style={{ display: "flex" }}>
            <Button variant="contained" type="submit" fullWidth>
              Add New Task
            </Button>
            <Button
              variant="contained"
              fullWidth
              style={ButtonStyle}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
        <ToastContainer autoClose={3000} />
      </div>
    </LocalizationProvider>
  );
}
