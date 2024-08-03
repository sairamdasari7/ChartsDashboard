import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview'; 
import Analytics from './pages/Analytics'; 
import Settings from './pages/Settings';
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
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <StateProvider>
    <Router>
      <AppContent />
    </Router>
  </StateProvider>
);

export default App;
