import React, { useRef, useState, useEffect } from "react";
import bg from "../assets/images/aboutimg.jpg";
import { FaPlane, FaSwimmer, FaTag } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import CountUp from "react-countup";

function AboutSection4() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full object-cover font-poppins bg-fixed bg-cover md:py-0 py-10 md:h-[70vh] md:my-16 my-10"
    >
      <section
        ref={sectionRef}
        className="grid md:grid-cols-2 text-primary lg:grid-cols-4 grid-cols-2 gap-6 justify-center items-center h-[100%]"
      >
        <div className="py-3 px-4 gap-3 flex flex-col items-center">
          <div className="text-5xl bg-white w-28 h-28 rounded-full bg-opacity-30 flex items-center justify-center p-3">
            <div className="w-full h-full rounded-full bg-white bg-opacity-30 flex justify-center items-center">
              <FaPlane />
            </div>
          </div>
          <div>
            <h4 className="md:text-3xl text-2xl font-bold">
              {isVisible ? <CountUp end={600} duration={2} /> : "600"}
            </h4>
          </div>
          <div>
            <h4 className="md:text-xl text-lg">Flight Booking</h4>
          </div>
        </div>
        <div className="py-3 px-4 flex flex-col gap-3 items-center">
          <div className="text-5xl bg-white w-28 h-28 rounded-full bg-opacity-30 flex items-center justify-center p-3">
            <div className="w-full h-full rounded-full bg-white bg-opacity-30 flex justify-center items-center">
              <FaHouse />
            </div>
          </div>
          <div>
            <h4 className="md:text-3xl text-2xl font-bold">
              {isVisible ? <CountUp end={250} duration={2} /> : "250"}
            </h4>
          </div>
          <div>
            <h4 className="md:text-xl text-lg">Amazing Tour</h4>
          </div>
        </div>
        <div className="py-3 px-4 flex flex-col gap-3 items-center">
          <div className="text-5xl bg-white w-28 h-28 rounded-full bg-opacity-30 flex items-center justify-center p-3">
            <div className="w-full h-full rounded-full bg-white bg-opacity-30 flex justify-center items-center">
              <FaSwimmer />
            </div>
          </div>
          <div>
            <h4 className="md:text-3xl text-2xl font-bold">
              {isVisible ? <CountUp end={100} duration={2} /> : "100"}
            </h4>
          </div>
          <div>
            <h4 className="md:text-xl text-lg">Cruises Booking</h4>
          </div>
        </div>
        <div className="bg- py-3 px-4 flex flex-col gap-3 items-center">
          <div className="text-5xl bg-white w-28 h-28 rounded-full bg-opacity-30 flex items-center justify-center p-3">
            <div className="w-full h-full rounded-full bg-white bg-opacity-30 flex justify-center items-center">
              <FaTag />
            </div>
          </div>
          <div>
            <h4 className="md:text-3xl text-2xl font-bold">
              {isVisible ? <CountUp end={100} duration={2} /> : "100"}
            </h4>
          </div>
          <div>
            <h4 className="md:text-xl text-lg">Hotel Booking</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection4;
