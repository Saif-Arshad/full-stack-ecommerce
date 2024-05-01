"use client"

import React from 'react'
import Cartitem from '../Cartitem/Cartitem'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'

export const CartPriceTotal = styled.div `

width: 100%;
margin-top: 50px;

    div{
       width: 600px;
       @media screen and (max-width:650px) {
       width: 100%;
        
       }
    h1{
        font-size: 35px;
        font-weight:650;
        @media screen  and (max-width:500){
            font-size: 25px;
        }
    }
    p{
        display: flex;
        width: 50%;
        @media screen and (max-width:500px) {
       width: 95%;
        
       }
        justify-content: space-between;
        font-size: 20px;
        margin-top: 8px;
        border-bottom: 1px solid black;
        padding-bottom: 5px;
        /* background-color: aquamarine; */
    }
    }
` 



function CartTotal() {
 const cartData = useSelector((state)=>state.ecommerce.cart)
 const cart = useSelector((state)=>state.ecommerce)
 console.log(cartData.length)
 const subTotal = cart.totalPrice
 const Shipping = Number( 20);
 const Total = subTotal + Shipping

    const cartLength = cartData.length
    return (
        <>
{ cartLength > 0 ?
    <>

      <Cartitem/>

      <CartPriceTotal>
      <div>
      <h1>Cart Totals</h1>

<p>
   <span> Subtotal  </span>
   <span> ${subTotal}   </span>
</p>
<p>
   <span> Shipping Fee  </span>
   <span> ${Shipping}  </span>
</p>
<p>
   <span> Total  </span>
   <span> ${Total}</span>
</p>
<Link href='/billing'>
<Mainbutton $BtnWidth="230px" $paddingTB="15px" $BtnFont="18px" $BGColor="#D6763C">
Proceed to Checkout
</Mainbutton>
</Link>

      </div>
  
      </CartPriceTotal>
    </>

    :
    <>
        <div className='min-h-56 md:min-h-96 flex items-center'>
     <h1 className='  font-bold text-xl md:text-3xl'>Your Cart is empty</h1>
        </div>
    </>
    }
    </>
   
  )
}

export default CartTotal
