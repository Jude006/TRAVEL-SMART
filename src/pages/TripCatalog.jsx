import React from 'react'
import Navbar from '../components/Navbar'
import TripCatalogLandingPage from '../components/TripCatalogLandingPage'
import TripCatalog1 from '../components/TripCatalog1'
import Footer from '../components/Footer'
import SearchAndFilter from '../components/SearchAndFilter'
import Review from '../components/Review'

function TripCatalog() {
  return (
    <div>
    <Navbar />
    <TripCatalogLandingPage />
    <SearchAndFilter />
    <Review />
    <TripCatalog1 />
   <div className='mt-10'>
   <Footer />
   </div>
    </div>
  )
}

export default TripCatalog
