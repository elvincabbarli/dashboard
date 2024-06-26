import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/Home.tsx';
import About from './assets/About.tsx';
import Dashboard from './assets/Dashboard.tsx';
import Dashboard2 from './assets/Dashboard2.tsx';
import NavBar from './assets/NavBar.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
      </Routes>
    </Router>
  );
};

export default App;
