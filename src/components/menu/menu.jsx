import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { destroyToken } from "../../../utils/token";

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null); // For mobile menu

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Handle profile menu open
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle mobile menu open
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  // Profile menu
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
     <Link to='/account'> <MenuItem onClick={handleMenuClose}>My Account</MenuItem></Link>
     <Link to='/login'> <MenuItem onClick={()=>{handleMenuClose(),destroyToken()}}>Logout</MenuItem></Link>
    </Menu>
  );

  // Mobile menu
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Home</MenuItem>
      <MenuItem onClick={handleMenuClose}>About</MenuItem>
      <MenuItem onClick={handleMenuClose}>Services</MenuItem>
      <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>

       
          <IconButton
            size="medium"
            edge=""
            color="inherit"
            aria-label="account"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>

      {renderMenu}
    </Box>
  );
};

export default NavMenu;