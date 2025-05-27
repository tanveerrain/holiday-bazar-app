import React from "react";

const hotels = [
  {
    name: "Taj Aravali Resort & Spa",
    description:
      "Prices for Taj Aravali Resort and Spa, one of the best hotels in India, start at ₹12,999+ per night.",
    image:
      "/taj.webp", // Replace with your image
    price: "₹12,999+",
    location: "Udaipur",
  },
  {
    name: "Hotel Mountain face by Snow City Hotels",
    description:
      "Set in Manali, this hotel offers a restaurant, free parking, a shared lounge and a garden.",
    image:
      "/barf.webp", // Replace with your image
    price: "₹1,440+",
    location: "Manali",
  },
  {
    name: "Hideout Premiere",
    description:
      "Elegant hotels and resorts in Goa, giving guests the chance to enjoy all her glory. Beaches from ₹4,499+.",
    image:
      "/swiming.webp", // Replace with your image
    price: "₹4,499+",
    location: "Goa",
  },
];

export default function PopularHotels() {
  return (
    <div className="px-4 py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-2">Popular Hotels</h2>
      <p className="text-center text-gray-600 mb-6 italic">
        At Jingle Holiday Bazar, we provide the best hotel facilities—National & International
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {hotels.map((hotel, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{hotel.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  {hotel.price}
                </span>
                <span className="text-sm text-gray-500">{hotel.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
