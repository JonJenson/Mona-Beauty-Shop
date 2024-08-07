import React from "react";
import "boxicons/css/boxicons.min.css";
import "./navbar.css";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav id="navbar">
      <div className="nav-contents">
        <div className="left-icons">
          <div className="icon-container" onClick={toggleSidebar}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
        <div className="logo-container">
          <img src="/logo-new.png" alt="MONA" />
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
    </nav>
  );
};

export default Navbar;
