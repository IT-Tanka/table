import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (document.documentElement) {
            document.documentElement.classList.toggle('dark', !isDarkMode);
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="flex items-center p-2 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md focus:outline-none m-auto"
        >
            <FontAwesomeIcon 
                icon={isDarkMode ? faSun : faMoon} 
                className="text-yellow-500 dark:text-yellow-300"
            />
            <span className="ml-2 text-gray-900 dark:text-gray-100">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
        </button>
    );
};

export default ThemeToggle;
