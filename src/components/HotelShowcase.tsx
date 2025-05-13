import React from 'react';
import shape from "./images/Shape.png";
import wh from "./images/wh.png";

const WhatsappSupport = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12">

      <div className="bg-white rounded-2xl p-8 shadow-sm ">
        <form className="question-form">
          <div className="form-group mb-4">
            <h2>Full Name</h2>
            <input type="text" name="fullName" placeholder="Enter Name" className="form-input w-full p-2 rounded border border-gray-300" />
          </div>

          <div className="form-group mb-4">
            <h2>WhatsApp Number</h2>
            <div className="flex items-center gap-2 border border-gray-300 rounded p-2">
              <img src={wh} alt="WhatsApp" className="w-5 h-5" />
              <select className="outline-none bg-transparent">
                <option value="91">91</option>
              </select>
              <input type="text" name="whatsappNumber" placeholder="9876543210" className="form-input w-full p-2 outline-none" />
            </div>
          </div>

          <div className="form-group mb-4">
            <h2>Write your question</h2>
            <textarea name="question" placeholder="Write your question..." className="form-textarea w-full p-2 rounded border border-gray-300" rows="4"></textarea>
            <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
              <img src={shape} alt="WhatsApp" className="w-3 h-3" />
              <p>This conversation moves to WhatsApp for easy access.</p>
            </div>
          </div>

          <button type="submit" className="send-btn bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">Send Question →</button>
        </form>
      </div>
    </div>
  );
};

export default WhatsappSupport;
