import React from "react"; // Importing React library

function AboutSection2() {
  return (
    <section>
      {" "}
      {/* Main section for popular tours */}
      <div className="my-6">
        <h1 className="text-center font-poppins md:text-5xl text-3xl font-bold text-tertiary">
          Our Popular Tour
        </h1>{" "}
        {/* Title for the section */}
      </div>
      <div>
        <div className="grid grid-cols-12 gap-8">
          {" "}
          {/* Grid layout for the first row of images */}
          <div className="md:col-span-8 col-span-12">
            {" "}
            {/* Larger image taking up more space */}
            <img
              src="/images/ab1.jpg"
              alt=""
              className="h-[40vh] md:h-[50vh] w-full object-cover"
            />{" "}
            {/* Adjusted height for large screens */}
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            {/* Smaller image */}
            <img
              src="/images/ab2.jpg"
              alt=""
              className="h-[40vh] md:h-[50vh] object-cover"
            />{" "}
            
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-8">
          {" "}
          {/* Grid layout for the second row of images */}
          <div className="md:col-span-4 col-span-12">
            {" "}
            {/* First small image */}
            <img src="/images/ab3.jpg" alt="" className="object-cover" />{" "}
            {/* Default height */}
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            {/* Second small image */}
            <img src="/images/ab4.jpg" alt="" className="object-cover" />{" "}
            {/* Default height */}
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            {/* Third small image */}
            <img src="/images/ab5.jpg" alt="" className="object-cover" />{" "}
            {/* Default height */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection2; // Exporting the component for use in other parts of the app
