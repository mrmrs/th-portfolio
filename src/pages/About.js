/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/react'
import chroma from 'chroma-js'
import '../App.css';

function Index() {

    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    Array.prototype.random = function () {
      return this[Math.floor((Math.random()*this.length))];
    }

    function get_random (list) {
      return list[Math.floor((Math.random()*list.length))];
    }


  return (
      <div>
      
          <p>Troy Hillman is an experience designer shaping spaces within art, architecture, and fashion. </p>
          <a href="/">Contact</a>
          <a href="/">Instagram</a>
          <ul>
              <li>Creative Development</li>
              <li>Concept Building</li>
              <li>3D Design</li>
              <li>Rendering</li>
              <li>Retail Design</li>
              <li>Event Design</li>
              <li>Construction Management</li>
              <li>Fabrication</li>
          </ul>
      </div>
  );
}

export default Index;
