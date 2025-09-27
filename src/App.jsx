import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Locations from './pages/Locations';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Give from './pages/Give';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/About" element={<About />} />
        <Route index path="/Locations" element={<Locations />} />
        <Route index path="/Events" element={<Events />} />
        <Route index path="/Contact" element={<Contact />} />
        <Route index path="/Give" element={<Give />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App
