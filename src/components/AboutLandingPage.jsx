import React from "react";
import { motion } from "framer-motion"; // Importing motion for animation effects
import bg1 from "../assets/images/aboutimg.jpg"; // Importing background image
import { Link } from "react-router-dom"; // Importing Link for react-router-dom

function AboutLandingPage() {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden font-mont">
      {/* This div sets the background image for the section */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{ backgroundImage: `url(${bg1})` }} // Applying the imported image as background
      />

      {/* Overlay for the text content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }} // Transition effects
        className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50"
      >
        <div className="max-w-3xl mx-auto px-4">
          {" "}
          {/* Centering content with max width */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            {/* Main heading for the section */}
            Discover Our Story
          </h2>
          <p className="text-lg md:text-xl mb-6 font-mont">
            {/* Description of what the user can expect */}
            Embark on a journey with us. Experience moments that redefine
            adventure and create memories that last a lifetime.
          </p>
          <div>
            <Link to="/contact">
              {" "}
              {/* Navigation link to the contact page */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} // Scale down on tap
                className="py-3 px-6 bg-tertiary text-white rounded-lg shadow-md hover:bg-opacity-50 transition duration-300"
              >
                Contact Us 
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutLandingPage;
