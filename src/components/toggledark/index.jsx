import React, { useState, useEffect } from 'react';

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const setInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  };

  useEffect(() => {
    setInitialDarkMode();
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className="dark-mode-toggle">
      <label htmlFor="darkModeToggle">
        <i className={`fa${isDarkMode ? 's' : 'r'} fa-moon`}></i>
      </label>
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
    </div>
  );
};

export default ToggleDarkMode;
