import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Destination from '../jsons file/Destination.json';
import bg from '../assets/images/backgroundimage3.jpg';
import Navbar from '../components/Navbar';
import {
  FaCalendarAlt,
  FaCloudSun,
  FaTag,
  FaClock,
  // FaSnowflake,
  FaTimes,
  // FaBed,
  // FaCar,
  FaWifi,
  // FaBus,
  // FaTaxi,
  // FaSubway,
  // FaTrain
} from 'react-icons/fa'; // Import icons
import Footer from '../components/Footer';



function DestinationDetails() {
  const { id } = useParams();
  const product = Destination.find((item) => item.id === Number(id));
  const [showForm, setShowForm] = useState(false);

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowForm(false);
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-mont ">
      <Navbar />
      {/* Background image for all view details */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="h-[70vh] bg-fixed object-top object-cover bg-cover flex justify-center items-center text-center bg-center w-full"
      >
        <div className="font-poppins flex flex-col gap-3">
          <h1 className="text-white md:text-5xl text-3xl font-bold">
            {product.name}
          </h1>
          <p className="text-white md:text-lg text-[14px] max-w-[90%] md:max-w-[80%] text-center mx-auto">
            Discover the beauty and allure of {product.name}. Whether you're seeking adventure, relaxation, or cultural exploration, this destination offers a perfect blend of experiences. Dive into the details below to find out more about what makes this place unique.
          </p>
          <div onClick={() => setShowForm(true)}>
          <button className='btc'>Book Destination</button>
          </div>
        </div>
      </div>

      {/* Destination details */}
      <div className="mt-16 md:px-10 lg:px-24 px-6">
        <div className="p-4 grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="md:order-1 order-2 flex flex-col gap-4">
            <p className="mt-4 md:text-xl text-lg font-bold">{product.name}</p>
            <p className="text-tertiary">{product.description_long}</p>
            <p className="text-tertiary-600">
              <strong>Location:</strong> {product.location.city}, {product.location.country}
              <strong className="ml-2">Continent: {product.location.continent}</strong>
            </p>
            <ul className="list-disc flex flex-col items-start">
              <p className="font-bold md:text-2xl text-xl">Side Attractions:</p>
              {product.activities.map((activity, index) => (
                <li key={index} className='md:text-[16px] text-[14px]'>{activity}</li>
              ))}
            </ul>
            <div>
              <h4 className="font-bold md:text-2xl text-xl">Price:</h4>
              <ul className="list-disc md:text-[16px] text-[14px]">
                <li><strong>Currency: </strong>{product.price.currency}</li>
                <li><strong>Original Price: </strong><span className="line-through">${product.price.original_price}</span></li>
                <li><strong>Discount Price: </strong>${product.price.discounted_price}</li>
              </ul>
            </div>
          </div>
          <div className="md:order-2 order-1">
            <img src={product.images[0]} alt={product.name} className="w-full md:h-[70vh] h-[50vh] object-cover" />
          </div>
        </div>

        {/* Amazing Features Section */}
        <div className="mt-10 p-6 bg-secondary">
          <h1 className="text-center md:text-2xl text-xl font-bold mb-6">
            Amazing Features in {product.name}
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Discount Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaTag className="text-4xl text-green-500 mr-4" />
              <div>
                <h3 className="md:text-xl text-lg font-semibold">Discount</h3>
                <p className="">{product.discount.percent}% off</p>
                <p className="text-sm text-gray-600">Valid until {product.discount.valid_until}</p>
              </div>
            </div>

            {/* Start Date Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaCalendarAlt className="text-4xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Start Date</h3>
                <p className="text-lg">{product.start_date}</p>
              </div>
            </div>

            {/* Best Time to Visit Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaClock className="text-4xl text-orange-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Best Time to Visit</h3>
                <p className="text-lg">{product.best_time_to_visit}</p>
              </div>
            </div>

            {/* Weather Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <FaCloudSun className="text-4xl text-yellow-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Weather</h3>
                <p className="text-lg">Average Temperature: {product.weather.average_temperature}</p>
                <p className="text-sm text-gray-600">Seasons: {product.weather.seasons.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation Section */}
        <div className="mt-10 p-6 bg-secondary">
          <h1 className="text-center md:text-2xl text-xl font-bold mb-6">Accommodation</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {product.accommodation.map((acc, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4">
                <h2 className="md:text-xl text-lg font-semibold">{acc.name} ({acc.type})</h2>
                <p>{acc.description}</p>
                <div className="flex flex-wrap gap-4">
                  {acc.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation Section */}
        <div className="mt-10 p-6 bg-secondary">
          <h1 className="text-center md:text-2xl text-xl font-bold mb-6">Transportation</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {product.transportation.map((trans, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4">
                <h2 className=" font-semibold">{trans.type}</h2>
                <p>{trans.description}</p>
                <p>{trans.details}</p>
                <div onClick={() => setShowForm(true)}>
          <button className='btn text-sm'>Book Destination</button>
          </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {/* Modal Form for Booking */}
      {showForm && (
        <div
          ref={modalRef}
          className="fixed inset-0 flex items-center justify-center h-screen w-full backdrop-blur-sm cursor-pointer bg-gray-900 bg-opacity-50"
          onClick={closeModal}
        >
          <div className="bg-secondary relative p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Book Your Trip</h2>
            <button
              className="absolute top-2 right-2 text-2xl font-bold"
              onClick={() => setShowForm(false)}
            >
              <FaTimes />
            </button>
            <form action="https://formspree.io/f/xeojwbwv" method="POST">
              {/* Add your form fields here */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border-gray-300 py-3 px-4 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-gray-300 py-3 px-4 rounded-md shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-tertiary text-white px-4 py-2 rounded-lg"
              
              >
                Submit
              </button>
            </form>
           
          </div>
        </div>
      )}
     <div className='mt-14'>
     <Footer />
     </div>
    </div>
  );
}

export default DestinationDetails;
