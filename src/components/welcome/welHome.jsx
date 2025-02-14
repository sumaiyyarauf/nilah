import React, { useState, useEffect } from "react";
import blue from "../../assets/blue 11.svg";

import Venture from "./Venture";
import Cards from "./Cards";
import HatsAndStats from "./HatsAndStats";
import InfoSection from "../about/InfoSection";
import Testimonial from "./Testimonial";

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
      <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-8 md:py-16 min-h-screen relative">
        <div className="md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-3xl sm:text-4xl md:text-5xl font-bold">
            <div className="h-[50px] sm:h-[60px] w-[160px] sm:w-[200px] overflow-hidden relative">
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

          <p className="text-base sm:text-lg text-gray-600">
            Your Business Success Is Our Business
          </p>

          <button className="bg-gradient-to-r from-[#2347C7] to-[#39ABDC] text-white py-3 px-6 rounded-md shadow-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

        <div className="absolute right-0 top-0 h-full w-auto hidden md:block">
          <img
            src={blue}
            alt="Welcome Home"
            className="h-full mt-10 w-auto object-cover"
          />
        </div>
      </div>

      <Cards />
      <Venture />
      <HatsAndStats />
      <Testimonial/>
      <InfoSection />
    </>
  );
};

export default WelcomeHome;
