import * as React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import {LocalizationProvider,DateTimePicker, AdapterDayjs } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function BasicDateTimePicker() {
  const [date, setDate] = useState(dayjs("01-01-2023"));
  const [times, setTimes] = useState(null);
  function set() {
    // console.log(times);
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
