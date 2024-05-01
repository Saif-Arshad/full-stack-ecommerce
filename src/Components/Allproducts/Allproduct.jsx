"use client"

import React from 'react'
import { Card } from '@/Styledcomponent/Card/Card.styled'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { ProductCard } from '@/Styledcomponent/Productlayout/Productlayout.styled'



function Allproduct() {
  const data = useSelector((state)=>state.ecommerce.items)
  return (
    <ProductCard>
      <div className="top-heading">
        <h1>Discover Best Products</h1>
        <h5>Recently added shirts</h5>
      </div>
          <Card className='mt-14'>
        {data.map((product, index) => (
      <div  key={index} className='Main-card'>
       <Link href={`/product/${product.id}`}>    <Image src={product.image} alt={product.title} height={200}
              width={250}
            />
            </Link> 
            <h1>{product.title}</h1>
            <p>{product.discountprice}$</p>
      </div>
        ))}
        </Card>
    </ProductCard>
  )
}

export default Allproduct
