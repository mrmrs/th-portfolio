/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/react'
import chroma from 'chroma-js'
import '../App.css';

const Card = ({
    title,
    image,
    ...props
}) => {
    return (
        <a {...props} css={{

        }}>
        <div css={{ aspectRatio: '16/9', backgroundImage: 'url('+image+')', backgroundSize: 'cover' }}>
            </div>
            <section>
            <h4 css={{ margin: '4px 0 0 0' }}>{title} </h4>
            </section>
        </a>
    )
}

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
                    "https://dlu344star2bj.cloudfront.net/th/Nike_HOI_HO20_ACG_0272.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_HOI_HO20_ACG_0998.jpg",

                ],
                videos: [
                    "https://dlu344star2bj.cloudfront.net/th/Nike650_ACG_RECAP.mp4"
                ]
            },
            {
                title: 'Nike Lab: "Re-Creation Center"',
                location: 'Chicago',
                design: 'Nike + Virgil Abloh',
                designLead: 'Troy Hillman + Patty Wong',
                images: [
                    "https://dlu344star2bj.cloudfront.net/2_recreation-center_hovercraft.jpeg",
                    "https://dlu344star2bj.cloudfront.net/7a01387c3ade4395a6d3625bd23d7a79.jpeg",
                    "https://dlu344star2bj.cloudfront.net/8276174a7482426ea55e85e3299b8f1f.jpeg",
                    "https://dlu344star2bj.cloudfront.net/th/NikeRecCenter2.jpeg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1025.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1213.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1217.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1264.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1313.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/Nike_CHI_Recreation_1360.2.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/IMG_1025.JPG",
                    "https://dlu344star2bj.cloudfront.net/th/20190531-BeautyShots-004.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/20190531-BeautyShots-006.jpg",
                ],
                videos: [
                    "https://dlu344star2bj.cloudfront.net/th/NIKELAB_clip1.mp4",
                    "https://dlu344star2bj.cloudfront.net/th/Scanner_16x9_.mp4"

                ]
            },
            {
                title: 'Jason Wu',
                images: [
                    "https://dlu344star2bj.cloudfront.net/th/2_2.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/DanielSalemi_Betak_JasonWu_DFS2660.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/JW_HERO.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/PP_FashionEvent_03_Credit_VogueRunway-2025x1350.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/PP_FashionEvent_04_Credit_VogueRunway-2025x1350.jpg",
                ],
                videos: [

                    "https://dlu344star2bj.cloudfront.net/th/JasonWu_compilation_2.MP4",
                ]
            },
            {
                title: 'Proenza Schouler',
                images: [
                    "https://dlu344star2bj.cloudfront.net/th/BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-38-web.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-55-web.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-55.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-56-web.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/BUREAUBETAK_PROENZA_SCHOULER_FW180210_ETHANCALABRESE-73-web.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/DSC07124.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/DSC07130.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/DSC07149.jpeg",
                    "https://dlu344star2bj.cloudfront.net/th/DSC07160.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/PS_HERO.jpg",
                    "https://dlu344star2bj.cloudfront.net/th/stepandrepeat.webp",
                ]
            },
        ]
    }

    const randomProjectInt = randomInt(0,data.projects.length-1)

  return (
      <div>
      <nav css={{ display: 'flex', gap: '16px', paddingLeft: '16px', paddingRight: '16px' }}>
          <a css={{ padding:'16px 0',fontWeight: 500, textDecoration: 'none', color: 'initial', textTransform: 'uppercase', letterSpacing: '-0.015em'}} href='/'>Troy Hillman</a>

          <a css={{ marginLeft: 'auto', padding:'16px 0',fontWeight: 500, textDecoration: 'none', color: 'initial', textTransform: 'uppercase', letterSpacing: '-0.015em'}} href='/'>Projects</a>
          <a css={{ padding:'16px 0',fontWeight: 500, textDecoration: 'none', color: 'initial', textTransform: 'uppercase', letterSpacing: '-0.015em'}} href='/about'>About</a>
      </nav>
      <img style={{ width: '100%' }} src={data.projects[randomProjectInt].images[randomInt(0,data.projects[randomProjectInt].images.length-1)]} />
      <section css={{padding: '0 16px 32px 16px'}}>
      <h4>Projects</h4>
      <div css={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          <Card title={data.projects[0].title} 
          image={data.projects[0].images[randomInt(0,data.projects[0].images.length-1)]} 
          />
          <Card title={data.projects[1].title} 
          image={data.projects[1].images[randomInt(0,data.projects[1].images.length-1)]} 
          />
          <Card title={data.projects[2].title} 
          image={data.projects[2].images[randomInt(0,data.projects[2].images.length-1)]} 
          />
          <Card title={data.projects[3].title} 
          image={data.projects[3].images[randomInt(0,data.projects[3].images.length-1)]} 
          />
      </div>
      </section>
      </div>
  );
}

export default Home;
