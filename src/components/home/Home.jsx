import React from 'react';
import Image from "../../assets/Subtract.svg";
import Image2 from "../../assets/Vector 16.png";
import Image3 from "../../assets/Vector 17.svg";
import Contact from './Contact';
import FAQ from './FAQ';

const Home = () => {
  return (
    <>
    <div className="flex flex-col h-screen items-center justify-center text-center p-4">
      <h1 className="text-[36px] font-Inter text-[#6C83B2]  mb-4">Expand your</h1>
        <img src={Image} alt="Decoration" className="w-auto " />

      <div className="relative mt-[-10px] w-auto">
        <img src={Image3} alt="Decoration 3" className="w-auto" />
        <img src={Image2} alt="Decoration 2" className="absolute top-0 left-0 w-auto" />
      </div>
      

    </div>


    <Contact/>
      <FAQ/>



    </>
  );
};

export default Home;
