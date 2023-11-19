import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import Shopping from './components/Pages/Shopping'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="shopping" element={<Shopping />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
