/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { jsx, css } from '@emotion/react'
import chroma from 'chroma-js'
import About from './pages/About';
import Home from './pages/Index';
import './App.css';


function App() {
 return (
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
 );
}

export default App;
