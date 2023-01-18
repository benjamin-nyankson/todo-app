import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import { ForwardButtonStyle } from "../Styles/Styles";
import { Link } from "react-router-dom";
function AddButton() {
  return (
    <div>
      <Link to="/add">
        <IconButton>
          <AddCircleIcon sx={ForwardButtonStyle} />
        </IconButton>
      </Link>
    </div>
  );
}

export default AddButton;
