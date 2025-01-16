
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import WeatherForecast from './components/Weather';
import News from './components/News';
import MapComponent from './components/Maps';
import Home from './components/Home'
import TermsAndConditions from './components/TandC';
import Contact from './components/Contact';
function App() {
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Optionally, you can reset the category or fetch search-specific results here.
    console.log(`Searching for: ${query}`);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/weather' element={<WeatherForecast />} />
          <Route path='/maps' element={<MapComponent />} />
          <Route path='/tandc' element={<TermsAndConditions/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>


    </>
  );
}

export default App;


