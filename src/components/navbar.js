import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-sky-800 to-sky-400 text-white px-6 py-3 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <img src="/mainlogo.gif" alt="Logo" className="h-12 w-12 rounded-full" />

        {/* Menu Items */}
        <ul className="flex space-x-6 font-semibold text-lg">
          <li><a href="#" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#" className="hover:text-yellow-300">About Us</a></li>

          <li className="relative group">
            <a href="#" className="hover:text-yellow-300">Domestic ▾</a>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">Place 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Place 2</li>
            </ul>
          </li>

          <li className="relative group">
            <a href="#" className="hover:text-yellow-300">International ▾</a>
            <ul className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">Place A</li>
              <li className="px-4 py-2 hover:bg-gray-100">Place B</li>
            </ul>
          </li>

          <li><a href="#" className="text-green-200 font-bold">Place</a></li>
          <li><a href="#" className="hover:text-yellow-300">Packages</a></li>
          <li><a href="#" className="hover:text-yellow-300">Contact Us</a></li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="text-right font-bold text-sm leading-tight">
        <div>+91-9565357405</div>
        <div className="text-yellow-300">PAY NOW</div>
      </div>
    </nav>
  );
};

export default Navbar;
