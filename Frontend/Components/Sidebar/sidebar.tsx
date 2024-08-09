import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <>
      {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
      <div className="sidebar-wrapper">
        <div className="sidebar-icon-container" onClick={toggleSidebar}>
          <i className='bx bx-x'></i>
        </div>
        <ul className="sidebar-items">
          <li className="sidebar-item" onClick={() => { navigate('/'); toggleSidebar(); }}>
            <i className="bx bx-home"></i>
            <span>Home</span>
          </li>
          <li className="sidebar-item" onClick={() => { navigate('/services'); toggleSidebar(); }}>
            <i className="bx bx-briefcase"></i>
            <span>Services</span>
          </li>
          <li className="sidebar-item" onClick={() => { navigate('/payout'); toggleSidebar(); }}>
            <i className="bx bx-wallet"></i>
            <span>Payout</span>
          </li>
          <li className="sidebar-item" onClick={() => { navigate('/feedback'); toggleSidebar(); }}>
            <i className="bx bx-message-square-detail"></i>
            <span>Feedback</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
