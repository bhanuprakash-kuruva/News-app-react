
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, useTheme } from '@mui/material';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, borderRadius: 2, color: 'white', my: 2 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'white',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }, // Responsive font size
            }}
            gutterBottom
          >
            Welcome to the World Info App
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} // Smaller font size for mobile
          >
            Get the latest world news, weather updates, and explore interactive world maps.
          </Typography>
        </Box>

        {/* Main Cards */}
        <Grid container spacing={3}>
          {/* World News Card */}
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 10,
                },
                backgroundColor: '#1E3A8A',
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Smaller font for mobile
                  }}
                  gutterBottom
                >
                  World News
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                >
                  Stay updated with the latest global news. Explore headlines from around the world.
                </Typography>
                <Link to="/news">
                  <Button
                    size="small"
                    sx={{ mt: 2 }}
                    color="primary"
                    variant="contained"
                    fullWidth // Makes button full width on mobile
                  >
                    Find Latest News
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* World Weather Card */}
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 10,
                },
                backgroundColor: '#1E3A8A',
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  }}
                  gutterBottom
                >
                  World Weather
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                >
                  Get up-to-date weather forecasts for any country or city across the globe.
                </Typography>
                <Link to="/weather">
                  <Button
                    size="small"
                    sx={{ mt: 2 }}
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Check Weather
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* World Map Card */}
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 10,
                },
                backgroundColor: '#1E3A8A',
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  }}
                  gutterBottom
                >
                  World Map
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                >
                  Explore interactive world maps to track countries, regions, and global events.
                </Typography>
                <Link to="/maps">
                  <Button
                    size="small"
                    sx={{ mt: 2 }}
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    View Map
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* About the App Section */}
        <Box
          sx={{
            mt: 6,
            textAlign: 'center',
            backgroundColor: '#1E3A8A',
            padding: { xs: 2, sm: 3 }, // Responsive padding
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 600,
              color: 'white',
              fontSize: { xs: '1.75rem', sm: '2.25rem' },
            }}
            gutterBottom
          >
            About the App
          </Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              mb: 2,
            }}
          >
            This app provides users with real-time news, weather updates, and interactive maps. 
            It's designed to keep you informed about the world, no matter where you are.
          </Typography>
          <Typography variant="body1" color="white" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            Whether you're looking for the latest news headlines, checking the weather in your city, or 
            exploring global maps, the World Info App offers all of these features in one place.
            Stay connected, stay informed, and discover the world around you with ease. Our team is 
            committed to providing you with accurate, real-time data and a seamless user experience.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;