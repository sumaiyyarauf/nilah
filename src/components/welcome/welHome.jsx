import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Venture from "./Venture";
import Testimonials from "./Testimonials";
import HatsAndStats from "./HatsAndStats";

const words = ["STARTUPS", "BUSINESS", "LEADERS"];

const WelcomeHome = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const imageRef = useRef(null);

  useEffect(() => {
    // Rotate Image using GSAP
    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 40, // Slower rotation (20s per full turn)
      repeat: -1,
      ease: "linear",
    });

    // Text Changing Effect
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

      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          ref={imageRef} // Attach the ref for GSAP animation
          src="https://s3-alpha-sig.figma.com/img/53c4/2909/24861e667e3caafebf09e0e023a6fdf1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SsvHT1VqIchf3OQ232kpj3e8j8ReNUgL2DWekxG-PYUrUFdlB5bE6eqf8~6HKWOukk5yCYTKBp-EgoRwMPr5a-ICKMEwjDpstI-DFwcHptRIm~yM0Hq-hong7KNLWOgAtoE8bUMvthy1shf8ISgsFy4IWo9jOcpcGiVPHfuyzR6SufSZ4871dSi1GGHfV0UZeHQ28UxGW4g4Gt9ZYCPhwQEy8x6TdHawNBEUXqVlIdqmsQsI2jxErUSR0f3a8e9shpZatw6rsM-OBNEPg-b8H0a5Rk8wq0Zcda5o1idvQMM1-Bia7yj3Z2wp0ooRRCblJzjhqP96f64~hCTYRIDMYw__"
          alt="Welcome Home"
          className="w-full "
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
