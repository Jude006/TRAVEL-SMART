import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function HomeLandingPage() {
  return (
    <div className="font-mont">
      <Navbar />
      
      {/* Video Background */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/images/video.webm" type="video/mp4" />

          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="mt-10 lg:text-6xl text-2xl capitalize font-poppins  lg:max-w-[80%] mx-auto font-extrabold tracking-wider text-white">
          Explore The World With <span className="stroke">Travel Smart</span>
          </h1>
          <p className="font-light lg:text-xl text-[16px] text-white mt-4 md:max-w-[80%] lg:max-w-[70%]">
            Explore the world’s most stunning destinations, curated just for you. Plan your dream trip and embark on new adventures.
          </p>
          <div className="mt-4 flex md:flex-row xs:flex-col flex-row items-center gap-6 font-semibold text-white">
            <Link to='/tripCatalog'><button className="btn">Start Your Journey</button></Link>
            <Link to='/contact'><button className="btc">Contact Us</button></Link>
          </div>
        </div>

        {/* Optional: Add an overlay to darken the video background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      </div>
    </div>
  );
}

export default HomeLandingPage;
