/* eslint-disable react-hooks/rules-of-hooks */
// "use client"
"use client"
import React from 'react'
import styled from '@emotion/styled'
import Inputform from '../Form/Inputform'
import { useSelector } from 'react-redux'
import Sendmessage from '../Sendmessage/Sendmessage'

const ContactFormStyle = styled.section`
display: flex;
margin: 80px 0;
width: 100%;
@media screen and (max-width:830px) {
  flex-direction: column;
}
.contact{
    width: 30%;
    @media screen and (max-width:830px) {
      width: 100%;
    }
  }
  .main-form{
    width: 70%;
    @media screen and (max-width:830px) {
      width: 100%;
    }
    h1{
        font-size: 35px;
        font-weight: 600;
      }
    .form{
     
      p{
        font-size: 18px;
        width: 85%;
        margin-bottom: 20px;
        margin-top: 10px;
      }
      .input{
        .message{
            gap: 5px;
          display: flex;
          margin-top: 10px;
          flex-direction: column;
          textarea{
            width: 90%;
            /* background-color: aliceblue; */
            border: 2px solid gainsboro;
            padding: 10px;
            border-radius: 8px;
          }
        }
        label{
          font-size: 18px;
        }
        input{
          padding: 10px;
          font-size: 17px;
          border-radius: 6px;
          border: 1px solid gainsboro;
        
        }
        .main-name{

          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          .name , .email{
            gap: 5px;
          display: flex;
          flex-direction: column;
          
        }
       
      }
      }
    }

.inputError{
  border: 2px solid red !important;
}

  }

  .contact{
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 530px) and (max-width:830px) {
  flex-direction: row;
      /* background-color: blue; */
      padding: 40px;
}
    @media screen and (max-width: 529px)  {
  flex-direction: column;
      /* background-color: blue; */
      padding: 40px;
}
    gap: 20px;
    div h1{
      font-size: 25px;
      font-weight: 600;
    }
  }


`
   

function ContactForm() {
  const messageValue = useSelector((state)=>state.message.show)

  return (
    <ContactFormStyle>
      <div className="main-form">
{
  messageValue ? <Sendmessage/> :
      <Inputform/>
     
 }     </div>
    <div className="contact">
      <div>
      <h1>Visit Us</h1>
      <p>UET Lahore, Punjab, Pakistan</p>
      <p>Phone: +923267146133</p>
      </div>
      <div>
      <h1>Get In Touch </h1>
      <p>You can get in touch with us on this provided email.</p>
      <p>Email: Saifarshad3344@gmail.com</p>
      </div>
    </div>
    </ContactFormStyle>
  )
}

export default ContactForm
