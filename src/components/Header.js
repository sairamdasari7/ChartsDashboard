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
<<<<<<< HEAD
      <h1>Dashboard</h1>
      <div className="header-span">
=======
    <h1>DashBoard</h1>
      <div>
>>>>>>> 5e8347dfbc893319fd6e8c56efbd403f6040ff87
        <div><span>Profile</span></div>
        <div><span>Notifications</span></div>
        <div><DarkModeToggle /></div>
      </div>
    </header>
  );
};

export default Header;
