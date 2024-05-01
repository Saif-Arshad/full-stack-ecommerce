"use client"

import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { CartPriceTotal } from '../Carttotal/CartTotal'
import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'
import toast from 'react-hot-toast'

const BillingFormStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  div:nth-of-type(2){
    width: 95%;
    h1{
        font-size: 40px;
        font-weight: 700;
        margin-top: 50px;
      }
  }
  form{
    width: 100%;
            div{
            display: flex;
            flex-direction: column;
            width: 50% !important;
                label{
                    font-size: 20px;
                    font-weight: 500;
                    color: #696767;
                
                }
                input{
                    width: 100%;
                    border: 1px solid #c2c0c0;
                    margin: 10px 0 ;
                    padding: 5px;
                    border-radius: 2px;
                }
        
            }   
        }

        div:nth-of-type(1){
            width: 95%;
           
          }
        `

function BillingForm() {
 const cart = useSelector((state)=>state.ecommerce)
 const subTotal = cart.totalPrice
 const Shipping = Number( 20);
 const Total = subTotal + Shipping
  return (
        <BillingFormStyled>
               <div>
            
              <CartPriceTotal>
              <div>
              <h1>Your Order</h1>

        
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
       
        
              </div>
          
              </CartPriceTotal>
            </div>
            <div>
                <h1>Billing details</h1>
                <form onSubmit={(e)=>e.preventDefault} >
                    <div className="name">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone</label>
                        <input type="phone" id="phone" />
                    </div>
                    <div className="address">
                        <label htmlFor="address">Street Address</label>
                        <input type="text" id="address" placeholder='House number and streeet address' />	
                    </div>
                    <div className="town">
                        <label htmlFor="town">Town Address</label>
                        <input type="text" id="town" placeholder='Town or City Number' />	
                    </div>

                </form>
                <Mainbutton onClick={()=>toast.success("Order Placed Sucessfully")} $BtnWidth="230px" $paddingTB="15px" $BtnFont="18px" $BGColor="#D6763C">
       Place Order
        </Mainbutton>
            </div>
         
        </BillingFormStyled>
  )
}

export default BillingForm