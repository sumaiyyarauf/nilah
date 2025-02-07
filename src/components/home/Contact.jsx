import React from "react";
import mail from '../../assets/mail-send.svg'
import Phone from '../../assets/phone.svg'
import address from '../../assets/travel-map.svg'

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-20 gap-10 items-center min-h-screen p-6 ">

      <div className="w-full  md:w-1/2 p-6">
        <h1 className="text-6xl font-bold text-[#1A3261] mb-4">Contact Us</h1>
        <p className="text-[#38587E] mb-6">Scelerisque nisl egestas ultricies mattis egestas porttitor ullamcorper lorem.</p>

        <div className="space-y-4 p-2 pl-4 mx-4 rounded-xl shadow-xl">
          <div className="flex items-center space-x-3">
            <img src={mail} alt="" />
            <span className="text-[#5869A2]">example@email.com</span>
          </div>
          <div className="flex items-center space-x-3">
          <img src={Phone} alt="" />
            <span className="text-[#5869A2]">+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-3">
          <img src={address} alt="" />
            <span className="text-[#5869A2]">123 Street, City, Country</span>
          </div>
        </div>
      </div>


      <div id="#contact" className="w-full md:w-1/2 bg-gradient-to-r from-[#F2F8FE] to-[#F2F5FE] p-6 shadow-lg rounded-lg">
        
        <form className="space-y-4">
            <div className="flex gap-2">
                <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md focus:outline-blue-400" />
                <input type="tel" placeholder="Your Phone" className="w-full p-3 border rounded-md focus:outline-blue-400" />
            </div>
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md focus:outline-blue-400" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md focus:outline-blue-400"></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-[#2347C7] to-[#39ABDC] text-white py-2 rounded-md hover:from-[#39ABDC] hover:to-[#2347C7] transition">
                Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
