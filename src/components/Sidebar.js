import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/">Overview</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/settings">Settings</Link>
    </aside>
  );
};

export default Sidebar;
