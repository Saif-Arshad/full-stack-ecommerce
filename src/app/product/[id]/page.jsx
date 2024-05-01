"use client"

import Singalproduct from '@/Components/Singalproduct/Singalproduct'
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
function page(search) {
    const {id} = search.params

  return (
   
    <>
       <div className='parent-hero'>
    <div className='main-hero-page'>
    <Singalproduct id={`${id}`}/>
    </div>
    </div>
    </>
  )
}

export default page
