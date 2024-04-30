"use client"

import { ProductCard } from '@/Styledcomponent/Productlayout/Productlayout.styled'
import React from 'react'
import Image from 'next/image'
import founder1 from '../../../public/Assets/Images/Founder/abdullah.png'
import founder2 from '../../../public/Assets/Images/Founder/abrar.png'
import founder3 from '../../../public/Assets/Images/Founder/Furqan.png'
import founder4 from '../../../public/Assets/Images/Founder/HM Jawad.png'
import { Card } from '@/Styledcomponent/Card/Card.styled'


    const founderData = [
        {
           "name":"HM Jawad",
           "image":founder4
        },
        {
           "name":"Furqan Abid",
           "image":founder2
        },
        {
           "name":"Abdullah AH",
           "image":founder3
        },
        {
           "name":"Abrar Khan",
           "image":founder1
        },
    ]

function Founder() {
    
  return (
    <div className='bg-gray-50 w-full'>
    <ProductCard>
        <div className='top-heading'>
            <h1>The Founders</h1>
        </div>
        <Card>
        {founderData.map((person, index) => (
      <div  key={index} className='Main-card'>
            <Image src={person.image} alt={person.name} height={200}
              width={250}
            />
            <h1>{person.name}</h1>
      </div>
        ))}
        </Card>
    </ProductCard>
  </div>
  )
}

export default Founder