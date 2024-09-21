import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // For animations

function TourReviewSection2() {
  const [selectedImage, setSelectedImage] = useState(null); // To store the clicked image for modal

  const modalRef = useRef()
  const onclose = (e)=>{
    if(modalRef.current === e.target){
        setSelectedImage(null)
    }
  }

  // Image data (replace with actual image URLs)
  const images = [
    "/images/tour.jpg", // Image 1
    "/images/tour1.jpg", // Image 2
    "/images/tour2.jpg", // Image 3
    "/images/tour3.jpg", // Image 4
    "/images/tour5.jpg", // Image 5
    "/images/tour8.jpg", // Image 6
    "/images/tour6.jpg", // Image 7
    "/images/tour7.jpg"  // Image 8
  ];

  return (
    <section className="font-mont my-10">
      {/* Section Heading */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-4 font-poppins">
          Amazing Tour Images
        </h1>
        <p className="text-lg text-tertiary md:max-w-[80%] mx-auto">
          Explore the breathtaking destinations captured by our travelers. Each image tells a story of adventure, beauty, and unforgettable memories.
        </p>
      </div>

      {/* Tour Image Grid */}
      <div className="flex flex-col gap-4">
        {/* First Row */}
        <div className="grid grid-cols-12 gap-3 my-6">
          <div className="md:col-span-3 col-span-12">
            <img
              src={images[0]}
              alt="Tour Image 1"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedImage(images[0])}
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <img
              src={images[1]}
              alt="Tour Image 2"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedImage(images[1])}
            />
          </div>
          <div className="md:col-span-3 col-span-12">
            <img
              src={images[2]}
              alt="Tour Image 3"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedImage(images[2])}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-4 col-span-12">
            <img
              src={images[3]}
              alt="Tour Image 4"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedImage(images[3])}
            />
          </div>
          <div className="md:col-span-4 col-span-12">
            <img
              src={images[4]}
              alt="Tour Image 5"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedImage(images[4])}
            />
          </div>
          <div className="md:col-span-4 col-span-12">
            <img
              src={images[5]}
              alt="Tour Image 6"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedImage(images[5])}
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-12 gap-3 my-6">
          <div className="md:col-span-7 col-span-12">
            <img
              src={images[6]}
              alt="Tour Image 7"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedImage(images[6])}
            />
          </div>
          <div className="md:col-span-5 col-span-12">
            <img
              src={images[7]}
              alt="Tour Image 8"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedImage(images[7])}
            />
          </div>
        </div>
      </div>

      {/* Modal for full-screen view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
          ref={modalRef} onClick={onclose}
            className="fixed inset-0 bg-black cursor-pointer bg-opacity-70 backdrop-blur-sm h-screen w-full flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] mx-auto p-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-tertiary bg-primary bg-opacity-50 py-5 px-5 text-xl rounded-full focus:outline-none"
                onClick={() => setSelectedImage(null)}
              >
                X {/* Close button */}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default TourReviewSection2;
