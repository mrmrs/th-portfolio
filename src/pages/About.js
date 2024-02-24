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
      <nav css={{ display: 'flex', gap: '16px', paddingLeft: '16px', paddingRight: '16px' }}>
          <a css={{ padding:'16px 0',fontWeight: 500, textDecoration: 'none', color: 'initial', textTransform: 'uppercase', letterSpacing: '-0.015em'}} href='/'>Troy Hillman</a>
      <a css={{ marginLeft: 'auto', padding:'16px 0',fontWeight: 500, textDecoration: 'none', color: 'initial', textTransform: 'uppercase', letterSpacing: '-0.015em'}} href='/#projects'>Projects</a>
          <a css={{ padding:'16px 0',fontWeight: 500, textDecoration: 'none', color: 'initial', textTransform: 'uppercase', letterSpacing: '-0.015em'}} href='/about'>About</a>
      </nav>
          <div css={{minHeight: '50dvh', display: 'flex', alignItems: 'center', }}> 
              <p css={{ padding: '0 16px', fontSize: '48px', fontWeight: 800, lineHeight: 1,  }}>Troy Hillman is an experience designer shaping spaces within art, architecture, and fashion. </p>
          </div>
      <div css={{ padding: '0 16px', marginBottom: '16px' }}>
          <a css={{ color: 'initial', textDecoration: 'none', fontWeight: 'bold', display: 'block'}} href="/">Contact</a>
          <a css={{ color: 'initial', textDecoration: 'none', fontWeight: 'bold', display: 'block'}} href="/">Instagram</a>
      </div>
          <ul css={{ listStyleType: 'none', padding: '0 16px', margin: 0, display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '12px' }}>
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
