import React from 'react'
import Navbar from '../components/Navbar'
import sitemap from '../assets/images/sitemap.jpg'
import Footer from '../components/Footer'
import Accordion from '../components/Accordion'

function Faq() {
  return (
    <div className='font-mont'>
      <Navbar />
      <div style={{backgroundImage: `url(${sitemap})`}} className='h-[70vh] flex items-center bg-cover w-full'>
        <div className=' md:ml-20 ml-10 text-primary'>
           <h1 className='font-poppins md:text-5xl text-3xl font-bold text-primary'>FAQ</h1>
           <p>Frequenced Asked Question</p>
        </div>
      </div>
      <div>
     <Accordion />
      </div>
     
    <div className='mt-10'>
    <Footer /> 
    </div>
    </div>
  )
}

export default Faq
