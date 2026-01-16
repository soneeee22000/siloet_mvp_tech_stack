import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SiloettArchitecture from './SiloettArchitecture';
import ComparisonMatrix from './ComparisonMatrix';
import Navigation from './Navigation';
import SiloettUiMockup from './SiloettUiMockup';
import SiloettRoadmap from './SiloettRoadmap';
import SiloettFinancials from './SiloettFinancials';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Apply a theme class to the document body for page-level background
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-app-dark' : 'bg-app-light'}`}>
        <Navigation theme={theme} onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<SiloettArchitecture theme={theme} />} />
          <Route path="/comparison" element={<ComparisonMatrix theme={theme} />} />
          <Route path="/ui-mockup" element={<SiloettUiMockup theme={theme} />} />
          <Route path="/roadmap" element={<SiloettRoadmap theme={theme} />} />
          <Route path="/financials" element={<SiloettFinancials theme={theme} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
