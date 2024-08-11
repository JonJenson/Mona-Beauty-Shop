import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home-Page';
import ServicesPage from './Pages/Services-Page';
import './App.css';

const App: React.FC = () => {

  const toggleFullScreen = () => {
    const element = document.documentElement;
    const isFullScreen = document.fullscreenElement;

    if (isFullScreen) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error exiting full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      element.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  useEffect(() => {
    const handleDoubleClick = () => {
      toggleFullScreen();
    };

    document.addEventListener('dblclick', handleDoubleClick);

    return () => {
      document.removeEventListener('dblclick', handleDoubleClick);
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
};

export default App;
