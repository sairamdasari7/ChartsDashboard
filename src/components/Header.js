import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>Overview</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </nav>
    <h1>DashBoard</h1>
      <div>
        <span>Profile</span>
        <span>Notifications</span>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
