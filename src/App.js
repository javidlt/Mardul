import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import UsPage from './pages/UsPage'
import OurServicesPage from './pages/OurServicesPage'
import './App.css';

function App() {
  return (
    <div>
     <BrowserRouter> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Nosotros" element={<UsPage />} />
          <Route path="/Servicios" element={<OurServicesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
