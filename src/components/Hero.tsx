import React, { useState } from 'react';
import { Car, Plane, Train, Building, ArrowRight } from 'lucide-react';
import SearchTabs from './SearchTabs';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('cabs');
  const [tripType, setTripType] = useState('oneWay');

  return (
    <div className="relative h-[550px] md:h-[600px] bg-cover bg-center bg-fixed" style={{ 
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=1920')"
    }}>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Discover the World, One Journey at a Time
        </h1>
        <p className="text-xl text-white mb-8">
          Seamlessly book flights, trains, cabs, and stays — all in one place. Your next unforgettable adventure begins here.
        </p>
        
        <div className="bg-white/20 backdrop-blur-lg p-2 rounded-full inline-flex mb-8">
          <SearchTabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            tabs={[
              { id: 'cabs', label: 'Cabs', icon: <Car className="w-5 h-5" /> },
              { id: 'flight', label: 'Flight', icon: <Plane className="w-5 h-5" /> },
              { id: 'trains', label: 'Trains', icon: <Train className="w-5 h-5" /> },
              { id: 'hotels', label: 'Hotels', icon: <Building className="w-5 h-5" /> },
            ]}
          />
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg max-w-4xl mx-auto">
          <div className="flex gap-4 mb-6">
            <label className={`flex items-center cursor-pointer ${tripType === 'oneWay' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
              <input 
                type="radio" 
                name="tripType" 
                value="oneWay" 
                checked={tripType === 'oneWay'}
                onChange={() => setTripType('oneWay')}
                className="sr-only"
              />
              <span className={`inline-block rounded-full px-4 py-2 ${tripType === 'oneWay' ? 'border-2 border-orange-500' : 'border border-gray-300'}`}>
                One Way
              </span>
            </label>
            
            <label className={`flex items-center cursor-pointer ${tripType === 'roundTrip' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
              <input 
                type="radio" 
                name="tripType" 
                value="roundTrip" 
                checked={tripType === 'roundTrip'}
                onChange={() => setTripType('roundTrip')}
                className="sr-only"
              />
              <span className={`inline-block rounded-full px-4 py-2 ${tripType === 'roundTrip' ? 'border-2 border-orange-500' : 'border border-gray-300'}`}>
                Outstation-Round Trip
              </span>
            </label>
            
            <label className={`flex items-center cursor-pointer ${tripType === 'airport' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
              <input 
                type="radio" 
                name="tripType" 
                value="airport" 
                checked={tripType === 'airport'}
                onChange={() => setTripType('airport')}
                className="sr-only"
              />
              <span className={`inline-block rounded-full px-4 py-2 ${tripType === 'airport' ? 'border-2 border-orange-500' : 'border border-gray-300'}`}>
                Airport Transfers
              </span>
            </label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <input 
                type="text" 
                placeholder="Zirakpur, Punjab" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              />
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <input 
                type="text" 
                placeholder="Kasauli, Himachal..." 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              />
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
              <input 
                type="text" 
                placeholder="14, April 2025" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              />
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
              <input 
                type="text" 
                placeholder="10: 00 AM" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              />
            </div>
          </div>
          
          <div className="mt-2 text-left">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Add Stops
            </button>
          </div>
          
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg mt-4 transition-colors flex items-center justify-center">
            Search
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;