
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  TextField,
  Paper,
  IconButton,
  Fade,
  Tooltip,
  Button,
  Switch,
  FormControlLabel,
  Grid,
  AppBar,
  Toolbar
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Layout from '../Layout/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [place, setPlace] = useState('Berlin');
  const [input, setInput] = useState('');
  const [coords, setCoords] = useState({ latitude: 52.52, longitude: 13.41 });
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unit, setUnit] = useState('metric'); // metric for Celsius, imperial for Fahrenheit

  const fetchWeather = async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m,weathercode`;

    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data.');
      }
      const data = await response.json();

      const { hourly } = data;
      const hourlyData = hourly.time.map((time, index) => ({
        time: new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        temperature: hourly.temperature_2m[index],
      }));

      setWeatherData(hourlyData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCoordinates = async () => {
    const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      place
    )}&format=json&limit=1`;

    try {
      setLoading(true);
      const response = await fetch(geoUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch coordinates.');
      }
      const data = await response.json();
      if (data.length === 0) {
        throw new Error('Location not found.');
      }

      const { lat, lon } = data[0];
      setCoords({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrentWeather = async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current_weather=true&units=${unit}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch current weather.');
      }
      const data = await response.json();
      setCurrentWeather(data.current_weather);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeather();
    fetchCurrentWeather();
  }, [coords, unit]);

  const handleSearch = () => {
    if (input.trim()) {
      setPlace(input.trim());
      setInput('');
      fetchCoordinates();
    }
  };

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  const getWeatherIcon = (temp) => {
    if (temp > 20) return <WbSunnyIcon color="warning" fontSize="large" />;
    if (temp > 10) return <CloudIcon color="info" fontSize="large" />;
    return <AcUnitIcon color="primary" fontSize="large" />;
  };

  const getBackgroundImage = (weatherCode) => {
    switch (weatherCode) {
      case 0:
        return 'url(https://static.vecteezy.com/system/resources/thumbnails/042379531/small/ai-generated-blue-sky-with-bright-sun-as-abstract-panoramic-background-ai-generated-image-photo.jpg)';
      case 1:
      case 2:
        return 'url(https://www.shutterstock.com/image-vector/blue-sky-cloud-nature-beautiful-600nw-2472495907.jpg)';
      case 3:
      case 4:
        return 'url(https://static.vecteezy.com/system/resources/thumbnails/051263379/small/rainy-day-serenity-water-droplets-and-floating-autumn-leaves-photo.jpg)';
      case 5:
      case 6:
        return 'url(https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=612x612&w=0&k=20&c=MyYLgJ9NKAGMGh69lTW1r03_f91pozcmrZyPo9Oqcu8=)';
      case 7:
      case 8:
        return 'url(https://race.com/wp-content/uploads/2023/04/can-weather-impact-wifi-1000x510.webp)';
      default:
        return 'url(https://static.vecteezy.com/system/resources/thumbnails/042379531/small/ai-generated-blue-sky-with-bright-sun-as-abstract-panoramic-background-ai-generated-image-photo.jpg)';
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={80} color="primary" />
      </Box>
    );
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          mt: 4,
          px: 2,
          minHeight: '100vh',
          background: currentWeather ? getBackgroundImage(currentWeather.weathercode) : '#f0f0f0',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background 0.5s ease',
          paddingBottom: '2rem',
        }}
      >
        <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 'bold', color: 'white' }}>
          Weather Forecast
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 4, color: 'white' }}>
          Hourly Temperature in <span style={{ color: '#ff6f00' }}>{place}</span>
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Paper sx={{ display: 'flex', alignItems: 'center', padding: '6px 12px', width: 400 }}>
            <TextField
              label="Enter Place"
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: 1 }}
            />
            <IconButton color="primary" onClick={handleSearch} sx={{ ml: 1 }}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <FormControlLabel
            control={<Switch checked={unit === 'imperial'} onChange={handleUnitToggle} />}
            label={unit === 'imperial' ? 'Fahrenheit' : 'Celsius'}
            sx={{ color: 'white' }}
          />
        </Box>

        {error && (
          <Typography variant="h6" color="error" align="center" gutterBottom>
            {error}
          </Typography>
        )}

        {currentWeather && (
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
              {currentWeather.temperature}°{unit === 'imperial' ? 'F' : 'C'}
            </Typography>
            <Typography variant="h6" sx={{ color: 'white' }}>
              {currentWeather.weathercode === 0 ? 'Clear' : currentWeather.weathercode === 1 ? 'Partly Cloudy' : 'Cloudy'}
            </Typography>
          </Box>
        )}

        {weatherData.length > 0 && (
          <>
            <Box sx={{ mt: 4 }}>
              <ResponsiveContainer width="100%" sx={{ color: 'white' }} height={300}>
                <LineChart data={weatherData}>
                  <XAxis dataKey="time" stroke="white" />
                  <YAxis dataKey="temperature" stroke="white" />
                  <Line type="monotone" dataKey="temperature" stroke="#ff7300" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Box>

            
            <Slider {...carouselSettings}>
  {weatherData.slice(0, 12).map((item, index) => (
    <Fade in={true} timeout={1000} key={index}>
      <Tooltip
        title={`Time: ${item.time}, Temperature: ${item.temperature}°${unit === 'imperial' ? 'F' : 'C'}`}
        arrow
      >
        <Card
          sx={{
            width: '250px',
            boxShadow: 3,
            borderRadius: 2,
            overflow: 'hidden',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: 6,
              cursor: 'pointer',
              backgroundColor: '#ffcc00', // Highlight color on hover
            },
            backgroundColor: item.temperature > 20 ? '#ffeb3b' : item.temperature > 10 ? '#80deea' : '#81d4fa', // Dynamic background color based on temperature
          }}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              {item.time}
            </Typography>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {item.temperature}°{unit === 'imperial' ? 'F' : 'C'}
            </Typography>
            {getWeatherIcon(item.temperature)}
          </CardContent>
        </Card>
      </Tooltip>
    </Fade>
  ))}
</Slider>

          </>
        )}
      </Box>
    </Layout>
  );
};

export default WeatherForecast;
