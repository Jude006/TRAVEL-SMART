import React, { useState, useEffect } from "react";
import { FaBars, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`font-mont flex flex-col justify-between w-full left-0 z-50 transition-all mx-auto duration-300 ${
        isSticky
          ? "fixed duration-300 ease-in-out bg-secondary py-3 text-primary shadow-lg"
          : "absolute top-6 text-primary bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-[85%] mx-auto py-3">
        <Link to="/">
          <div>
            <h1 className="cursor-pointer uppercase text-xl text-primary font-bold font-mont">
              Travel
              <span
                className={`text-secondary ${isSticky ? "text-white" : ""}`}
              >
                Smart
              </span>
            </h1>
          </div>
        </Link>
        <div className="lg:flex hidden">
          <ul className="no-underline flex items-center md:text-[16px] text-[14px] lg:gap-[50px] md:gap-[30px] cursor-pointer">
            <Link to="/">
              <li className={isActive("/") ? "text-tertiary font-bold" : ""}>
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={isActive("/about") ? "text-tertiary font-bold" : ""}
              >
                About
              </li>
            </Link>
            <Link to="/tripCatalog">
              <li
                className={
                  isActive("/tripCatalog") ? "text-tertiary font-bold" : ""
                }
              >
                Trip Catalogue
              </li>
            </Link>
            <Link to="/tourReview">
              <li
                className={
                  isActive("/tourReview") ? "text-tertiary font-bold" : ""
                }
              >
                Tour Review
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={
                  isActive("/contact") ? "text-tertiary font-bold" : ""
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="cursor-pointer text-2xl flex gap-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/08068078495"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div
          className="text-2xl lg:hidden flex cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        >
          <FaBars />
        </div>
      </div>
      {showNav && (
        <div className="p-6 w-full z-40 bg-secondary text-primary">
          <ul className="no-underline flex flex-col gap-[40px] cursor-pointer">
            <Link onClick={() => setShowNav(false)} to="/">
              <li className={isActive("/") ? "text-tertiary font-bold" : ""}>
                Home
              </li>
            </Link>
            <Link onClick={() => setShowNav(false)} to="/about">
              <li
                className={isActive("/about") ? "text-tertiary font-bold" : ""}
              >
                About
              </li>
            </Link>
            <Link onClick={() => setShowNav(false)} to="/tripCatalog">
              <li
                className={
                  isActive("/tripCatalog") ? "text-tertiary font-bold" : ""
                }
              >
                Trip Catalogue
              </li>
            </Link>
            <Link onClick={() => setShowNav(false)} to="/tourReview">
              <li
                className={
                  isActive("/tourReview") ? "text-tertiary font-bold" : ""
                }
              >
                Tour Review
              </li>
            </Link>
            <Link onClick={() => setShowNav(false)} to="/contact">
              <li
                className={
                  isActive("/contact") ? "text-tertiary font-bold" : ""
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
