import React, { useState } from 'react';
import './App.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, Stack } from '@mui/material';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`App ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
        <Stack direction="row">
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
        </Stack>
        <header className="App-header">
          Hello World!
        </header>
      </div>
    </>
  );
}

export default App;
