import React from 'react';
import people from "./images/people.png";
import Card1 from "./images/Card1.png"; // Adjust the path as needed

const Testimonials = () => {
  return (
    <div className="testimonials-section bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative md:w-1/2" style={{ paddingTop: '40px', paddingRight: '100px', paddingLeft: '100px' }}>
            <h2 className="font-bold mb-4 text-3xl md:text-5xl leading-snug" style={{ fontFamily: 'Poppins', fontWeight: 900 }}>
              10,000+ travelers have discovered unforgettable journeys on Triplane
            </h2>
          </div>

          <div className="relative md:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[500px]">
              <img src={people} alt="People talking" className="w-full h-auto object-cover" />

              <div className="absolute inset-0 flex items-center justify-center">
                <img src={Card1} alt="Testimonial" className="w-40 md:w-64 rounded-lg" style={{ position: 'absolute', top: '20%', left: '22%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;