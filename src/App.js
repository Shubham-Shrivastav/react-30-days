import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'

function App () {
  return (
    <div className='App'>
            <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="dashboard" element={<Dashboard />}/>
        </Routes>
        </header>
    </div>
  )
}

export default App
