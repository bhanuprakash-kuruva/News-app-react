import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'blue', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Left Section: Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600,color:'black' }}>
              About the App
            </Typography>
            <Typography variant="body2">
              The World Info App provides real-time news, weather updates, and interactive world maps to keep you informed about global events and conditions.
            </Typography>
          </Grid>

          {/* Middle Section: Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600,color:'black' }}>
              Quick Links
            </Typography>
            <Grid container direction="column" >
              <Link href="tandc" color="inherit" sx={{ mt: 1,textDecoration:'none' }}>Privacy Policy</Link>
              <Link href="/tandc" color="inherit" sx={{ mt: 1,textDecoration:'none' }}>Terms of Service</Link>
              <Link href="/contact" color="inherit" sx={{ mt: 1,textDecoration:'none' }}>Contact Us</Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600,color:'black' }}>
              Services
            </Typography>
            <Grid container direction="column" >
              <Link href="/news" color="inherit" sx={{ mt: 1,textDecoration:'none' }}>News</Link>
              <Link href="/weather" color="inherit" sx={{ mt: 1,textDecoration:'none' }}>Weather</Link>
              <Link href="/maps" color="inherit" sx={{ mt: 1,textDecoration:'none' }}>Maps</Link>
            </Grid>
          </Grid>
          {/* Right Section: Social Media Icons */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600,color:'black' }}>
              Follow Us
            </Typography>
            <Grid container spacing={2}>
              {/* <Grid item>
                <IconButton color="inherit" href="#" target="_blank">
                  <Facebook />
                </IconButton>
              </Grid> */}
              <Grid item>
                <IconButton color="inherit" href="https://x.com/Pardhu_kuruva?t=cZFkiWnbzrgMju-Wk4W85Q&s=08" target="_blank">
                  <Twitter />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit" href="https://www.instagram.com/bhanuprakash_785/profilecard/?igsh=ZzI0ZTgwNTE33aWxz" target="_blank">
                  <Instagram />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton color="inherit" href="https://www.linkedin.com/in/bhanuprakash-kuruva" target="_blank">
                  <LinkedIn />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Section: Copyright */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} World Info App. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

