import React from 'react';
import shape from "./images/Shape.png";
import wh from "./images/wh.png";

const HotelShowcase = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm w-full max-w-md">
        <form className="question-form">
          <div className="form-group mb-4">
            <h2 className="text-sm md:text-base font-medium mb-1.5">Full Name</h2>
            <input 
              type="text" 
              name="fullName" 
              placeholder="Enter Name" 
              className="form-input w-full p-2 rounded border border-gray-300 text-sm"
            />
          </div>

          <div className="form-group mb-4">
            <h2 className="text-sm md:text-base font-medium mb-1.5">WhatsApp Number</h2>
            <div className="flex items-center gap-2 border border-gray-300 rounded p-2">
              <img src={wh} alt="WhatsApp" className="w-4 h-4 md:w-5 md:h-5" />
              <select className="outline-none bg-transparent text-sm">
                <option value="91">91</option>
              </select>
              <input 
                type="text" 
                name="whatsappNumber" 
                placeholder="9876543210" 
                className="form-input w-full p-1 outline-none text-sm" 
              />
            </div>
          </div>

          <div className="form-group mb-4">
            <h2 className="text-sm md:text-base font-medium mb-1.5">Write your question</h2>
            <textarea 
              name="question" 
              placeholder="Write your question..." 
              className="form-textarea w-full p-2 rounded border border-gray-300 text-sm" 
              rows={3}
            ></textarea>
            <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
              <img src={shape} alt="Info" className="w-3 h-3" />
              <p>This conversation moves to WhatsApp for easy access.</p>
            </div>
          </div>

          <button 
            type="submit" 
            className="send-btn bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition text-sm md:text-base w-full md:w-auto"
          >
            Send Question →
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelShowcase;
