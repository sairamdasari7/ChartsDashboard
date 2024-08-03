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
      <h1>Dashboard</h1>
      <div className="header-span">
        <div><span>Profile</span></div>
        <div><span>Notifications</span></div>
        <div><DarkModeToggle /></div>
      </div>
    </header>
  );
};

export default Header;
