import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
export default function BackDrop() {
  const [open, setOpen] = useState(true);
  const Navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  //   const handleToggle = () => {
  //     setOpen(!open);
  //   };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
      Navigate("/");
    }, 3000);
    
  }, []);

  return (
    <div>
      {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
