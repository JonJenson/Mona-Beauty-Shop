import React, { useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Home1 from '../Components/Home1/home1';
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
      <Home1 />
    </div>
  );
};

export default HomePage;
