import React, { useState, useEffect } from 'react';
import img from '../assets/images/footer.jpg';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=''>
      {/* Footer Section */}
      <div
        className='lg:h-[45vh] md:h-[69vh] h-[150vh] object-cover w-full text-white bg-cover font-mont bg-center relative'
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className='absolute w-full top-0 left-0 h-full bg-green-900 bg-opacity-40'>
          <div className='grid py-16 lg:px-24 md:px-10 px-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-8'>
            {/* Logo and Social Icons */}
            <div className='flex flex-col gap-4'>
              <h1 className='text-white text-3xl font-bold'>
                Travel<span className='text-tertiary'>Smart</span>
              </h1>
              <p className='text-[20px]'>
                Discover the world with TravelSmart! Your trusted platform for incredible travel experiences,
                best deals, and inspiring destinations.
              </p>
              <div className='flex gap-4 text-2xl mt-4'>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                  <FaFacebook className='hover:text-tertiary transition-all' />
                </a>
                <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                  <FaTwitter className='hover:text-tertiary transition-all' />
                </a>
                <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                  <FaGoogle className='hover:text-tertiary transition-all' />
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram className='hover:text-tertiary transition-all' />
                </a>
                <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin className='hover:text-tertiary transition-all' />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h1 className='text-2xl font-bold'>Quick Links</h1>
              <ul className='flex gap-6 mt-4'>
                <div className='flex flex-col gap-4'>
                  <Link to='/' className='hover:text-tertiary transition-all'>
                    <li>Home</li>
                  </Link>
                  <Link to='/about' className='hover:text-tertiary transition-all'>
                    <li>About</li>
                  </Link>
                  <Link to='/tripCatalog' className='hover:text-tertiary transition-all'>
                    <li>Trip Catalogue</li>
                  </Link>
                  <Link to='/contact' className='hover:text-tertiary transition-all'>
                    <li>Contact</li>
                  </Link>
                  <Link to='/tourReview' className='hover:text-tertiary transition-all'>
                    <li>Tour Review</li>
                  </Link>
                </div>
                <div className='flex flex-col gap-4'>
                  <Link to='/tourReview' className='hover:text-tertiary transition-all'>
                    <li>FAQs</li>
                  </Link>
                  <Link to='/sitemap' className='hover:text-tertiary transition-all'>
                    <li>Site Map</li>
                  </Link>
                </div>
              </ul>
            </div>

            {/* Best Sellers */}
            <div>
              <h1 className='text-2xl font-bold'>Tours</h1>
              <div className='mt-4 flex flex-col gap-6'>
                <div className='flex items-center gap-6'>
                  <img src='/images/york2.jpg' alt='Best Seller' className='h-20 w-20 object-cover' />
                  <div>
                    <p>Paris Adventure Tour</p>
                    <p>$10.08</p>
                  </div>
                </div>
                <div className='flex items-center gap-6'>
                  <img src='/images/york1.jpg' alt='Best Seller' className='h-20 w-20 object-cover' />
                  <div>
                    <p>Mountain Hiking Expedition</p>
                    <p>$12.50</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h1 className='text-2xl font-bold'>Contact</h1>
              <ul className='flex flex-col gap-4 mt-4'>
                <li>
                  Address: <b>No. 1 Idowu Crescent</b>
                </li>
                <li>
                  Phone: <b>+234 806 808 4957</b>
                </li>
                <li>
                  Email: <b>info@travelsmart.com</b>
                </li>
                <li>
                  Open Hours: <b>Mon - Sat: 9 AM - 5 PM</b>
                </li>
                <li>
                  Happy Hours: <b>Sat: 2 PM - 5 PM</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 bg-tertiary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-all'
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default Footer;
