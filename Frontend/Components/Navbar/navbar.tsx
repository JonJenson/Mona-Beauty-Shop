import React from "react";
import "boxicons/css/boxicons.min.css";
import { useState } from "react";
import "./navbar.css";
import Sidebar from "../Sidebar/sidebar";
import  Logo  from "../../../Data/Images/Logo.png"

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav id="navbar">
      <div className="nav-contents">
        <div className="left-icons">
          <div className="icon-container" onClick={toggleSidebar}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="MONA" />
        </div>
        <div className="right-icons">
          <div className="icon-container">
            <i className="bx bx-search"></i>
          </div>
          <div className="icon-container">
            <i className="bx bx-cart"></i>
          </div>
        </div>
      </div>
      {isSidebarOpen && <Sidebar />}
    </nav>
  );
};

export default Navbar;
