/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/react'
import chroma from 'chroma-js'
import '../App.css';

function Home() {

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

    const data = {
        projects: [
            {
                title: 'Nike ACG',
                images: [

                    "https://dlu344star2bj.cloudfront.net/th/HO20_ACG_NikeNYC_BXD_06.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/HO20_ACG_NikeNYC_BXD_07.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/HO20_ACG_NikeNYC_BXD_09.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/HO20_ACG_NikeNYC_BXD_51.jpg",
                    //2 2.jpg
                    //20190531-BeautyShots-004.jpg
                    //20190531-BeautyShots-006.jpg
                    //2_recreation-center_hovercraft.jpeg
                    //7a01387c3ade4395a6d3625bd23d7a79.jpeg
                    //8276174a7482426ea55e85e3299b8f1f.jpeg
                    //BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-38-web.jpg
                    //BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-55-web.jpg
                    //BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-55.jpg
                    //BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-56-web.jpg
                    //BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-73-web.jpg
                    //DSC07124.jpg
                    //DSC07130.jpg
                    //DSC07149.jpeg
                    //DSC07160.jpg
                    //DanielSalemi_Betak_JasonWu_DFS2660.jpg
                    //IMG_1025.JPG
                    //JW_HERO.jpg
                    //JasonWu_compilation_2.MP4
                    //NIKELAB_clip1.mp4
                    //Nike650_ACG_RECAP.mp4
                    "https://dlu344star2bj.cloudfront.net/th/NikeRecCenter2.jpeg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1025.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1213.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1217.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1264.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1313.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1360.2.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_HOI_HO20_ACG_0272.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_HOI_HO20_ACG_0998.jpg",
                    //PP_FashionEvent_03_Credit_VogueRunway-2025x1350.jpg
                    //PP_FashionEvent_04_Credit_VogueRunway-2025x1350.jpg
                    //PS_HERO.jpg
                    //Scanner_16x9_.mp4
                    //stepandrepeat.webp
                ]
            }
        ]
    }

  return (
      <div>
      <nav css={{ display: 'flex', gap: '16px', paddingLeft: '16px', paddingRight: '16px' }}>
          <a css={{ padding:'16px 0',fontWeight: 500, textDecoration: 'none', color: 'initial', textTransform: 'uppercase', letterSpacing: '-0.015em'}} href='/'>Troy Hillman</a>
          <a css={{ marginLeft: 'auto', padding:'16px 0',fontWeight: 500, textDecoration: 'none', color: 'initial', textTransform: 'uppercase', letterSpacing: '-0.015em'}} href='/'>Projects</a>
          <a css={{ padding:'16px 0',fontWeight: 500, textDecoration: 'none', color: 'initial', textTransform: 'uppercase', letterSpacing: '-0.015em'}} href='/about'>About</a>
      </nav>
      <img style={{ width: '100%' }} src={data.projects[0].images[randomInt(0,data.projects[0].images.length-1)]} />
      </div>
  );
}

export default Home;
