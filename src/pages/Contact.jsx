import React from 'react'
import Navbar from '../components/Navbar'
import ContactLandingPage from '../components/ContactLandingPage'
import ContactSection1 from '../components/ContactSection1'
import Map from '../components/Map'
import Footer from '../components/Footer'
import ContactSection2 from '../components/ContactSection2'

function Contact() {
  return (
    <div>
     <Navbar />
     <ContactLandingPage />
     <ContactSection1 />
     <Map/>
     <ContactSection2 />
     <Footer />
    </div>
  )
}

export default Contact
