import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              10,000+ travelers have discovered unforgettable journeys on Triplane
            </h2>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-3 gap-4 relative">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={`w-10 h-10 rounded-full bg-cover bg-center border-2 border-white ${i % 2 === 0 ? 'opacity-60' : 'opacity-100'}`} style={{
                  backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg)`,
                }}>
                </div>
              ))}
            </div>
            
            <div className="absolute top-5 right-10 bg-white rounded-lg p-3 shadow-lg">
              <p className="text-sm">
                Ashley found offbeat hill stations with fewer crowds
              </p>
            </div>
            
            <div className="absolute bottom-5 right-24 bg-white rounded-lg p-3 shadow-lg">
              <p className="text-sm">
                Mira planned her entire food tour across South India in 15 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;