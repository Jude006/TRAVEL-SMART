// ReviewSection.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Import star icon for rating

function Review1() {
  const [rating, setRating] = useState(0);

  return (
   <section className='my-16 font-mont'>
     <h1 className="text-center md:text-3xl lg:text-4xl text-xl font-bold mb-6 font-poppins">Package Tour Review </h1>
    <div className='grid md:grid-cols-2 grid-cols-1 gap-20 mt-4 '>
    <div className="p-6 bg-secondary rounded-md text-primary ">
     <h1 className="text-center text-2xl font-bold mb-2 text-primary">Enter Review: </h1>
      <form required action="https://formspree.io/f/myzgqypb"
  method="POST" className=''>
        <div className="mb-4 ">
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 rounded-md p-2 text-tertiary focus:outline-none focus:border-none"
           
          />
        </div>
        <div className="my-4">
          <label className="block text-lg font-medium">Rate Destination</label>
          <div className="flex text-2xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${star <= rating ? 'text-orange-500        ' : 'text-primary'}`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-lg font-medium">Review</label>
          <textarea
            id="review"
            name="review"
            rows="4"
            required
            className="w-full border border-gray-300 text-tertiary focus:outline-none focus:border-none rounded-md p-2"
           
          ></textarea>
        </div>
        <button
          type="submit"
         
          className="max-w-[80%] py-3 text-white btn"
        >
          Submit Review
        </button>
      </form>
    </div>
     <div className=' py-3 px-2 flex md:flex-col lg:flex-row flex-col gap-4'>
      <img src="/images/review image.jpg" alt="image"  className='object-cover object-top lg:w-1/2 rounded'/>
      <img src="/images/review image1.jpg" alt="image"  className='object-cover object-top lg:w-1/2 rounded'/>
     </div>
    </div>
   </section>
  );
}

export default Review1;
