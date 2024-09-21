import React from "react";
const FeedbackForm = () => {
    return (
      <section className="container font-mont mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-6 gap-6">
          {/* Image Section */}
          <div className="flex flex-col justify-center items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              <img src="/images/fee.avif" alt="Travel Destination 1" className="rounded-lg bg-red-400 shadow-lg object-cover " />
              <img src="/images/fee.jpg" alt="Travel Destination 2" className="rounded-lg shadow-lg object-cover h-[100%]" />
            </div>
          </div>
  
          {/* Feedback Form Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center mb-4">We Value Your Feedback</h2>
            <form  action="https://formspree.io/f/mrbzwqoj"
  method="POST" className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  rows="4"
                  required
                ></textarea>
              </div>
             
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-secondary text-white py-2 rounded-lg hover:bg-secondary-dark transition"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeedbackForm;
  