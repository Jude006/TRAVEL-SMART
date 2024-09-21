import React from "react";
import { FaCheck } from "react-icons/fa6";

function HomeSection1() {
  return (
    <section className="  w-full font-mont overflow-hidden">
      <div className="grid grid-cols-12  gap-10 mt-20 items-center ">
        <div className="md:col-span-7 col-span-12 flex flex-col gap-8 ">
          <div>
            <p className="text-secondary md:text-2xl text-lg uppercase">
              Your Next Adventure Await You
            </p>
          </div>
          <div>
            <p className="md:text-3xl lg:text-4xl  font-poppins text-lg font-bold uppercase">
              Discover the <span className="text-secondary">world</span> with
              our guide
            </p>
          </div>
          <div>
            <p className="md:text-[16px] text-[14px] text-tertiary  max-w-[80%]">
              At Travel Smart, we believe that every journey should be more than
              just a vacation – it should be an experience that leaves you with
              memories for a lifetime. Whether you're seeking the thrill of
              adventure, the calm of nature, or the excitement of discovering
              new cultures, we are here to craft the perfect trip for you.
            </p>
            <p className="md:text-[16px] text-[14px] text-tertiary  max-w-[80%] mt-4">
              Explore our hand-picked destinations, designed for travelers just
              like you. Discover hidden gems, indulge in local cuisines, and
              immerse yourself in unique cultures – all with the convenience and
              peace of mind that our expertly curated packages provide.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-3">
              <span className="py-3 px-3 rounded-full bg-secondary text-primary text-xl">
                <FaCheck />
              </span>
              <span className="md:text-lg text-[16px]">150+ Tours Destination</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="py-3 px-3 rounded-full bg-secondary text-primary text-xl">
                <FaCheck />
              </span>
              <span className="md:text-lg text-[16px]">20 Years Of Experience</span>
            </p>
          </div>
          <div></div>
        </div>
        <div className="md:col-span-5 col-span-12">
          <div className="bg-secondary w-full h-[65vh] relative">
            <img
              src="/images/h1.jpeg"
              alt="image"
              className=" w-[90%] h-[95%] md:ml-0 ml-6 hover:scale-95 duration-300 ease-in absolute object-cover md:-top-10 -top-8 -left-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection1;
