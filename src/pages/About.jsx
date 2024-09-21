import React from 'react'
import Navbar from '../components/Navbar'
import AboutLandingPage from '../components/AboutLandingPage'
import AboutSection1 from '../components/AboutSection1'
import AboutSection2 from '../components/AboutSection2'
import Review from '../components/Review'
import Footer from '../components/Footer'
import AboutSection4 from '../components/AboutSection4'



function About() {
 
  return (
    <div>
    <Navbar />
    <AboutLandingPage />
    <AboutSection1 />
    <AboutSection2 />
    <AboutSection4 />
   <div className='my-10'>
   <Review />
   </div>
   <Footer />
    </div>
  )
}

export default About
