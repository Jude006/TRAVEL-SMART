import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import destination from "../jsons file/Destination.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Destination() {
  return (
    <section className="font-mont overflow-hidden z-10">
      <div>
        <h1 className="text-center font-poppins md:text-3xl lg:text-4xl text-2xl font-bold">
          Explore Our Top Travel Destinations
        </h1>
      </div>

      {/* Swiper section */}
      <div className="py-3 z-10 my-10 overflow-x-hidden ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={40}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 box for small screens
            },
            768: {
              slidesPerView: 2, // 2 boxes for medium screens
            },
            1024: {
              slidesPerView: 3, // 3 boxes for large screens
            },
          }}
          className="destination-swiper"
        >
          {destination.map((item, index) => (
            <SwiperSlide key={index} className="mb-10 md:max-h-[70vh] overflow-hidden ">
              <div className="pb-3 bg-tertiary shadow-lg rounded flex flex-col gap-2">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-t"
                />
                <div className="flex flex-col gap-2 px-4">
                  <h3 className="mt-4  font-bold text-primary">
                    {item.name}
                  </h3>
                  <p className="text-primary font-semibold">
                    Start Date: {item.start_date}
                  </p>
                  <p className="text-primary mt-2">{item.description_short}</p>
                   {/*  route */}
                <Link to={`/destinationDetails/${item.id}`}>
                  <button className="btc">View Details</button>
                </Link>
                </div>

               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* End of Swiper section */}
    </section>
  );
}

export default Destination;
