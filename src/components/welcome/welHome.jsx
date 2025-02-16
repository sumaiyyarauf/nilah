import React, { useState, useEffect } from "react";
import blue from "../../assets/blue 11.svg";

import Venture from "./Venture";
import Cards from "./Cards";
import HatsAndStats from "./HatsAndStats";
import InfoSection from "../about/InfoSection";
import Testimonial from "./Testimonial";
import Practice from "./Practice"

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
        <div className="md:w-3/4 text-center md:text-left space-y-4 sm:space-y-6 ">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold">
            <div className="h-[50px] sm:h-[90px] md:h-[120px] w-[160px] sm:w-[200px] md:w-[270px] lg:w-[350px] overflow-hidden relative">
              <h1
                className={`absolute left-0 right-0 transition-all duration-700 ease-in-out ${
                  fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
                } bg-gradient-to-r from-[#2347C7] to-[#39ABDC] text-transparent bg-clip-text text-center`}
              >
                {words[index]}
              </h1>
            </div>
            <h1 className="text-black">WELCOME</h1>
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
        <div className="absolute right-0 top-0 h-full w-auto block md:hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/53c4/2909/24861e667e3caafebf09e0e023a6fdf1?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m5OUGJfRTtLcQ9OjK8aWyi3jtvza6TUf-X0JwQ8vqfjZTQ9BXNLy-uauV4DKec634UDMUKP~N1XP9KjxFGZW9ttRZRUSdInUHLJF~taohKtY2PbZaAjFOQQu8NzC4KKN2Ab6Pc98Ie101hEItdprbWCXuvrdOxKdKzGqJTYnG~U0YDOK~DEVdz7Kl3YCaVecq7kq1mxvjBW1C320Pov5DeVuTuFRi-UUEZfphq9v~OrQ1MzCeDzNW1MT4F5-V9YVJphgbM1iHzhi45u6cGzhel4Lvbj2jt0PQyPtw0MdDQdlt8pUfY6BYClT12JPx2p4XA2FJcOI0iFAaXDguZuC3w__"
            alt="Welcome Home"
            className="h-[55%] mt-[350px] w-auto object-cover"
          />
        </div>
      </div>

      <Cards />
      <Venture />
      <HatsAndStats />
      <InfoSection />
      {/* <Testimonial/> */}
      <Practice />
    </>
  );
};

export default WelcomeHome;
