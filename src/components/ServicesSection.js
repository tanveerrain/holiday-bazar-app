import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Homestays',
      subtitle: 'Book Villas, Apartments & Resorts',
      icon: '🏡',
      desc: 'Experience comfortable, unique homestays with local charm and exceptional hospitality.',
    },
    {
      title: 'Hotels',
      subtitle: 'Book Hotels across India',
      icon: '🛏️',
      desc: 'Affordable and luxury hotels at the best rates in all major cities and travel destinations.',
    },
    {
      title: 'Flights',
      subtitle: 'Book Flights with Ease',
      icon: '✈️',
      desc: 'Quick flight bookings with great offers for domestic and international travel.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600 italic">
          Save on every trip with the best price deals – be it flights, hotels, or holidays.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 transform hover:-translate-y-2 text-center"
          >
            <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Jingle Holiday Bazar {item.title}
            </h3>
            <h4 className="text-md font-medium text-indigo-500 mb-2">{item.subtitle}</h4>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <div className="flex justify-center">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
