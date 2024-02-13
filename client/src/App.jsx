import { useState } from 'react'
import Body from './pages/Body.jsx'
import LoginPage from './pages/LoginPage.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.jsx';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Already-A-Member" element={<LoginPage />} />
        <Route path="/Join-Community" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
