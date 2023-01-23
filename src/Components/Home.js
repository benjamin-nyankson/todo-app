import React, { useEffect, useState } from "react";
import Image from "../Assests/Pictures/todo.png";
import { HomeStyle, PictureStyle, White } from "../Styles/Styles";
import ForwardButton from "../Buttons/ForwardButton";
import { Backdrop, CircularProgress } from "@mui/material";
export default function Home() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }, []);
  return (
    <div style={HomeStyle}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <img src={Image} alt="" style={PictureStyle} />

      <div style={White}>
        <h2>Organize Your Daily Task</h2>

        <h4>All the task management feature organize in our app and more</h4>
        <ForwardButton />
      </div>
    </div>
  );
}
