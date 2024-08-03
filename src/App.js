import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './pages/Overview'; 
import Footer from './components/Footer';
import { StateProvider, useStateContext } from './context/StateContext';

import './styles/global.css';
import './styles/darkmode.css';

const AppContent = () => {
  const { isDarkMode } = useStateContext();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <StateProvider>
    <AppContent />
  </StateProvider>
);

export default App;
