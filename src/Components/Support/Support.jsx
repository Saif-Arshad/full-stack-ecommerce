   "use client"
   
import React from 'react'
import Image from 'next/image'
import Shipping from '../../../public/Assets/Icons/Home/free shipping.png'
import Return from '../../../public/Assets/Icons/Home/days return.png'
import Allday from '../../../public/Assets/Icons/Home/support.png'
import Payment from '../../../public/Assets/Icons/Home/payment seure.svg'
import styled from 'styled-components'
function Support() {
    const supportData = [
        {
            "heading":"Free shipping",
            "image":Shipping,
            "description":"Enjoy free shipping on all orders above $100"
        },
        {
            "heading":"Support 24/7",
            "image":Allday,
            "description":"Our support team is there to help you for queries"
        },
        {
            "heading":"30 days Return",
            "image":Return,
            "description":"Simply return it within 30 days for an exchange."
        },
        {
            "heading":"100% payment secure",
            "image":Payment,
            "description":"Our payments are secured with 256 bit encryption"
        }
    ]

    const Support = styled.section`
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 40px;
        justify-content:center;
        padding:20px;
        .Main-Support{
            margin-left: 15px;
        }
        div{
            width: 250px;
            display: flex;
           gap: 15px;

            img{
                object-fit: cover;
                height:25px;
                width: 25px;
                }
        div{
            display: flex;
            flex-direction: column;
            h1{
                font-weight:700;
                font-size: 15px;
                text-transform: uppercase;
            }
            p{
                font-size: 15px;

            }
        }
            }
    `
  return (
    <Support>

            {
                supportData.map((item,index) => (
                    <div key={index} className='Main-Support'>
                        <Image
                        src={item.image}
                        alt={item.heading}
                        height={30}
                        width={30}
                        />
                         <div>
                    <h1>{item.heading}</h1>
                    <p>{item.description}</p>
                   </div>
                    
                    </div>
                ))
            }



    </Support>
  )
}

export default Support
