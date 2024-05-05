"use client"

import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { React, useEffect } from 'react'
import styled from '@emotion/styled'


const HeroSection = styled.section`
    min-height: ${props => (props.$minH ? props.$minH : "90vh")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    div {
        height: 100%;
        padding: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 50px;
            color: white;
            text-transform: uppercase;
            font-weight: 700;
            text-align: center;
        }
    }

    @media screen and (max-width: 520px) {
        div h1 {
            font-size: 30px; 
        }
    }
    @media screen and (max-width: 680px) {
        div  {
            padding:10px; 
        }
    }
`;

function Herosection() {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
  return (
   <HeroSection $minH="90vh" className='main-Hero min-w-screen overflow-x-hidden'>
    <div>
     <h1 data-aos="fade-right">Stylist picks beat <br /> the heat  </h1>

   <Link href={'/shop'}>
     <Mainbutton data-aos="fade-down" $border="5px" $borderColor="white">
      Shop now
     </Mainbutton>
     </Link>  
     </div>
   </HeroSection>
  )
}

export default Herosection
