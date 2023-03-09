import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { ForwardButtonStyle } from "../Styles/Styles";
import { Link } from "react-router-dom";
function AddButton() {
  return (
    <div>
      <Link to="/allTodos">
        <IconButton title="Back">
          <ArrowBackIosIcon />
        </IconButton>
      </Link>
    </div>
  );
}

export default AddButton;
