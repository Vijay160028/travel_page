import React from 'react';
import dia from './images/dia.png'

const TravelerBenefits = () => {
  return (
    <div className="bg-[#9858D4] text-white p-6 md:p-12 rounded-2xl relative mx-auto max-w-7xl my-12 md:my-16 font-['Urbanist']">
      <div className="md:max-w-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Only Real<br className="md:hidden" /> Travelers can<br className="md:hidden" /> guide you...
        </h2>
        <p className="text-base md:text-lg mt-4 md:mt-6 opacity-90">
          Only people who've actually been there<br className="hidden sm:block" />
          can help you plan better, smarter, and<br className="hidden sm:block" />
          stress-free.
        </p>
      </div>

      <div className="absolute top-1/2 right-6 md:right-16 lg:right-24 transform -translate-y-1/2 opacity-70 hidden md:block">
        <img src={dia} alt="Diamond" className="w-6 h-6 md:w-8 md:h-8" />
      </div>
    </div>
  );
};

export default TravelerBenefits;
