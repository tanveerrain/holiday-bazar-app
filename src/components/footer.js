import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-800 to-sky-600 text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-blue-400 pb-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Jingle Holiday Bazar</h2>
          <p className="text-sm text-gray-200">Travel with us from here to anywhere…</p>
          <div className="mt-4 text-sm">
            <p className="mb-1">📞 +91 8506922777 / +91 8506944777</p>
            <p>📧 jingleholidaybazar@gmail.com</p>
            <p className="mt-2 text-blue-100">24/7 Dedicated Customer Support</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Destinations</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Domestic Packages */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Domestic Packages</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>Uttarakhand</li>
            <li>Mumbai</li>
            <li>Ladakh</li>
            <li>Meghalaya</li>
            <li>North East India</li>
            <li>Rajasthan</li>
          </ul>
        </div>

        {/* International Packages */}
        <div>
          <h3 className="text-lg font-semibold mb-3">International</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>Maldives</li>
            <li>Singapore</li>
            <li>Switzerland</li>
            <li>Saudi Arabia</li>
            <li>Thailand</li>
            <li>Dubai</li>
          </ul>
        </div>

        {/* Yatra Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Yatra</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>Mata Vaishno</li>
            <li>Kedarnath</li>
            <li>Badrinath</li>
            <li>Char Dham Yatra</li>
            <li>Ramayana Yatra</li>
            <li>9 Devi Yatra</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-blue-100">
        <p className="mb-3 md:mb-0">
          Powered by <a href="#" className="text-white underline hover:text-yellow-300">Mo Tanveer Rain</a> | © {new Date().getFullYear()} Jingle Holiday Bazar. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <FaFacebookF className="hover:text-yellow-300 cursor-pointer" />
          <FaTwitter className="hover:text-yellow-300 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-300 cursor-pointer" />
          <FaLinkedinIn className="hover:text-yellow-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
