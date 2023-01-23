import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import { ForwardButtonStyle } from "../Styles/Styles";
import { Link } from "react-router-dom";

function ForwardButton() {
  return (
    <div>
      <Link to="/urgent">
        <IconButton>
          <ArrowForwardIcon sx={ForwardButtonStyle} />
        </IconButton>
      </Link>
    </div>
  );
}

export default ForwardButton;
