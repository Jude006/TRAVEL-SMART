import React from 'react'
import bg1 from '../assets/images/aboutimg.jpg'

function ContactLandingPage() {
  return (
    <div className='bg-cover flex font-poppins  text-primary items-center w-full h-[70vh]' style={{backgroundImage: `url(${bg1})`}}>
      <div className='max-w-[80%] md:ml-8 lg:ml-28 ml-3 flex flex-col gap-3'>
        <h1 className='text-3xl md:text-4xl font-semibold text-primary'>Get In Touch</h1>
        <h2 className='text-2xl md:3xl lg:text-7xl font-bold '>Contact Us</h2>
      </div>
    </div>
  )
}

export default ContactLandingPage
