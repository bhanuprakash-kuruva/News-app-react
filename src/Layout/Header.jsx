import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#0044ff' }}>
      <Toolbar>
        {/* Logo Section */}
        <Box sx={{ backgroundColor: '#0044ff', borderRadius: '10px', p: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h4" sx={{ flexGrow: 1,fontFamily:'Newsreader', display: 'flex', fontWeight: 'bold', alignItems: 'center', color: 'black' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlVy9XmQxuFX-m1MotTJfzvmooLdDu3B5Vg&s"
                style={{ height: '28px', width: '28px', marginRight: '8px' }}
                alt="logo"
              />
              Duniya
            </Typography>
          </Link>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, ml: 'auto' }}>
          <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', flexGrow: 1, ml: 90 }}>
          {['Home', 'News', 'Weather', 'Maps'].map((text) => (
            <NavLink
              key={text}
              to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'orange' : 'white',
                margin: '0 12px',
                fontSize: '1rem',
                fontWeight: isActive ? 'bold' : 'normal',
              })}
            >
              {text}
            </NavLink>
          ))}
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#1976d2', // Blue background color for the Drawer
            color: 'white', // Text color inside Drawer
            width: 250,
          },
        }}
      >
        <Box sx={{ paddingTop: 2, textAlign: 'center' }}>
          <Box sx={{ backgroundColor: '#0044ff', p: 1, marginBottom: 2 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlVy9XmQxuFX-m1MotTJfzvmooLdDu3B5Vg&s"
                  style={{ height: '23px', width: '23px', marginRight: '8px' }}
                  alt="logo"
                />
                Duniya
              </Typography>
            </Link>
          </Box>
          <List>
            {['Home', 'News', 'Weather', 'Maps'].map((text) => (
              <ListItem button key={text} onClick={() => toggleDrawer(false)} sx={{ textAlign: 'center' }}>
                <NavLink
                  to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                  style={{
                    textDecoration: 'none',
                    color: 'white', // Text color for the links in Drawer
                    width: '100%',
                    padding: '10px',
                  }}
                >
                  <ListItemText primary={text} />
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ borderColor: 'white' }} />
        </Box>
      </Drawer>
    </AppBar>
  );
}
