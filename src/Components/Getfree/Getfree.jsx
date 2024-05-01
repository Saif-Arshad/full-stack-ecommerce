"use client"

import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'
import styled from '@emotion/styled'
import React from 'react'
import Link from 'next/link'

const Buyone = styled.section`
width: 100;
display: flex;
justify-content: center;
flex-direction: row;
color: white;
gap: 20px;
flex-wrap: wrap;
div{
    padding: 56px 70px;
    display :flex;
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size:32px;
        text-transform: uppercase;
    }
    p{
        margin-top: 10px;
        font-size: 18px;
        white-space: 70% ;
        text-align: center;
    }
    @media screen and (max-width: 700px) {
            width: 98% !important;
        }
    @media screen and (max-width: 500px) {
padding: 36px 10px;
        h1{
            font-size: 25px;
        }
        p{
            font-size: 16px;
            margin-top: 20px;
        }

        }
}
.sub-one{
        width: 700px;
        /* @media screen and (max-width: 700px) {
            width: 98% !important;
        } */
        /* @media screen (max-width: 499px) {
            width: 98%;

        } */
        background-color: black;
    }
.sub-two{
        width: 450px;
        background: black;
    }

`

function Getfree() {
  return (
    <Buyone>
<div className='sub-one' data-aos="zoom-in-down">
        <h1>peace of mind</h1>
        <p>A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p>
   <Link href={'/shop'}>
    
        <Mainbutton $BGColor="white" $TextColor="blue" $BtnFont="17px" $BtnWidth="120px" $paddingTB="7px" $paddingLR="10px" >
            Buy Now
            </Mainbutton>
</Link>
     </div>
     <div className='sub-two' data-aos="zoom-in-down">
        <h1>Buy 2 Get 1 Free</h1>
        <p>End of season sale. Buy any 2 items of your choice and get 1 free.</p>
   <Link href={'/shop'}>
      
        <Mainbutton $BGColor="white" $TextColor="blue" $BtnFont="17px" $BtnWidth="120px"  $paddingTB="7px" $paddingLR="10px" >
            Buy Now
        </Mainbutton>
</Link>
     </div>
     </Buyone>

  )
}

export default Getfree
