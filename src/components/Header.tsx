import React, { useState } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full px-4 sm:px-6 md:px-8 lg:w-[90vw] xl:w-[80vw] lg:left-[5vw] xl:left-[10vw] rounded-full top-4 bg-white/80 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-3 md:py-4">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
          <span className="ml-1 md:ml-2 text-base md:text-xl font-bold">TripPlane</span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-10">
          <a href="#" className="text-orange-500 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>
          </a>
          <a href="#" className="text-slate-700 hover:text-orange-500 transition-colors relative group">
            Blogs
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#" className="text-slate-700 hover:text-orange-500 transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a href="#" className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-gray-900 transition-colors text-xs md:text-sm whitespace-nowrap">
            Login/Signup
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 text-slate-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 mt-2 px-4 py-4 rounded-b-2xl shadow-lg border-t border-gray-100">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-orange-500 font-medium py-2 px-4 rounded-lg bg-orange-50">
              Home
            </a>
            <a href="#" className="text-slate-700 hover:text-orange-500 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">
              Blogs
            </a>
            <a href="#" className="text-slate-700 hover:text-orange-500 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">
              About Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
