import React, { useState, useEffect, useRef } from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import Data from "../jsons file/Data.json";
import { motion } from "framer-motion";
// import "./SearchAndFilter.css"; // Ensure you create a CSS file for additional styles

function SearchAndFilter() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  // States for Filters
  const [filteredData, setFilteredData] = useState(Data);
  const [searchTerm, setSearchTerm] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [typeFilter, setTypeFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  const [showModal, setShowModal] = useState(null);
  const modalRef = useRef();

  // Get the current page's items based on filters
  const currentItems = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(null);
    }
  };

  // Sorting logic
  const sortItems = (option) => {
    setSortOption(option);
    const sortedItems = [...filteredData];
    if (option === "price") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (option === "alphabetical") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "rating") {
      sortedItems.sort((a, b) => b.rating - a.rating);
    }
    setFilteredData(sortedItems);
  };

  // Filter Logic
  useEffect(() => {
    let updatedData = Data;

    if (searchTerm) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (durationFilter) {
      updatedData = updatedData.filter(
        (item) => item.duration === durationFilter
      );
    }

    if (ratingFilter) {
      updatedData = updatedData.filter(
        (item) => item.rating === parseInt(ratingFilter)
      );
    }

    if (typeFilter) {
      updatedData = updatedData.filter(
        (item) => item.type.toLowerCase() === typeFilter.toLowerCase()
      );
    }

    updatedData = updatedData.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    setFilteredData(updatedData);
    setCurrentPage(0); // Reset to first page after filtering
  }, [searchTerm, durationFilter, ratingFilter, priceRange, typeFilter]);

  // Function to reset all filters and search term
  const resetFilters = () => {
    setSearchTerm("");
    setDurationFilter("");
    setRatingFilter("");
    setPriceRange([0, 5000]);
    setTypeFilter("");
    setFilteredData(Data); // Reset to original data
    setSortOption(""); // Reset sorting option
    setCurrentPage(0); // Reset pagination to the first page
  };

  return (
    <section className="font-mont py-10 bg-secondary min-h-screen transition-all duration-500">
      <div className="container mx-auto lg:px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-2 text-primary">
            Explore Your Next Trip
          </h2>
          <p className="text-lg text-primary">
            Find, filter, and sort through our best offers
          </p>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.input
            type="text"
            placeholder="Search by name"
            className="py-3 lg:px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-tertiary w-full md:w-1/3 transition duration-300 ease-in-out"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />

          <motion.select
            className="py-3 lg:px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-tertiary w-full md:w-1/5 transition duration-300 ease-in-out"
            value={sortOption}
            onChange={(e) => sortItems(e.target.value)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="alphabetical">Alphabetically</option>
            <option value="rating">Rating</option>
          </motion.select>

          <motion.select
            className="py-3 lg:px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-tertiary w-full md:w-1/5 transition duration-300 ease-in-out"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <option value="">Type Of Activity</option>
            <option value="cultural">Cultural</option>
            <option value="adventure">Adventure</option>
            <option value="relaxation">Relaxation</option>
            <option value="romantic">Romantic</option>
          </motion.select>

          <motion.button
            onClick={resetFilters}
            className="py-3 px-6 bg-tertiary text-primary rounded-lg shadow hover:bg-tertiary-dark transition w-full md:w-auto transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Reset Filters
          </motion.button>
        </motion.div>

        {/* Display Filtered Items */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col transition-transform"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
              <h3 className="text-lg font-bold text-tertiary mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.duration}</p>
              <p className="text-lg font-bold text-tertiary">${item.price}</p>
              <p className="text-yellow-500">Rating: {item.rating} stars</p>
              <motion.button
                onClick={() => setShowModal(item)}
                className="mt-auto py-2 px-4 bg-tertiary text-primary rounded-md transition"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 10px rgba(32, 149, 174, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 0))}
              className="py-2 px-4 bg-gray-300 rounded-md mr-2 transition hover:bg-gray-400"
              disabled={currentPage === 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaArrowAltCircleLeft />
            </motion.button>
            <p className="text-lg text-primary mx-2">
              Page {currentPage + 1} of {totalPages}
            </p>
            <motion.button
              onClick={() =>
                setCurrentPage(Math.min(currentPage + 1, totalPages - 1))
              }
              className="py-2 px-4 bg-gray-300 rounded-md transition hover:bg-gray-400"
              disabled={currentPage === totalPages - 1}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaArrowAltCircleRight />
            </motion.button>
          </motion.div>
        )}

        {/* Modal for Detailed View */}
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black cursor-pointer bg-opacity-25 w-full h-screen backdrop-blur-sm flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            ref={modalRef}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg  md:w-[60%] md:max-h-[80vh] mt-16 mx-auto relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <button
                onClick={() => setShowModal(null)}
                className="absolute top-3 right-3 text-tertiary hover:text-tertiary transition"
              >
                <FaTimes size={24} />
              </button>
              <h3 className="font-bold text-2xl mb-4 text-tertiary">
                {showModal.name}
              </h3>
             <div className="flex md:flex-row flex-col gap-10">
             <img
                src={showModal.images[0]}
                alt={showModal.name}
                className=" md:h-56 h-48 md:w-[50%] w-[100%] object-cover rounded-md mb-4"
              />
               <img
                src={showModal.images[1]}
                alt={showModal.name}
                className=" h-60 md:w-[50%] md:flex hidden w-[100%] object-cover rounded-md mb-3"
              />
             </div>
              <p className="text-tertiary mb-2">{showModal.duration}</p>
              <p className="text-tertiary font-bold">${showModal.price}</p>
              <p className="text-yellow-500 mb-2">
                Rating: {showModal.rating} stars
              </p>
              <p className="md:text-[14px] md:flex hidden">{showModal.description}</p>
              <p className="md:text-[14px] md:hidden flex">{showModal.description1}</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default SearchAndFilter;
