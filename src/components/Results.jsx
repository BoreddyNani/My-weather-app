// src/components/Results.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Results() {
  const { city } = useParams(); // Get the city from the URL
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // REMEMBER: Replace this with your actual OpenWeatherMap API Key
  const API_KEY = '';

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('City not found or API error');
        }
        
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, API_KEY]); // Re-run the effect if the city parameter changes

  if (loading) return <div style={{ padding: '20px' }}>Loading weather for {city}...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
      
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', display: 'inline-block' }}>
        <h1 style={{ margin: '0' }}>{Math.round(weatherData.main.temp)}°C</h1>
        <p style={{ textTransform: 'capitalize', fontSize: '18px' }}>
          {weatherData.weather[0].description}
        </p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      </div>

      <br />
      <Link to="/">← Back to Search</Link>
    </div>
  );
}

export default Results;
