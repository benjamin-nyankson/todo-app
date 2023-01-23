import * as React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";

export default function BasicDateTimePicker() {
  const [date, setDate] = useState(new Date(dayjs()));

  function set() {
    const d = new Date(date);
    const completeDate = d.toDateString();
    const completeTime = d.toTimeString().slice(0, -36);
    console.log(completeDate);
    console.log(completeTime);
    const data = {
      date: completeDate,
      time: completeTime,
    };

    console.log(data);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} fullwidth>
      <br />
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Select Date and Time"
        value={date}
        fullwidth
        // views={["day", "month"]}
        onChange={(newValue) => {
          setDate(newValue);
        }}
      />

      <Button onClick={set}>Set</Button>
    </LocalizationProvider>
  );
}
