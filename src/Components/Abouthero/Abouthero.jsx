"use client"
import React from 'react'
import styled from '@emotion/styled'
import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'
function Abouthero() {

    const ButNow = styled.section`
        display: flex;
        justify-content: space-evenly;
        margin: 50px 0;
        flex-wrap: wrap;
        div{
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: end;
            width:550px;
            background-position: center;
            background-size: cover;
            button{
                margin: 40px 0;
            }
        }
        
        `

  return (
    <>

    <div className='mainHero-About'>
      
    <h1>About Northstar</h1>
    </div>
    <ButNow>
       <div className="sub-About2">
            <Mainbutton $TextSize="12px"  $BGColor="white" $BtnWidth="130px" $paddingTB="8px" $Borderradius="20px" $paddingLR="18px" $TextColor="#14517B" >
                buy now
            </Mainbutton>
       </div>
       <div className="sub-About1" >
        <Mainbutton $TextSize="12px" $BGColor="white" $BtnWidth="130px" $paddingTB="8px" $Borderradius="20px" $paddingLR="18px"  $TextColor="#14517B" >
            buy now
        </Mainbutton>
       </div>
    </ButNow>
    </>
  )
}

export default Abouthero
