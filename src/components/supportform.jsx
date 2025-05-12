import React, { useState } from 'react';
import { MessageSquare, Info, ArrowRight } from 'lucide-react'; // Using MessageSquare as placeholder for WhatsApp icon

const SupportForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '', // Storing only the number part
    question: ''
  });

  // Default country code (can be made dynamic later if needed)
  const countryCode = '+91'; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // e.g., send data to backend or trigger WhatsApp chat
    console.log('Form Data Submitted:', {
      ...formData,
      fullWhatsappNumber: `${countryCode}${formData.whatsappNumber}` 
    });
    // Potentially redirect or show a success message
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-8 min-h-screen bg-white"> 
      {/* Left Side - Info Panel */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 flex flex-col justify-between w-full max-w-md md:h-[600px]">
        {/* Using flex-col and justify-between to push content */}
        <div>
          <span className="inline-block bg-gray-700 text-orange-400 px-4 py-1 rounded-full text-sm mb-8">
            Have a Quick Question?
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Get a <br />
            WhatsApp <br />
            response <br />
            within 24 <br />
            hrs
          </h1>
        </div>
        <p className="text-gray-400 text-sm md:text-base">
          Your question will be answered by experienced travelers
        </p>
         {/* Optional: Add background pattern element here if needed */}
      </div>

      {/* Right Side - Form */}
      <div className="w-full max-w-md p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-orange-500 focus-within:border-orange-500">
              <span className="px-3 text-green-500">
                {/* Replace with actual WhatsApp icon if available */}
                <MessageSquare size={20} /> 
              </span>
              <span className="text-gray-500 px-2 border-r border-gray-300">
                {countryCode} ▼ {/* Simple representation of dropdown */}
              </span>
              <input
                type="tel" // Use type="tel" for phone numbers
                id="whatsappNumber"
                name="whatsappNumber"
                placeholder="9876543210"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border-none rounded-r-md focus:outline-none focus:ring-0" // Remove internal border/ring
                pattern="[0-9]{10}" // Basic 10-digit validation (adjust as needed)
                title="Please enter a valid 10-digit phone number"
                required
              />
            </div>
          </div>

          {/* Write your question */}
          <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
              Write your question
            </label>
            <textarea
              id="question"
              name="question"
              placeholder="Write your question ..."
              value={formData.question}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              required
            ></textarea>
          </div>

          {/* Info Notice */}
          <div className="flex items-center text-sm text-gray-500">
            <Info size={16} className="mr-2 text-blue-500" />
            This conversation moves to WhatsApp for easy access.
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition duration-150 ease-in-out"
          >
            Send Question
            <ArrowRight size={20} className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportForm;