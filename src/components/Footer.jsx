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
    <div className='font-mont text-primary' style={{ backgroundImage: `url(${img})` }}>
    <footer className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 md:px-10 lg:px-24 px-8 py-8'>
      <div>
              {/* Logo and Social Icons */}
              <div className="flex flex-col gap-4">
              <h1 className="text-white md:text-2xl text-xl font-bold">
                Travel<span className="text-secondary">Smart</span>
              </h1>
              <p className="md:text-[18px] text-[14px]">
                Discover the world with TravelSmart! Your trusted platform for incredible travel experiences,
                best deals, and inspiring destinations.
              </p>
              <div className="flex gap-4 text-2xl mt-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="transition-all" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="
                   transition-all" />
                </a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  <FaGoogle className="
                   transition-all" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="
                   transition-all" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className=" transition-all" />
                </a>
              </div>
            </div>
      </div>
      <div>
                    {/* Quick Links */}
                    <div>
              <h1 className="text-2xl font-bold">Quick Links</h1>
              <ul className="flex gap-6 mt-4">
                <div className="flex flex-col gap-4 md:text-[16px] text-[14px]">
                  <Link to="/" className="hover:text-secondary transition-all">
                    <li>Home</li>
                  </Link>
                  <Link to="/about" className="hover:text-secondary transition-all">
                    <li>About</li>
                  </Link>
                  <Link to="/tripCatalog" className="hover:text-secondary transition-all">
                    <li>Trip Catalogue</li>
                  </Link>
                  <Link to="/contact" className="hover:text-secondary transition-all">
                    <li>Contact</li>
                  </Link>
                  <Link to="/tourReview" className="hover:text-secondary transition-all">
                    <li>Tour Review</li>
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  <Link to="/faq" className="hover:text-secondary transition-all">
                    <li>FAQs</li>
                  </Link>
                  <Link to="/sitemap" className="hover:text-secondary transition-all">
                    <li>Site Map</li>
                  </Link>
                </div>
              </ul>
            </div>

      </div>
      <div>
         {/* Featured Tours */}
         <div>
              <h1 className="text-2xl font-bold">Tours</h1>
              <div className="mt-4 md:text-[16px] text-[14px] flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <img src="/images/york2.jpg" alt="Paris Adventure" className="h-20 w-20 object-cover rounded-md" />
                  <div>
                    <p>Paris Adventure Tour</p>
                    <p>$10.08</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <img src="/images/york1.jpg" alt="Mountain Hiking" className="h-20 w-20 object-cover rounded-md" />
                  <div>
                    <p>Mountain Hiking Expedition</p>
                    <p>$12.50</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div>
            {/* Contact Information */}
            <div>
              <h1 className="md:text-2xl text-xl font-bold">Contact</h1>
              <ul className="flex flex-col md:text-[15px] text-[14px] gap-4 mt-4">
                <li>Address: <b>No. 1 Idowu Crescent</b></li>
                <li>Phone: <b>+234 806 808 4957</b></li>
                <li>Email: <b>info@travelsmart.com</b></li>
                <li>Open Hours: <b>Mon - Sat: 9 AM - 5 PM</b></li>
                <li>Happy Hours: <b>Sat: 2 PM - 5 PM</b></li>
              </ul>
            </div>

      </div>
    </footer>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 bg-primary text-tertiary s p-3 rounded-full shadow-lg hover:bg-opacity-50 transition-all'
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default Footer;
