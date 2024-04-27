"use client"

import React from 'react'
import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'
import { Hero } from '@/Styledcomponent/Hero/Hero.styled'
function Herosection() {
  return (
   <Hero $minH="90vh" className='main-Hero'>
    <div>
     <h1>Stylist picks beat <br /> the heat  </h1>
     
     <Mainbutton $border="5px" $borderColor="white">
      Shop now
     </Mainbutton>
     </div>
   </Hero>
  )
}

export default Herosection
