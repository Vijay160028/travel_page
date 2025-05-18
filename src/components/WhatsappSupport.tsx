import React from 'react';
import wa from "./images/wa.png"

const WhatsappSupport = () => {
  return (
    <div className="bg-transparent text-white rounded-xl md:rounded-2xl p-4 md:p-6 w-full h-full max-h-[500px] md:max-h-[672px]">
      <img 
        src={wa} 
        alt="WhatsApp Support" 
        className="w-full h-full object-cover rounded-xl md:rounded-2xl"
        loading="lazy"
      />
    </div>
  );
};

export default WhatsappSupport;