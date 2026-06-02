// src/components/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      // Navigate to the Results page with the city as a URL parameter
      navigate(`/results/${city}`);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Weather Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '8px', fontSize: '16px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '8px 15px', fontSize: '16px', marginLeft: '5px' }}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Home;