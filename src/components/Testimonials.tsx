import React from 'react';
import people from "./images/people.png"

const Testimonials = () => {
  return (
    <div className="testimonials-section bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
    <div className="relative md:w-1/2" style={{ width: '1440px', height: '', paddingTop: '40px', paddingRight: '100px', paddingLeft: '100px' }}>
      <h2 className="font-bold mb-4" style={{ fontFamily: 'Poppins', fontWeight: 900, fontSize: '48px', lineHeight: '72px', letterSpacing: '0%' }}>
        10,000+ travelers have discovered unforgettable journeys on Triplane
      </h2>
          </div>
          
<div>
    <div className="relative md:w-1/2">
      <div className="relative" style={{ width: '500px', height: 'auto' }}>
        <img
          src={people} // Replace with your image path
          alt="People talking"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  


            

            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;