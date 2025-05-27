import React from 'react';
import Navbar from './components/navbar'; // Also needed for Error 2
import HeroCarousel from './components/HeroCarousel';
import ServicesSection from './components/ServicesSection';
import FeaturedTours from './components/FeaturedTours';
import PopularHotels from './components/PopularHotels';
import Gallery from './components/Gallery';
import Footer from './components/footer'; // Uncomment this line if you have a Footer component

function App() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <ServicesSection />
      <FeaturedTours />
      <PopularHotels />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App; 
