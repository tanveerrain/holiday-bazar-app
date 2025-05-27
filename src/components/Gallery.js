import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const destinations = [
  { name: "New Delhi", image: "/Red-Fort.webp" },
  { name: "Shimla", image: "/Shimla1.webp" },
  { name: "Agra", image: "/taaj.png" },
  { name: "Kullu and Manali", image: "/image.png" },
  { name: "Mussoorie and Dehradun", image: "/Mussoorie1.webp" },
  { name: "Dalhousie", image: "/Khajjiar.webp" },
  { name: "Jim Corbett National Park", image: "/haathi.webp" },
  { name: "Amritsar", image: "/Jallianwala.webp" },
];

export default function Gallery() {
  return (
    <div className="bg-white py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      <p className="text-center text-gray-500 italic mb-10">At Jingle Holiday Bazar All Over India Destination Gallery</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((item, index) => (
          <ZoomOutCard key={index} image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  );
}

function ZoomOutCard({ image, name }) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ scale: 1, opacity: 1 });
        } else {
          controls.start({ scale: 0.9, opacity: 0.7 });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0.7 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="rounded overflow-hidden shadow-lg bg-white"
    >
      <img src={image} alt={name} className="w-full h-52 object-cover" />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 text-center font-semibold">
        {name}
      </div>
    </motion.div>
  );
}
