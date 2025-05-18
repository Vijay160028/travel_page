import React from 'react';
import { MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-8 border-b border-gray-800">
          <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-4 md:mb-0">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
              <span className="ml-2 text-lg md:text-xl font-bold text-white">TripPlane</span>
            </div>
            <p className="mb-6 text-sm md:text-base pr-4">
              Your all-in-one travel companion for discovering, planning, and experiencing unforgettable journeys around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Flight</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hotels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trains</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cabs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">Resources</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="hover:text-white transition-colors">Travel Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 text-sm">
          <p>&copy; 2024. All rights reserved</p>
          <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy & Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">
              Register as traveler
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;