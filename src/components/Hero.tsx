import React, { useState } from 'react';
import cab from'./images/cab.jpg';
import { Car, Plane, Train, Building, ArrowRight } from 'lucide-react';
import SearchTabs from './SearchTabs';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('cabs');
  const [tripType, setTripType] = useState('oneWay');
  const [image, setImage] = useState<string | null>(null);

  React.useEffect(() => {
    if(activeTab === "cabs"){
      setImage(cab)
    } else if(activeTab === "flight"){
      setImage("https://img.freepik.com/free-photo/airport-terminal_1417-1456.jpg?t=st=1746549682~exp=1746553282~hmac=57a1a63634431e43daa6e7831a9842b2e57426258ecd13ada6d7468ec6cc498d&w=1380");
    } else if(activeTab === "trains"){
      setImage("https://images.pexels.com/photos/2169286/pexels-photo-2169286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2ric-train-2169286/-Njq3Nz6-5rQ")
    } else {
      setImage("https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?t=st=1746549757~exp=1746553357~hmac=aed416014b151ca109c156a31de602533b0e222a1dab97c6f6a50de2f5b6a06b&w=996")
    }
  }, [activeTab]);

  return (
    <div 
      className="relative min-h-[550px] pt-[80px] sm:pt-[100px] md:min-h-[750px] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
          Discover the World, One Journey at a Time
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 max-w-3xl mx-auto">
          Seamlessly book flights, trains, cabs, and stays — all in one place. Your next unforgettable adventure begins here.
        </p>
        
        <div className="bg-white/20 backdrop-blur-lg p-1.5 sm:p-2 rounded-full inline-flex mb-6 md:mb-8 overflow-x-auto max-w-full">
          <SearchTabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            tabs={[
              { id: 'cabs', label: 'Cabs', icon: <Car className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { id: 'flight', label: 'Flight', icon: <Plane className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { id: 'trains', label: 'Trains', icon: <Train className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { id: 'hotels', label: 'Hotels', icon: <Building className="w-4 h-4 sm:w-5 sm:h-5" /> },
            ]}
          />
        </div>
        
        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 md:mb-6 overflow-x-auto">
            <label className={`flex items-center cursor-pointer min-w-fit ${tripType === 'oneWay' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
              <input 
                type="radio" 
                name="tripType" 
                value="oneWay" 
                checked={tripType === 'oneWay'}
                onChange={() => setTripType('oneWay')}
                className="sr-only"
              />
              <span className={`inline-block rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm ${tripType === 'oneWay' ? 'border-2 border-orange-500' : 'border border-gray-300'}`}>
                One Way
              </span>
            </label>
            
            <label className={`flex items-center cursor-pointer min-w-fit ${tripType === 'roundTrip' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
              <input 
                type="radio" 
                name="tripType" 
                value="roundTrip" 
                checked={tripType === 'roundTrip'}
                onChange={() => setTripType('roundTrip')}
                className="sr-only"
              />
              <span className={`inline-block rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm ${tripType === 'roundTrip' ? 'border-2 border-orange-500' : 'border border-gray-300'}`}>
                Outstation-Round Trip
              </span>
            </label>
            
            <label className={`flex items-center cursor-pointer min-w-fit ${tripType === 'airport' ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
              <input 
                type="radio" 
                name="tripType" 
                value="airport" 
                checked={tripType === 'airport'}
                onChange={() => setTripType('airport')}
                className="sr-only"
              />
              <span className={`inline-block rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm ${tripType === 'airport' ? 'border-2 border-orange-500' : 'border border-gray-300'}`}>
                Airport Transfers
              </span>
            </label>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="relative">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">From</label>
              <input 
                type="text" 
                placeholder="Zirakpur, Punjab" 
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-sm"
              />
            </div>
            
            <div className="relative">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">To</label>
              <input 
                type="text" 
                placeholder="Kasauli, Himachal..." 
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-sm"
              />
            </div>
            
            <div className="relative">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Departure</label>
              <input 
                type="text" 
                placeholder="14, April 2025" 
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-sm"
              />
            </div>
            
            <div className="relative">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
              <input 
                type="text" 
                placeholder="10: 00 AM" 
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-sm"
              />
            </div>
          </div>
          
          <div className="mt-2 text-left">
            <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
              Add Stops
            </button>
          </div>
          
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg mt-3 sm:mt-4 transition-colors flex items-center justify-center text-sm sm:text-base">
            Search
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
