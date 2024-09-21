import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";  // Import Autoplay module
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TourReviews from '../jsons file/TourReviews.json';

function TourReviewSection1() {
  return (
    <section className="font-mont">
      {/* Heading and Subheading */}
      <div className="text-center my-10 font-mont">
        <h1 className="text-4xl font-bold mb-4 font-poppins">
          What Our Travelers Are Saying
        </h1>
        <p className="text-lg text-tertiary font-mont md:max-w-[80%] mx-auto">
          Discover the experiences and stories from travelers who have embarked
          on adventures with Smart Travel. Their unforgettable moments will
          inspire you to explore the world!
        </p>
      </div>

      {/* Swiper Slider for Reviews */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Default for small screens
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
            slidesPerView: 1, // 1 slide on small screens
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides on large screens
          },
        }}
        className="mySwiper"
      >
        {TourReviews.map((item, index) => (
          <SwiperSlide key={index} className="items-center flex">
            <div className="flex flex-col gap-3 px-6 py-4 bg-tertiary my-10 text-white rounded">
              {/* Testimonial */}
              <div>
                <p className="text-[14px]">{item.testimonial}</p>
              </div>

              {/* Traveler Info */}
              <div className="flex items-center gap-6">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="flex items-center">
                    {/* Displaying Rating as Stars */}
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">
                          ★
                        </span>
                      ))}
                    {Array(5 - item.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-gray-300">
                          ★
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TourReviewSection1;
