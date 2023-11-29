import React, { useState, useEffect } from 'react';
import './App.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, Stack } from '@mui/material';

const MemoizedButton = React.memo(({ onClick, isDarkMode }) => (
  <Button onClick={onClick}>
    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
  </Button>
));

function App() {
  const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode || false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`App ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
        <Stack direction="row">
          <MemoizedButton onClick={toggleDarkMode} isDarkMode={isDarkMode} />
        </Stack>
        <header className="App-header">
          Hello World!
        </header>
      </div>
    </>
  );
}

export default App;
