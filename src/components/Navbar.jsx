
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
const Navbar = ({ setCategory, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const myStyle = {
    cursor: 'pointer',
  };

  const onSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    handleSearch(searchQuery); // Call the search handler with the search query
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark">
            {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlVy9XmQxuFX-m1MotTJfzvmooLdDu3B5Vg&s"
              style={{ height: '23px', width: '23px' }}
              alt="logo"
            /> */}
            NewsStream
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <div className="nav-link" style={myStyle} onClick={() => setCategory('technology')}>Technology</div>
            </li>
           
            <li className="nav-item">
              <div className="nav-link" style={myStyle} onClick={() => setCategory('business')}>Business</div>
            </li>
            
            <li className="nav-item">
              <div className="nav-link" style={myStyle} onClick={() => setCategory('science')}>Science</div>
            </li>
            
            <li className="nav-item">
              <div className="nav-link" style={myStyle} onClick={() => setCategory('sports')}>Sports</div>
            </li>
            
            <li className="nav-item">
              <div className="nav-link" style={myStyle} onClick={() => setCategory('entertainment')}>Entertainment</div>
            </li>
            
            <li className="nav-item">
              <div className="nav-link" style={myStyle} onClick={() => setCategory('health')}>Health</div>
            </li>
            
            
          </ul>
          <form className="d-flex" role="search" onSubmit={onSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search news..."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
