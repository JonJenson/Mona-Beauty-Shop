import './sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-items">
        <li className="sidebar-item">
          <Link to="/">
            <i className="bx bx-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/services">
            <i className="bx bx-briefcase"></i>
            <span>Services</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="">
            <i className="bx bx-wallet"></i>
            <span>Payout</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="">
            <i className="bx bx-message-square-detail"></i>
            <span>Feedback</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
