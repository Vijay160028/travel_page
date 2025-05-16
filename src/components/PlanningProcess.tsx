import React from 'react';
import bar from "./images/bar.png"
import pic1 from "./images/pic1.png"
import pic2 from "./images/pic2.png"
import pic3 from "./images/pic3.png"

// py-12 pb-20 bg-white
const PlanningProcess = () => {
  return (
<div className="planning-process-section py-16 bg-white">
      <div className="mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">How Do I Plan My Trip?</h2>
          <p className="text-gray-600 mb-4">
            Discover places, explore traveler stories, and customize your adventure — all in one place.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center mx-auto">
            Start Planning now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        <div className='flex min-h-[100vh] justify-center md:flex-row flex-col'>
          <div className='flex md:flex-col h-[100%] justify-between pr-10'>
          <div className="relative">
            <div className="bg-blue-400 rounded-2xl h-[360px] w-[505px]  overflow-hidden relative" style={{background:`url(${pic1})`}}>

            </div>
          </div>

      
          <div className="relative mt-20"> {/* Added margin-top for spacing */}
            <h3 className="text-xl font-bold mb-4">Create Your Itinerary</h3>
            <div className="flex items-start mb-3">
              <div className="mr-3 mt-1">
                <div className="bg-orange-100 rounded-full p-1">
                  <div className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Add must-see places, food stops, and hidden gems</p>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="bg-orange-100 rounded-full p-1">
                  <div className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Customize based on your interests & time</p>
            </div>
          </div>
          <div className="relative mt-20">
            <div className="bg-yellow-400 rounded-2xl h-[360px] w-[505px] overflow-hidden relative"style={{background:`url(${pic3})`}}>


            </div>
          </div>
          </div>
            <img src={bar} alt="" className=' hidden md:inline'/>
          <div className='flex md:flex-col h-[100%] justify-between pl-10'>
          <div className='pt-20'>
            <h3 className="text-xl font-bold mb-4">Explore Destinations</h3>
            <div className="flex items-start mb-3">
              <div className="mr-3 mt-1">
                <div className="bg-orange-100 rounded-full p-1">
                  <div className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Browse cities, nature escapes, or offbeat spots</p>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="bg-orange-100 rounded-full p-1">
                  <div className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Filter by vibe: Solo, Scenic, Foodie, Cultural</p>
            </div>
          </div>
          <div className="relative mt-20 ">
            <div className="bg-transparent-400 rounded-xl h-[360px] w-[505px] overflow-hidden relative"style={{background:`url(${pic2})`}}> 
  

            </div>
          </div>
          <div className='relative mt-20'>
            <h3 className="text-xl font-bold mb-4">Chat with Local Experts or Past Travelers</h3>
            <div className="flex items-start mb-3">
              <div className="mr-3 mt-1">
                <div className="bg-orange-100 rounded-full p-1">
                  <div className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Ask real travelers or local hosts for tips</p>
            </div>
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <div className="bg-orange-100 rounded-full p-1">
                  <div className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Connect securely through our platform (no number needed)</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningProcess;
