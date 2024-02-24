/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { jsx, css } from '@emotion/react'
import chroma from 'chroma-js'
import About from './pages/About';
import Home from './pages/Index';
import ProjectNikeACG from './pages/ProjectNikeACG';
import ProjectNikeRe from './pages/ProjectNikeRe';
import ProjectProenza from './pages/ProjectProenza';
import ProjectJasonWu from './pages/ProjectJasonWu';
import './App.css';


function App() {
 return (
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/nike-acg" element={<ProjectNikeACG />} />
      <Route path="/nike-recreation" element={<ProjectNikeRe />} />
      <Route path="/jason-wu" element={<ProjectJasonWu />} />
      <Route path="/proenza" element={<ProjectProenza />} />
    </Routes>
  </BrowserRouter>
 );
}

export default App;
