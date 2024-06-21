import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Header.css"; // Import your CSS file
import { useSelector } from "react-redux";

function Header() {
  const { name } = useSelector((state) => state.todos);
  console.log("redux name", name);
  return (
    <AppBar position="static" style={{ backgroundColor: "#afafaf" }}>
      <Toolbar>
        <Typography variant="h6" component="div" className="custom-typography">
          Google Play Developer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
