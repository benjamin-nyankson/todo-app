import React from "react";
import Image from "../Assests/Pictures/todo.png";
import { HomeStyle, PictureStyle, White } from "../Styles/Styles";
import ForwardButton from "../Buttons/ForwardButton";
export default function Home() {
  return (
    <div style={HomeStyle}>
      <img src={Image} alt="" style={PictureStyle} />

      <div style={White}>
        <h2>Organize Your Daily Task</h2>

        <h4>All the task management feature organize in our app and more</h4>
        <ForwardButton/>
      </div>
    </div>
  );
}
