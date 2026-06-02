import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [theme, setTheme] = useState('light');

  // 1. Update the toggle function to also change the global body style
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Reach outside React and change the HTML body directly!
    document.body.style.backgroundColor = newTheme === 'light' ? '#ffffff' : '#121212';
    document.body.style.color = newTheme === 'light' ? '#161616' : '#ffffff';
  };

  // 2. Set the initial body colors when the app first loads
  useEffect(() => {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#333333';
    document.body.style.transition = 'background-color 0.3s ease'; // Adds a smooth fade
  }, []);

  return (
    <nav style={{ 
      padding: '10px 20px', 
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#1e1e1e', // Slightly offset from pure black
      display: 'flex', 
      gap: '15px',
      alignItems: 'center',
      borderBottom: theme === 'light' ? '1px solid #ddd' : '1px solid #444'
    }}>
      <Link to="/" style={{ 
        textDecoration: 'none', 
        color: theme === 'light' ? '#333' : '#fff', 
        fontWeight: 'bold' 
      }}>
        Home
      </Link>
      
      <Link to="/about" style={{ 
        textDecoration: 'none', 
        color: theme === 'light' ? '#333' : '#fff', 
        fontWeight: 'bold' 
      }}>
        About
      </Link>
      
      <button 
        onClick={toggleTheme}
        style={{
          padding: '8px 12px',
          cursor: 'pointer',
          marginLeft: 'auto', // Pushes the button to the right side
          borderRadius: '5px',
          border: '1px solid',
          backgroundColor: theme === 'light' ? '#333' : '#fff',
          color: theme === 'light' ? '#fff' : '#333'
        }}
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  );
}

export default Navbar;