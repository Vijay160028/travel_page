import React from 'react';
import { Diamond } from 'lucide-react';

const RealTravelers = () => {
  return (
    <div className="bg-purple-600 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Only Real Travelers can guide you...
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Only people who've actually been there can help you plan better, smarter, and 
            stress-free.
          </p>
        </div>
        <div className="flex justify-end">
          <Diamond className="w-16 h-16 text-white/30" />
        </div>
      </div>
    </div>
  );
};

export default RealTravelers;