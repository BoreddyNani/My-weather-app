// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>About This App</h2>
      <p>
        This is a simple 3-page React weather application. It uses React Router for navigation
        and the OpenWeatherMap API to fetch real-time weather data.
      </p>
      <p>Created to demonstrate routing, state management, and side effects in React!</p>
    </div>
  );
}

export default About;