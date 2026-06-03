import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Sale from './pages/Sale';
import Service from "./pages/Service.jsx";
import About from './pages/About.jsx';
import Gaxtniutyun from './pages/Gaxtniutyun.jsx'; 
import Favorites from './pages/Favorites.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/sale" element={<Sale />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/Gaxtniutyun" element={<Gaxtniutyun />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}