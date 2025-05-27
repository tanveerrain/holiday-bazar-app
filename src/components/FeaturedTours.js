import React from 'react';
import { motion } from 'framer-motion';

const tours = [
  {
    title: "Week At Thiksey Monastery",
    desc: "Explore Ladakh's majestic 12-storey monastery, home to 500+ monks and breathtaking views of the Himalayas.",
    img: "/Leh03.webp",
    link: "#",
    bg: "bg-gradient-to-tr from-yellow-100 to-yellow-200",
  },
  {
    title: "Week At Solang Valley, Manali",
    desc: "Enjoy snow adventures and paragliding in Manali’s beautiful Solang Valley at 8400 feet elevation.",
    img: "/Valley.webp",
    link: "#",
    bg: "bg-gradient-to-tr from-blue-100 to-blue-200",
  },
  {
    title: "Week At Beach in Goa",
    desc: "Relax on pristine beaches, savor seafood, and immerse in Goa’s vibrant culture and stress-free vibes.",
    img: "/Goa-beach.webp",
    link: "#",
    bg: "bg-gradient-to-tr from-pink-100 to-pink-200",
  },
];

const FeaturedTours = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ Featured Tours in India
        </motion.h2>
        <p className="mt-3 text-gray-600 text-lg italic">
          Discover iconic destinations across India — reimagined for the modern traveler
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {tours.map((tour, index) => (
          <motion.div
            key={index}
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ${tour.bg}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="overflow-hidden h-56">
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{tour.title}</h3>
              <p className="text-gray-700 mb-4">{tour.desc}</p>
              <a href={tour.link} className="text-indigo-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTours;
