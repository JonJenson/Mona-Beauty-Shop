import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Home1 from '../Components/Home1/home1';
import Home2 from '../Components/Home2/home2';
import Sidebar from '../Components/Sidebar/sidebar';
import Home3 from '../Components/Home3/home3';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const components = [<Home1 key="home1" />,<Home2 key="home2" /> , <Home3 key="home3" />];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-wrapper">
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      <div className="slider-wrapper">
        {components.map((component, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'show' : 'hide'}`}
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
