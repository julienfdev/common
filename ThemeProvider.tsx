import {useState} from 'react';
import {ThemeContext} from './ThemeContext';
import React from 'react';

const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
