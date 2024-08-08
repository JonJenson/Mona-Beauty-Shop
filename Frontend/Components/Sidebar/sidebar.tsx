import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
      <div className="sidebar-wrapper">
        <div className="sidebar-icon-container" onClick={toggleSidebar}>
        <i className='bx bx-x'></i>
        </div>
        <ul className="sidebar-items">
          <li className="sidebar-item">
            <Link to="/" onClick={toggleSidebar}>
              <i className="bx bx-home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/services" onClick={toggleSidebar}>
              <i className="bx bx-briefcase"></i>
              <span>Services</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to=" " onClick={toggleSidebar}>
              <i className="bx bx-wallet"></i>
              <span>Payout</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="" onClick={toggleSidebar}>
              <i className="bx bx-message-square-detail"></i>
              <span>Feedback</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
