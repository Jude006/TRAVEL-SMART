import React from 'react'
import Navbar from '../components/Navbar'
import sitemap from '../assets/images/sitemap.jpg'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaHome, FaInfoCircle, FaPlaneDeparture, FaStar } from 'react-icons/fa'
import Footer from '../components/Footer'

function SiteMap() {
  return (
    <div className='font-mont'>
      <Navbar />
      <div style={{backgroundImage: `url(${sitemap})`}} className='h-[70vh] flex items-center bg-cover w-full'>
        <div>
           <h1 className='font-poppins md:text-5xl text-3xl font-bold text-primary md:ml-20 ml-10'>Site Map</h1>
        </div>
      </div>
      <section className='text-tertiary flex flex-col mb-10 gap-5 '>
       <Link to='/'>
       <div className='flex items-center'>
        <span className='md:text-3xl text-xl'><FaHome /></span>
            <h1 className='md:text-3xl text-2xl font-bold '>.Home</h1>
        </div>
       </Link>

       <Link to='/about'>
       <div className='flex items-center'>
       <span className='md:text-3xl text-xl'><FaInfoCircle  /></span>
            <h1 className='md:text-3xl text-2xl font-bold '>.About</h1>
        </div>
       </Link>


       <Link to='/tripCatalog'>
       <div className='flex items-center'>
       <span className='md:text-3xl text-xl'><FaPlaneDeparture /></span>
            <h1 className='md:text-3xl text-2xl font-bold '>.Trip Catalog</h1>
        </div>
       </Link>

      <Link to='/tourReview'>
      <div className='flex items-center'>
       <span className='md:text-3xl text-xl'><FaStar /></span>
            <h1 className='md:text-3xl text-2xl font-bold '>.Tour Review</h1>
        </div>
      </Link>

       <Link to='/contact'>
       <div className='flex items-center'>
       <span className='md:text-3xl text-xl'><FaEnvelope /></span>
            <h1 className='md:text-3xl text-2xl font-bold '>.Contact Us</h1>
        </div>
       </Link>


      </section>
      <Footer />
    </div>
  )
}

export default SiteMap
