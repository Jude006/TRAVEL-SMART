import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import bg1 from '../assets/images/tourreview.jpg';
import { Link } from 'react-router-dom';

function TourReviewLandingPage() {
  return (
    <div className='relative w-full h-[70vh] overflow-hidden font-mont'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center w-full h-full'
        style={{ backgroundImage: `url(${bg1})` }}
      />
      
      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50'
      >
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 font-poppins'>Your Journey, Their Words</h2>
          <p className='text-[14px] md:text-lg mb-6 font-mont'>
            Discover authentic stories from fellow travelers who have walked the same paths. Read their experiences, share your own, and find inspiration for your next adventure. Let the journey begin with trusted reviews.
          </p>
         <Link to='/contact'>
         <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='py-3 px-6 bg-tertiary text-white rounded-lg shadow-md hover:bg-opacity-50 transition duration-300'
          >
            Contact Us
          </motion.button>
         </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default TourReviewLandingPage;
