import React from 'react'
import Navbar from '../components/Navbar'
import TourReviewLandingPage from '../components/TourReviewLandingPage'
import TourReviewSection1 from '../components/TourReviewSection1'
import TourReviewSection2 from '../components/TourReviewSection2'
import Footer from '../components/Footer'

function TourReview() {
  return (
    <div>
      <Navbar />
      <TourReviewLandingPage />
      <TourReviewSection1 />
      <TourReviewSection2 />
      <Footer />
    </div>
  )
}

export default TourReview
