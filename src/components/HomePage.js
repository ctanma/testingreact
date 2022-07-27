import React from 'react'
import './HomePage.css';
import '../App.css';
import {Button} from './Button';

function HomePage() {
  return (
    <div className ='homepage-container'>
        <div className = 'welcome-sign'>
          <h1>Welcome, User!</h1>
          <p>Get started :D</p> 
        </div>
        <div className = 'generalConnections'>
          <div className = 'myconnections'>
            <h1>My Connections</h1>
          </div>
          <div className = 'new-connections'>
            <h1>Connection Requests</h1>
          </div>
        </div>
    </div>
  );
}

export default HomePage; 