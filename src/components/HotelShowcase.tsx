import React from 'react';

const HotelShowcase = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Top Hotels in UK</h3>
        <a href="#" className="text-sm text-gray-600 hover:text-purple-600 border border-gray-200 rounded-full px-4 py-1 transition-colors">
          Browse All Hotels
        </a>
      </div>
      
      <p className="text-gray-500 mb-6">
        Discover luxurious accommodations, boutique stays, and budget-friendly options throughout the United Kingdom.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-2 group">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-300 animate-pulse group-hover:scale-105 transition-transform duration-300"></div>
            </div>
            <h4 className="font-medium">Inhabited Queens Garden</h4>
            <p className="text-sm text-gray-500">London, United Kingdom</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelShowcase;