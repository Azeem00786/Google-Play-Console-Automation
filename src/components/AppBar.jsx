import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Header.css'; // Import your CSS file

function Header() {
  return (
    <AppBar position="static"  style={{ backgroundColor: '#afafaf' }}>
      <Toolbar>
        <Typography variant="h6" component="div" className="custom-typography">
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
