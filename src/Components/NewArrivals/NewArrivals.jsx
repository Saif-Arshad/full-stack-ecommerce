"use client"

import React, { useState, useEffect } from 'react'
import { Card } from '@/Styledcomponent/ProductCard/ProductCard.styled'
import styled from 'styled-components'
import { Products } from '@/Data/Products'
import Image from 'next/image'

const ProductCard = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .top-heading {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 35px;
      margin-top: 15px;
      font-weight: 700;
      @media screen and (max-width:450px) {
        font-size: 25px;
      }
    }
    h5 {
      font-size: 18px;
    }
  }
`

function NewArrivals() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Products); 
  }, [])
  console.log(data)
  return (
    <ProductCard>
      <div className="top-heading">
        <h1>Discover NEW Arrivals</h1>
        <h5>Recently added shirts</h5>
      </div>
          <Card>
        {data.map((product, index) => (
      <div  key={index} className='Main-card'>
            <Image src={product.image} alt={product.title} height={200}
              width={250}
            />
            <h1>{product.title}</h1>
            <p>{product.discountprice}$</p>
      </div>
        ))}
        </Card>
    </ProductCard>
  )
}

export default NewArrivals
