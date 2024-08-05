import './sidebar.css';

import React from 'react';


const Sidebar: React.FC = () => {

    return (
        <div className="sidebar-wrapper">
            <ul className="sidebar-items">
                <li className="sidebar-item">
                    <i className="bx bx-home"></i>
                    <span>Home</span>
                </li>
                <li className="sidebar-item" >
                    <i className="bx bx-briefcase"></i>
                    <span>Services</span>
                </li>
                <li className="sidebar-item" >
                    <i className="bx bx-wallet"></i>
                    <span>Payout</span>
                </li>
                <li className="sidebar-item" >
                    <i className="bx bx-message-square-detail"></i>
                    <span>Feedback</span>
                </li>
            </ul>

        </div>
    );
}

export default Sidebar;
