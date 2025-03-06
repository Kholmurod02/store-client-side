import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, InputBase, Box, Menu, MenuItem } from '@mui/material';
import { Search, Favorite, ShoppingCart, Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';
import NavMenu from '../menu/menu';

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to right, #7C3AED, #3B82F6)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <motion.img
            src={logo}
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          </Box>

        {/* Navigation Links (Desktop) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              Home
            </motion.div>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              Contact
            </motion.div>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              About
            </motion.div>
          </Link>
          <Link to="/signUp" style={{ textDecoration: 'none', color: 'white' }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              Sign Up
            </motion.div>
          </Link>
        </Box>

        {/* Search Bar and Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Search Bar */}
          <motion.div
            initial={{ width: '0px' }}
            animate={{ width: isSearchVisible ? '200px' : '0px' }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <InputBase
              placeholder="What are you looking for?"
              sx={{
                background: 'white',
                borderRadius: '20px',
                padding: '5px 10px',
                width: '100%',
              }}
            />
          </motion.div>

          {/* Search Icon */}
          <IconButton onClick={toggleSearch} sx={{ color: 'white' }}>
            <Search />
          </IconButton>

          {/* Wishlist Icon */}
          <IconButton component={Link} to="/wishes" sx={{ color: 'white' }}>
            <Favorite />
          </IconButton>

          {/* Cart Icon */}
          <IconButton component={Link} to="/cart" sx={{ color: 'white' }}>
            <ShoppingCart />
          </IconButton>
          <NavMenu/>
         

          {/* Hamburger Menu for Mobile */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/">
              Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/contact">
              Contact
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/about">
              About
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/signUp">
              Sign Up
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;