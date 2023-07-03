import React, { useState } from 'react';
import '../components/Sidebar.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    const lightMode = {
      '--light': '#e8e8e8', // Light color
      '--dark': '#212121', // Dark color
    };
    const darkMode = {
      '--light': '#212121', // Light color
      '--dark': '#e8e8e8', // Dark color
    };

    const currentTheme = getComputedStyle(root).getPropertyValue('--light').trim();
    const newTheme = currentTheme === lightMode['--light'] ? darkMode : lightMode;

    for (const property in newTheme) {
      root.style.setProperty(property, newTheme[property]);
    }

    setTimeout(() => {
        setIsDarkMode(newTheme === darkMode);
        const toggle = document.querySelector('.toggle');
        toggle.classList.add('toggle-transition');
        setTimeout(() => {
          toggle.classList.remove('toggle-transition');
        }, 300);
      }, 300);
    };

  return (
    <div className="toggle" style={{ display: 'flex' }} onClick={toggleTheme}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
        style={{ display: isDarkMode ? 'none' : 'block' }}
      >
        {/* Light mode SVG */}
        <path d="M280-292q-78.333 0-133.167-54.765Q92-401.529 92-479.765 92-558 146.833-613 201.667-668 280-668h400q78.333 0 133.167 54.765Q868-558.471 868-480.235 868-402 813.167-347 758.333-292 680-292H280Zm0-22h400q69.225 0 117.612-48.341Q846-410.681 846-479.841 846-549 797.612-597.5 749.225-646 680-646H280q-69.225 0-117.613 48.341Q114-549.319 114-480.159 114-411 162.387-362.5 210.775-314 280-314Zm-.059-78Q317-392 342.5-417.324q25.5-25.323 25.5-62.5Q368-517 342.676-542.5 317.353-568 280.294-568t-63.176 25.323Q191-517.353 191-480.176 191-443 216.941-417.5t63 25.5ZM480-480Z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
        style={{ display: isDarkMode ? 'block' : 'none' }}
      >
        {/* Dark mode SVG */}
        <path d="M280-292q-78.333 0-133.167-54.765Q92-401.529 92-479.765 92-558 146.833-613 201.667-668 280-668h400q78.333 0 133.167 54.765Q868-558.471 868-480.235 868-402 813.167-347 758.333-292 680-292H280Zm0-22h400q69.225 0 117.612-48.341Q846-410.681 846-479.841 846-549 797.612-597.5 749.225-646 680-646H280q-69.225 0-117.613 48.341Q114-549.319 114-480.159 114-411 162.387-362.5 210.775-314 280-314Zm399.706-78q37.059 0 63.176-25.324Q769-442.647 769-479.824 769-517 743.059-542.5t-63-25.5Q643-568 617.5-542.677 592-517.353 592-480.176 592-443 617.323-417.5q25.324 25.5 62.383 25.5ZM480-480Z" />
      </svg>
    </div>
  );
};

export default ThemeToggle;
