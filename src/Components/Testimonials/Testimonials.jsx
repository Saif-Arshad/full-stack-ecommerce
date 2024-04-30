"use client"

import { ProductCard } from '@/Styledcomponent/Productlayout/Productlayout.styled'
import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import Testimonial1 from '../../../public/Assets/Images/Testimonials/testimonial1.png'
import Testimonial2 from '../../../public/Assets/Images/Testimonials/testimonial2.png'
import Testimonial3 from '../../../public/Assets/Images/Testimonials/testimonial3.png'
import Testimonialicon from '../../../public/Assets/Images/Testimonials/testimonial-icon.png' 



const testimonialsData = [
{
    "name":"Stacy",
    "image":Testimonial1,
    "testimonail":"I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
},
{
    "name":"Tiffany",
    "image":Testimonial2,
    "testimonail":"Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
},
{
    "name":"James",
    "image":Testimonial3,
    "testimonail":"I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
},

]

function Testimonials() {

  const Testimonial = styled.section`
    width: 100%;
    display: flex;
    margin: 20px 0px;
  align-items: center;
    flex-direction: column;
    gap: 50px;

  .main-testimonials{
    display: flex;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
    /* flex-wrap: wrap; */
    width: 80%;
    gap: 30px;
    p{
      width: 100%;
      margin-top: 20px;
      font-weight: 500;
    }
    h1{
      font-weight: 700;
      margin-top: 30px;
    }
  }

  
  `


  return (
   <ProductCard>
    <div className='top-heading '>
    <h1>Testimonials</h1>
    </div>

    <Testimonial>

    {
      testimonialsData.map((item,index)=>(
        <div key={index} className='main-testimonials'>
            <Image
              src={item.image}
              alt={item.name}
        />
        <div>
          <Image src={Testimonialicon} alt='testimonial' />
          <p>{item.testimonail}</p>
          <h1>{item.name}</h1>
          </div>
        </div>
      ))
    }


    </Testimonial>


    </ProductCard>
  )
}

export default Testimonials