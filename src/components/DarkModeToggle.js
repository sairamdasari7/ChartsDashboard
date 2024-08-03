import React from 'react';
import { useStateContext } from '../context/StateContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useStateContext();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
