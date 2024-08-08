import React, { useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Home from '../Components/Home/home';
import Sidebar from '../Components/Sidebar/sidebar';

const HomePage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="homepage-wrapper">
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <Sidebar isOpen = {isSidebarOpen} toggleSidebar={toggleSidebar} />}
      <Home />
    </div>
  );
};

export default HomePage;
