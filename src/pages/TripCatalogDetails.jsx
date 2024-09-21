import React, { useState } from "react";
import { useParams } from "react-router-dom";
import destinations from "../jsons file/trip.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function TripCatalogDetails() {
  const { id } = useParams(); // Get the trip ID from the route
  const trip = destinations.find((dest) => dest.id === parseInt(id)); // Find the specific trip
  const [book, setBook] = useState(false);

  if (!trip) {
    return (
      <div className="text-tertiary font-bold text-xl">Trip not found!</div>
    ); // Handle case where trip is not found
  }

  return (
    <div className="min-h-screen font-mont ">
      <Navbar />
      {/* Hero Section */}
      <div className="relative">
        <img
          src={trip.gallery[0]}
          alt={trip.name}
          className="w-full h-[400px] object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
          <div className="ml-10">
            <h1 className="text-4xl font-bold">{trip.name}</h1>
            <p className="text-lg">{trip.location}</p>
            <button className="btn" onClick={() => setBook(true)}>
              Book Trip
            </button>
          </div>
        </div>
        {/* booking form  */}
        {book && (
          <div className="fixed inset-0 flex justify-center items-center bg-tertiary bg-opacity-25 backdrop-blur-sm q  z-50">
            <form action="https://formspree.io/f/xeojbgzz" method="POST"  className="flex flex-col text-white gap-3 bg-primary w-full max-w-md py-6 px-4 rounded-lg shadow-lg">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="bg-tertiary w-full py-3 px-6"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="bg-tertiary w-full py-3 px-6"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Enter Message"
                  className="bg-tertiary w-full py-3 px-6"
                />
              </div>
              <button type="submit" className="btn">
                Book Now
              </button>
            </form>
          </div>
        )}

        {/* booking form  */}
      </div>

      {/* Trip Details */}
      <section className="mt-10 ">
        <div className="  max-w-[80%] text-center mx-auto">
          <h2 className="text-3xl font-bold mb-4 font-poppins">
            About the Trip
          </h2>
          <p className="text-lg mb-6">{trip.description}</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {trip.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-48 object-cover"
            />
          ))}
        </div>

        {/* side attraction  */}
        <div className="md:mt-8 mt-4">
          <h1 className="md:text-3xl text-2xl text-center font-poppins font-bold">
            Amazing Side Attractions in {trip.name}
          </h1>

          <Swiper
            spaceBetween={20}
            slidesPerView={1} // Default view for small screens
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000, // Auto-slide every 3 seconds
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              // Responsive breakpoints for different screen sizes
              640: {
                slidesPerView: 1, // 1 slide for small screens
              },
              768: {
                slidesPerView: 2, // 2 slides for medium screens
              },
              1024: {
                slidesPerView: 3, // 3 slides for large screens
              },
            }}
            className="mySwiper py-4 px-6"
          >
            {trip.attractions.map((val, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-tertiary h-52 w-full group overflow-hidden">
                  {/* Image */}
                  <img
                    src={val.image}
                    alt={val.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Name and Description */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center text-white">
                    <h3 className="text-xl font-bold">{val.name}</h3>
                    <p className="text-sm mt-2">{val.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* side attraction  */}

        {/* activities  */}
        <div className="my-10">
          <div>
            <h1 className="text-center md:text-3xl font-bold text-2xl font-poppins">
              Pakages in {trip.name}
            </h1>
          </div>
          {/* Packages List */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {trip.packages.map((pkg) => (
              <div key={pkg.id} className="border p-6 rounded-lg shadow-lg">
                {/* Package Name */}
                <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>

                {/* Description */}
                <p className="text-tertiary mb-4">{pkg.description}</p>

                {/* Price and Discount */}
                <p className="text-xl font-semibold text-tertiary mb-2">
                  Discounted Price: ${pkg.discountPrice}{" "}
                  <span className="line-through text-secondary">
                    ${pkg.price}
                  </span>
                </p>

                {/* Duration */}
                <p className="mb-2">
                  <strong>Duration:</strong> {pkg.duration}
                </p>

                {/* Accommodation */}
                <p className="mb-2">
                  <strong>Accommodation:</strong> {pkg.accommodation}
                </p>

                {/* Inclusions */}
                <p className="mb-2">
                  <strong>Inclusions:</strong> {pkg.inclusions}
                </p>

                {/* Exclusions */}
                <p className="mb-2">
                  <strong>Exclusions:</strong> {pkg.exclusions}
                </p>

                {/* Book Now Button */}
                <button className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary mt-4">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* activities  */}
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default TripCatalogDetails;
