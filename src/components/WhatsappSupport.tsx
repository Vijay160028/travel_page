import React from 'react';
import { Phone } from 'lucide-react';

const WhatsappSupport = () => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl p-8 h-full flex flex-col justify-between">
      <div>
        <div className="inline-block px-4 py-1 bg-gray-800 rounded-full text-sm font-medium mb-4">
          Have a Quick Question?
        </div>
        <h3 className="text-2xl font-bold mb-2">
          Get a WhatsApp response within 24 hrs
        </h3>
        <p className="text-gray-400 mb-6">
          Your question will be answered by experienced travelers
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-white"
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Phone className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="tel"
            placeholder="WhatsApp Number"
            className="w-full p-3 pl-12 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-white"
          />
        </div>
        
        <div className="relative">
          <textarea
            placeholder="Write your question"
            rows={3}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-white"
          />
        </div>
        
        <label className="flex items-center space-x-2 text-sm text-gray-400">
          <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-purple-600 focus:ring-purple-500" />
          <span>This conversation moves to WhatsApp for easy access.</span>
        </label>
        
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
          Send Question
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhatsappSupport;