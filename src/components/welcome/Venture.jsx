import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../assets/tree1.svg";
import image2 from "../../assets/tree2.svg";
import image3 from "../../assets/tree3.svg";
import animation from "../../assets/Animation.gif";
import blur from "../../assets/Frame blur.png";
import image from "../../assets/Venture.svg";

gsap.registerPlugin(ScrollTrigger);

const Venture = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.to(headingRef.current, {
      y: 120, 
      ease: "none",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
        end: "bottom top",
        scrub: 4,
      },
    });
  }, []);

  return (
    <>
    <div className="">
      <img src={image}  alt="" />
    </div>
      <div className="relative hidden flex justify-center min-h-screen bg-[#F4FBFF] overflow-hidden">
        <img
          src={animation}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
        />
        <img src={image1} alt="Center" className="absolute top-1/3 w-[750px] z-10" />

        <h1
          ref={headingRef}
          className="relative text-[100px] px-40 font-bold text-[#1A3261] top-0 leading-[120px] z-20"
        >
          Venture into new frontiers
        </h1>

        <img
          src={image2}
          alt="Left"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[670px] z-30"
        />

        <img
          src={image3}
          alt="Right"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[670px] z-30"
        />
        <div className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none z-[50]">
        <img src={blur} alt="Blur Effect" className="w-full h-full object-cover " />
        </div>
      </div>
    </>
  );
};

export default Venture;
