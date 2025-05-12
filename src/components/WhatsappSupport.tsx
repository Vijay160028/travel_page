import React from 'react';
import { Phone } from 'lucide-react';
import wa from "./images/wa.png"

const WhatsappSupport = () => {
  return (
    <div className="bg-transparent text-white rounded-2xl p-8 h-full flex flex-col justify-center items-center" style={{ width: '505px', height: '672px', borderRadius: '20px' }}>
      <img src={wa} alt="WhatsApp Support" className="w-full h-full object-cover rounded-2xl" />
    </div>
  );
};

export default WhatsappSupport;