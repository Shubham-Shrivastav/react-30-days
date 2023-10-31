import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';

function App() {
  const [page, setPage] = useState('home');

  const navigateTo = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className='App'>
        <nav>
          <ul>
          <li onClick={() => navigateTo('home')}>Home</li>
          <li onClick={() => navigateTo('about')}>About Us</li>
          </ul>
        </nav>
      <main>
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
      </main>
    </div>
  );
}

export default App;
