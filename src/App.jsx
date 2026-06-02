// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Results from './components/Results';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/results/:city" element={<Results />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;