import React from 'react';
import { MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="w-[1440px] mx-auto px-[100px] py-8 flex items-center justify-between">
        <div className="flex items-center">
          <MapPin className="w-6 h-6 text-purple-600" />
          <span className="ml-2 text-xl font-bold">TripPlane</span>
        </div>
        
        <nav className="flex items-center gap-10">
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
        
        <div>
          <a href="#" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
            Login/Signup
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;