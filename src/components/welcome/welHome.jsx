import React, { useState, useEffect } from "react";
import blue from "../../assets/blue 11.svg";

import Venture from "./Venture";
import Testimonials from "./Testimonials";
import HatsAndStats from "./HatsAndStats";

const words = ["STARTUPS", "BUSINESS", "LEADERS"];

const WelcomeHome = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 min-h-screen ">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <div className="flex gap-6 text-4xl md:text-5xl font-bold">
          <div className="h-[60px] w-[200px] overflow-hidden relative">
            <h1
              className={`absolute left-0 right-0 transition-all duration-700 ease-in-out ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
              } bg-gradient-to-r from-[#2347C7] to-[#39ABDC] text-transparent bg-clip-text text-center`}
            >
              {words[index]}
            </h1>
          </div>
          <h1 className="text-black">Welcome</h1>
        </div>

        <p className="text-lg text-gray-600">
          Your Business Success Is Our Business
        </p>

        <button className="bg-gradient-to-r from-[#2347C7] to-[#39ABDC] text-white py-3 px-6 rounded-md shadow-lg hover:opacity-90 transition">
          Contact Us
        </button>
      </div>

      <div className="absolute right-0 top-0 h-full w-auto">
          <img src={blue} alt="Welcome Home" className="h-full mt-10 w-auto object-cover"
  />
</div>


      
    </div>

    <Testimonials/>
    <Venture/>
    <HatsAndStats/>
    
    </>
  );
};

export default WelcomeHome;
