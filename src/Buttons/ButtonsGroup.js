import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router";
export default function ButtonsGroup() {
    const [loading, setLoading] =useState(false)
  const Navigate = useNavigate();
  function Urgent() {
    Navigate("/urgent");
  }

  function High() {
    Navigate("/high");
  }

  function Medium() {
    Navigate("/medium");
  }

  function Low() {
    Navigate("/low");
  }
  return (
    <div>
      <ButtonGroup variant="contained">
        <Button onClick={Urgent}>urgent</Button>
        <Button onClick={High}>High</Button>
        <Button onClick={Medium}>medium</Button>
        <Button onClick={Low}>low</Button>
      </ButtonGroup>
    </div>
  );
}
