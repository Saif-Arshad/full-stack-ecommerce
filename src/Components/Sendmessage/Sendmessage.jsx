"use client"

import Link from 'next/link'
import React from 'react'
import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'
import { useDispatch } from 'react-redux'
import { showMessage } from '@/Redux/feature/ContactSlice'



function Sendmessage() {
    const dispatch = useDispatch()
    const setFalseContact = ()=>{
        dispatch(showMessage(false))
    }

  return (
    <div>
      <h1>Message Send we will contact you soon </h1>
      <Link href={"/"}>
    <Mainbutton onClick={setFalseContact} type='submit' $BtnWidth="180px" $btnFont="12px" $Borderradius="9px" $BGColor="#024E82" $paddingTB="10px" $paddingLR="5px">
    Go Back to Home
        </Mainbutton>
      </Link>
    </div>
  )
}

export default Sendmessage