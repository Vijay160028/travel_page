import React from 'react';
import { Check, Calendar, List, MessageCircle } from 'lucide-react';

const PlanningProcess = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Do I Plan My Trip?</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover places, explore traveler stories, and customize your adventure — all in one place.
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center">
            Start Planning now 
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
          <div className="md:col-span-5 bg-blue-400 rounded-2xl overflow-hidden relative">
            <img 
              src="https://images.pexels.com/photos/2613438/pexels-photo-2613438.jpeg" 
              alt="Traveler planning a trip" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full">
              <List className="w-6 h-6 text-blue-500" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/men/47.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="relative">
              <div className="hidden md:block absolute top-0 bottom-0 left-6 w-0.5 bg-orange-200"></div>
              
              <h3 className="text-2xl font-bold mb-6">Explore Destinations</h3>
              
              <div className="relative mb-6 pl-12 md:pl-16">
                <div className="absolute left-0 top-0 rounded-full bg-orange-100 p-1">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-600">
                  Browse cities, nature escapes, or offbeat spots
                </p>
              </div>
              
              <div className="relative mb-6 pl-12 md:pl-16">
                <div className="absolute left-0 top-0 rounded-full bg-orange-100 p-1">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-600">
                  Filter by vibe: Solo, Scenic, Foodie, Cultural
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
          <div className="md:col-span-7 flex flex-col justify-center md:order-1 order-2">
            <div className="relative">
              <div className="hidden md:block absolute top-0 bottom-0 left-6 w-0.5 bg-orange-200"></div>
              
              <h3 className="text-2xl font-bold mb-6">Create Your Itinerary</h3>
              
              <div className="relative mb-6 pl-12 md:pl-16">
                <div className="absolute left-0 top-0 rounded-full bg-orange-100 p-1">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-600">
                  Add must-see places, food stops, and hidden gems
                </p>
              </div>
              
              <div className="relative mb-6 pl-12 md:pl-16">
                <div className="absolute left-0 top-0 rounded-full bg-orange-100 p-1">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-600">
                  Customize based on your interests & time
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 bg-orange-400 rounded-2xl overflow-hidden relative md:order-2 order-1">
            <img 
              src="https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg" 
              alt="Traveler planning" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
              <Calendar className="w-6 h-6 text-orange-500" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/29.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/men/25.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
          <div className="md:col-span-5 bg-yellow-400 rounded-2xl overflow-hidden relative">
            <img 
              src="https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg" 
              alt="Travelers chatting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
              <MessageCircle className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="relative">
              <div className="hidden md:block absolute top-0 bottom-0 left-6 w-0.5 bg-orange-200"></div>
              
              <h3 className="text-2xl font-bold mb-6">Chat with Local Experts or Past Travelers</h3>
              
              <div className="relative mb-6 pl-12 md:pl-16">
                <div className="absolute left-0 top-0 rounded-full bg-orange-100 p-1">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-600">
                  Ask real travelers or local hosts for tips
                </p>
              </div>
              
              <div className="relative mb-6 pl-12 md:pl-16">
                <div className="absolute left-0 top-0 rounded-full bg-orange-100 p-1">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-600">
                  Connect securely through our platform (no number needed)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningProcess;