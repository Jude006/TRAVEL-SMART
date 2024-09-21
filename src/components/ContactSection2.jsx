import React from 'react'
import bg from '../assets/images/aboutimg.jpg'
import { FaPhoneAlt } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'John Doe',
    image: '/images/test2.png',
    rating: 5,
    testimony: 'This was the best travel experience of my life! The service was top-notch and the destinations were stunning.',
  },
  {
    name: 'Jane Smith',
    image: '/images/test1.png',
    rating: 4,
    testimony: 'I had a wonderful time exploring new places, thanks to the amazing organization and helpful staff.',
  },
  {
    name: 'Alex Johnson',
    image: '/images/test3.png',
    rating: 5,
    testimony: 'Highly recommend this service! Everything was so well planned, and I enjoyed every minute of my trip.',
  },
];

function ContactSection2() {
  return (
    <div  style={{ backgroundImage: `url(${bg})` }}
    className='w-full object-cover font-mont bg-fixed bg-cover md:py-10 py-10  md:my-16 my-10'>
    <section className='grid md:grid-cols-2 gap-10 grid-cols-1 text-primary'>
    <div className='flex flex-col justify-center'>
        <h1 className=' md:text-2xl text-xl font-bold font-poppins'>We Provide Top Destinations Expecially For You Book Now and Enjoy!</h1>
        <h2 className='flex gap-3 items-center mt-6 font-normal'>
           
            <span className='md:text-4xl text-2xl'><FaPhoneAlt /></span>
            <span className='md:text-xl text-lg'>Call Now <sub>08068078495</sub></span>
        </h2>
    </div>
    <div>
    <div className="w-full h-auto  bg-primary mb-4 flex justify-center items-center">
      <div className="max-w-[80%] md:max-w-[60%] mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{review.name}</h3>
                <div className="flex justify-center items-center my-2">
                  {[...Array(review.rating)].map((star, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-gray-600 italic">{`"${review.testimony}"`}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default ContactSection2
