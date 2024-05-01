"use client"

import React from 'react'
import { Card } from '@/Styledcomponent/Card/Card.styled'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { ProductCard } from '@/Styledcomponent/Productlayout/Productlayout.styled'
import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'
function Topsaller() {
  const data = useSelector((state)=>state.ecommerce.items)
    const filteredData = data.filter(items=>items.sellers===true)

  return (
    <ProductCard>
        <div className="top-heading">
        <h1>Top Sellers</h1>
        <h5>Browse our top-selling products</h5>
      </div>
      <Card>
        {filteredData.map((product, index) => (
      <div  key={index} className='Main-card'>
      <Link href={`/product/${product.id}`}>     <Image src={product.image} alt={product.title} height={200}
              width={250}
            />
            </Link> 
            <h1>{product.title}</h1>
            <p>{product.discountprice}$</p>
      </div>
        ))}
        </Card>
<Mainbutton $BGColor="#024E82" $paddingTB="14px" $paddingLR="1px"  $TextSize="37px" >
  Shop now
</Mainbutton>

        </ProductCard>
  )
}

export default Topsaller
