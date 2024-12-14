import React from 'react';
import './Sidebar.css';
import juImage from './justice.jpeg';
import Capture from './capture.webp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 ><img src={Capture} ></img>Jur</h2>
      <br>
      </br>
      <br></br>
      <ul>
        <li>📶 Dashboard</li>
        <li>💼 My Cases</li>
        <li>📈 Activities</li>
        <li>📅 Calendar</li>
        <li>📄 Files</li>
        <li>✊🏻 Open a Dispute</li>
      </ul>
      <br></br>
      <div className="justice-banner">
      <img src={juImage} alt="Get Justice" />
          <p>Get Justice on every Claim</p>
        </div>
    </div>
    
  );
};

export default Sidebar;