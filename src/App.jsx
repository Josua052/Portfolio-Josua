import React, { useState, useEffect } from 'react';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home'; // Home sekarang mengandung Skills
// import Skills from './components/Skills'; // SOROT: Hapus impor ini
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'dark' ? true : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <NavbarComponent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home /* SOROT: isDarkMode tidak lagi diteruskan karena Home tidak membutuhkannya secara langsung untuk bagian skills yang di-handle di dalam Home itu sendiri */ />
      {/* SOROT: Hapus <Skills isDarkMode={isDarkMode} /> */}
    </div>
  );
}

export default App;