import React from "react"; // Importing React library

function AboutSection1() {
  return (
    <section className="font-mont">
      {" "}
      {/* Main section for About Us */}
      <header className="text-center font-poppins w-full">
        {" "}
        {/* Header for the section */}
        <h1 className="md:text-5xl text-3xl font-bold">About Us</h1>{" "}
        {/* Main title */}
        <p className="text-lg text-center text-tertiary">
          Your Gateway to Amazing Travel Experiences {/* Subtitle */}
        </p>
      </header>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {" "}
        {/* Grid layout for content */}
        <div>
          <p className="md:text-lg mb-6">
            {" "}
            {/* Paragraph introducing Travel Smart */}
            Welcome to Travel Smart, a platform dedicated to providing users
            with the best travel experiences. Founded in 2021, we have been
            committed to connecting travelers with unique adventures around the
            globe.
          </p>
          <div>
            <h2 className="text-2xl font-semibold">Our Mission</h2>{" "}
            {/* Section for mission */}
            <p className="text-lg mb-4">
              To inspire and empower travelers to explore the world with
              confidence and curiosity. {/* Mission statement */}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Our Values</h2>{" "}
            {/* Section for values */}
            <ul className="list-disc list-inside text-left mx-auto max-w-lg">
              {" "}
              {/* List of values */}
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Customer Satisfaction</li>
              <li>Diversity and Inclusion</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="/images/aboutimg.jpg"
            alt=""
            className="object-cover h-[50vh] w-full"
          />{" "}
          {/* Image representing the section */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection1; // Exporting the component for use in other parts of the app
