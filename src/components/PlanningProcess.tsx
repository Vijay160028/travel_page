import React from 'react';
import bar from "./images/bar.png";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";

// Cast images to string for TypeScript
const barUrl = bar as string;
const pic1Url = pic1 as string;
const pic2Url = pic2 as string;
const pic3Url = pic3 as string;

const PlanningProcess = () => {
  return (
    <div className="planning-process-section py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">How Do I Plan My Trip?</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Discover places, explore traveler stories, and customize your adventure — all in one place.
          </p>
          <button className="bg-orange-500 text-white px-5 py-2 rounded-full flex items-center mx-auto hover:bg-orange-600 transition">
            Start Planning now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-10">
          {/* Left Column */}
          <div className="flex flex-col justify-between gap-12 w-full md:w-1/2">
            {/* Image 1 */}
            <div
              className="rounded-2xl h-[405px] w-[505px]  bg-cover bg-center"
              style={{ backgroundImage: `url(${pic1Url})` }}
            />

            {/* Section 1 */}
            <div>
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

            {/* Image 3 */}
            <div
              className="rounded-2xl h-[400px] w-[505px] bg-cover bg-center"
              style={{ backgroundImage: `url(${pic3Url})` }}
            />
          </div>

          {/* Center Bar */}
          <img src={barUrl} alt="" className="hidden md:inline-block self-center" />

          {/* Right Column */}
          <div className="flex flex-col justify-between gap-12 w-full md:w-1/2">
            {/* Section 2 */}
            <div>
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

            {/* Image 2 */}
            <div
              className="rounded-2xl h-[405px] w-[505px]  bg-contain bg-center"
              style={{ backgroundImage: `url(${pic2Url})` }}
            />

            {/* Section 3 */}
            <div>
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