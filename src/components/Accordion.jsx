import React, { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
        title: 'What is Travel Smart?',
        content: 'Travel Smart is your one-stop platform for discovering and booking amazing travel destinations across the globe. We provide personalized travel experiences to make your journey unforgettable.'
    },
    {
        title: 'How can I book a destination?',
        content: 'Booking a destination is easy! Just visit our "Trip catalog" page, browse through our curated travel spots, and click "Book Now" on your chosen destination. We’ll take care of the rest!'
    },
    {
        title: 'Can I get travel assistance?',
        content: 'Absolutely! Our team is here to assist you 24/7. Reach out to us via email at support@travelsmart.com or WhatsApp us at +2348068078495 for any queries or assistance during your trip.'
    },
    {
        title: 'Do you offer group discounts?',
        content: 'Yes, we do! Whether you’re planning a family vacation or a group adventure, we offer special discounts for group bookings. Contact us to learn more about our offers and deals.'
    },
    {
        title: 'What should I pack for my trip?',
        content: 'That depends on your destination! We recommend checking our destination guides for personalized packing lists based on climate, activities, and duration of your stay.'
    },
    {
        title: 'How can I find your site map?',
        content: 'You can easily find our site map in the footer of every page. It helps you navigate to important sections like About us, Trip catalog, contact, and Tour Review with ease.'
    }
];


  return (
    <div className="max-w-2xl mx-auto my-10">
      {accordionData.map((item, jude) => (
        <div key={jude} className="mb-4 border border-gray-300 rounded-lg shadow-md">
          <button className="w-full text-left p-4 bg-secondary text-primary flex justify-between items-center"onClick={() => toggleAccordion(jude)}>
            <span className="font-semibold text-lg">{item.title}</span>
            <span className={`transform transition-transform duration-300 ${activeIndex === jude ? 'rotate-180' : '' }`}><FaArrowAltCircleDown /></span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${ activeIndex === jude ? 'max-h-screen' : 'max-h-0' }`}>
            <div className="p-4 bg-tertiary text-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
