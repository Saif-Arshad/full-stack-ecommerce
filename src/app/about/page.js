import Abouthero from '@/Components/Abouthero/Abouthero'
import Founder from '@/Components/Founders/Founder'
import Testimonials from '@/Components/Testimonials/Testimonials'
import React from 'react'

function page() {
  return (
   <>
<Abouthero/>
<div className='parent-hero'>
    <div className='main-hero-page'>
<Founder/>
<Testimonials/>
</div>
    </div>
   </>
  )
}

export default page
