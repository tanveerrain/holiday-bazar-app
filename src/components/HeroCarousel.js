import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={4000}
        transitionTime={1000}
      >
        {/* Slide 1 */}
        <div className="relative">
          <img src="/badri.webp" alt="Train" className="w-full h-[500px] object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white z-10">
            <h1 className="text-4xl font-bold mb-2 text-center">
              Welcome to Jingle Holiday Bazar Pvt Ltd.
            </h1>
            <p className="text-lg">Darjeeling, West Bengal</p>
            <button className="mt-4 px-6 py-2 bg-blue-700 hover:bg-blue-800 rounded">Contact</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img src="/darj.webp" alt="Temple" className="w-full h-[500px] object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white z-10">
            <h1 className="text-4xl font-bold mb-2 text-center">Explore India with Us</h1>
            <p className="text-lg">Unforgettable journeys & destinations</p>
            <button className="mt-4 px-6 py-2 bg-blue-700 hover:bg-blue-800 rounded">View Packages</button>
          </div>
        </div>

         <div className="relative">
          <img src="/jaipur.webp" alt="Temple" className="w-full h-[500px] object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white z-10">
            <h1 className="text-4xl font-bold mb-2 text-center">Explore India with Us</h1>
            <p className="text-lg">Unforgettable journeys & destinations</p>
            <button className="mt-4 px-6 py-2 bg-blue-700 hover:bg-blue-800 rounded">View Packages</button>
          </div>
        </div>

        <div className="relative">
          <img src="/himalay.webp" alt="Temple" className="w-full h-[500px] object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white z-10">
            <h1 className="text-4xl font-bold mb-2 text-center">Explore India with Us</h1>
            <p className="text-lg">Unforgettable journeys & destinations</p>
            <button className="mt-4 px-6 py-2 bg-blue-700 hover:bg-blue-800 rounded">View Packages</button>
          </div>
        </div>
        <div className="relative">
          <img src="/akshar.webp" alt="Temple" className="w-full h-[500px] object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white z-10">
            <h1 className="text-4xl font-bold mb-2 text-center">Explore India with Us</h1>
            <p className="text-lg">Unforgettable journeys & destinations</p>
            <button className="mt-4 px-6 py-2 bg-blue-700 hover:bg-blue-800 rounded">View Packages</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
