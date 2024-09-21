import React from 'react'
import Slide from '../jsons file/Slide.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };


  return (
    <div className='bg-secondary py-16 mt-6 font-mont'>
      <div>
        <h1 className='text-primary capitalize  text-3xl font-bold text-center font-poppins'>Testimonies from our top travellers</h1>
      </div>
      <div className='w-full relative'>
        <div className=' p-4 w-1/2  flex justify-center items-center  border-solid border-black border-x-transparent border-b-[380px] border-r-[100px] '>
           <div className='absolute left-0 w-full right-0 bottom-4  md:px-10 lg:px-16 p-6  justify-between items-center gap-10'>
         
         <Slider {...settings} className='text-tertiary '>
           {Slide.map((item,key)=>(
            <div key={key} className='flex flex-col gap-10 font-mont shadow-lg bg-primary p-4 rounded-md'>
                <div className='flex gap-4 items-center'>
                    <img src={item.image} alt="" className='h-32 w-32 rounded-full object-top shadow object-cover'/>
                    <div>
                    <p className='md:text-2xl text-xl font-bold'>{item.name}</p>
                    <p >{item.title}</p>
                    </div>
                </div>
                <div>
                    <p className='md:text-[16px] text-[14px]'>{item.testimony}</p>
                </div>
            </div>
           ))}
           </Slider>
           </div>
        </div>
      
      </div>
    </div>
  )
}

export default Review
