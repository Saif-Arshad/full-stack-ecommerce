import Abouthero from '@/Components/Abouthero/Abouthero'
import Founder from '@/Components/Founders/Founder'
import React from 'react'

function page() {
  return (
   <>
<Abouthero/>
<div className='parent-hero'>
    <div className='main-hero-page'>
<Founder/>
</div>
    </div>
   </>
  )
}

export default page
