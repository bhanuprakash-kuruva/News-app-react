
// import React, { useState, useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import Layout from '../Layout/Layout';
// import { TextField, Button, Typography, Alert, CircularProgress, Box, Snackbar } from '@mui/material';
// import { Search } from '@mui/icons-material';

// const MapComponent = () => {
//   // Default location (India)
//   const defaultCoords = { latitude: 20.5937, longitude: 78.9629 };

//   const [latitude, setLatitude] = useState(defaultCoords.latitude);
//   const [longitude, setLongitude] = useState(defaultCoords.longitude);
//   const [place, setPlace] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const mapRef = useRef(null); // Reference to store the map instance

//   const fetchCoordinates = async (placeName) => {
//     if (placeName.trim()) {
//       setLoading(true); // Show loading indicator when fetching coordinates
//       try {
//         const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(placeName)}&format=json&limit=1`;
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.length === 0) {
//           throw new Error('Location not found');
//         }

//         const { lat, lon } = data[0];
//         setLatitude(parseFloat(lat));
//         setLongitude(parseFloat(lon));
//         setError('');
//         setSuccessMessage('Location found!');
//         setOpenSnackbar(true); // Show success message
//       } catch (err) {
//         setError(err.message);
//         setSuccessMessage('');
//       } finally {
//         setLoading(false); // Hide loading indicator
//       }
//     }
//   };

//   useEffect(() => {
//     if (!mapRef.current) {
//       // Initialize the map only once
//       mapRef.current = L.map('map').setView([latitude, longitude], 5);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(mapRef.current);

//       // Allow users to click on the map to place a marker and update the location
//       mapRef.current.on('click', (e) => {
//         const { lat, lng } = e.latlng;
//         setLatitude(lat);
//         setLongitude(lng);
//         setPlace('');
//       });
//     } else {
//       // If the map is already initialized, just update the map center
//       mapRef.current.setView([latitude, longitude], 5);
//     }

//     // Clear previous marker and add new one
//     mapRef.current.eachLayer((layer) => {
//       if (layer instanceof L.Marker) {
//         mapRef.current.removeLayer(layer); // Remove previous markers
//       }
//     });

//     const marker = L.marker([latitude, longitude]).addTo(mapRef.current);
//     marker.bindPopup('You are here!').openPopup();

//   }, [latitude, longitude]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchCoordinates(place);
//   };

//   const handleReset = () => {
//     setPlace('');
//     setLatitude(defaultCoords.latitude);
//     setLongitude(defaultCoords.longitude);
//     setError('');
//     setSuccessMessage('');
//     setOpenSnackbar(false);
//   };

//   return (
//     <Layout>
//       {/* Fullscreen map */}
//       <div id="map" style={{ height: '100vh', position: 'relative' }} />

//       {/* Fixed search box at the top-right corner */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '60px',
//           right: '20px',
//           display: 'flex',
//           backgroundColor: 'white',
//           borderRadius: '10px',
//           padding: 2,
//           boxShadow: 3,
//           zIndex: 1000,
//           width: '280px',
//         }}
//       >
//         {/* <Typography variant="h6" gutterBottom align="center">
//           Search for a Place
//         </Typography> */}
//         <TextField
//           label="Enter a location here"
//           variant="outlined"
//           value={place}
//           onChange={(e) => setPlace(e.target.value)}

//           style={{ marginBottom: '20px' }}
//         />
//         <Button
//           onClick={handleSearch}
//           variant="contained"
//           color="primary"
//           style={{  mx: 1 }}
//           disabled={loading}
//         >
//           {loading ? <CircularProgress size={24} color="inherit" /> : <Search/>}
//         </Button>

//       </Box>

//       {/* Loading Spinner */}
//       {loading && (
//         <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//           <CircularProgress />
//         </div>
//       )}

//       {/* Error Alert */}
//       {error && (
//         <Alert severity="error" style={{ textAlign: 'center', marginBottom: '20px' }}>
//           {error}
//         </Alert>
//       )}

//       {/* Success Snackbar */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={() => setOpenSnackbar(false)}
//         message={successMessage}
//       />
//     </Layout>
//   );
// };

// export default MapComponent;
import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Layout from '../Layout/Layout';
import { TextField, Button, Typography, Alert, CircularProgress, Box, Snackbar, IconButton } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

const MapComponent = () => {
  // Default location (India)
  const defaultCoords = { latitude: 20.5937, longitude: 78.9629 };

  const [latitude, setLatitude] = useState(defaultCoords.latitude);
  const [longitude, setLongitude] = useState(defaultCoords.longitude);
  const [place, setPlace] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const mapRef = useRef(null); // Reference to store the map instance

  const fetchCoordinates = async (placeName) => {
    if (placeName.trim()) {
      setLoading(true); // Show loading indicator when fetching coordinates
      try {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(placeName)}&format=json&limit=1`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) {
          throw new Error('Location not found');
        }

        const { lat, lon } = data[0];
        setLatitude(parseFloat(lat));
        setLongitude(parseFloat(lon));
        setError('');
        setSuccessMessage('Location found!');
        setOpenSnackbar(true); // Show success message
      } catch (err) {
        setError(err.message);
        setSuccessMessage('');
      } finally {
        setLoading(false); // Hide loading indicator
      }
    }
  };

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map only once
      mapRef.current = L.map('map').setView([latitude, longitude], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Allow users to click on the map to place a marker and update the location
      mapRef.current.on('click', (e) => {
        const { lat, lng } = e.latlng;
        setLatitude(lat);
        setLongitude(lng);
        setPlace('');
      });
    } else {
      // If the map is already initialized, just update the map center
      mapRef.current.setView([latitude, longitude], 5);
    }

    // Clear previous marker and add new one
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current.removeLayer(layer); // Remove previous markers
      }
    });

    const marker = L.marker([latitude, longitude]).addTo(mapRef.current);
    marker.bindPopup('You are here!').openPopup();

  }, [latitude, longitude]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCoordinates(place);
  };

  const handleReset = () => {
    setPlace('');
    setLatitude(defaultCoords.latitude);
    setLongitude(defaultCoords.longitude);
    setError('');
    setSuccessMessage('');
    setOpenSnackbar(false);
  };

  return (
    <Layout>
      {/* Fullscreen map */}
      <div id="map" style={{ height: '100vh', position: 'relative' }} />

      {/* Fixed search box at the top-right corner */}
      <Box
  sx={{
    position: 'absolute',
    top: '60px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',  // Center items vertically
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: 1,
    boxShadow: 3,
    zIndex: 1000,
    width: 'auto', // Let width adjust automatically
    maxWidth: '400px', // Limit max width for responsiveness
  }}
>
  {/* Search Bar */}
  <TextField
    label="Enter a location"
    variant="outlined"
    value={place}
    onChange={(e) => setPlace(e.target.value)}
    fullWidth
    sx={{ marginRight: 1 }}
  />
  
  {/* Search and Reset Buttons */}
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Button
      onClick={handleSearch}
      variant="contained"
      color="primary"
      disabled={loading}
      sx={{ marginRight: 1, minWidth: '60px' }}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : <Search />}
    </Button>

    <IconButton
      onClick={handleReset}
      color="secondary"
      sx={{ alignSelf: 'center' }}
      disabled={loading || !place}
    >
      <Clear />
    </IconButton>
  </Box>
</Box>


      {/* Error Alert */}
      {error && (
        <Alert severity="error" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', width: '90%' }}>
          {error}
        </Alert>
      )}

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={successMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Layout>
  );
};

export default MapComponent;

