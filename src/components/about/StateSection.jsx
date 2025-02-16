import React from "react";
import image1 from "../../assets/image 1.svg";
import image2 from "../../assets/image 2.svg";
import image3 from "../../assets/image 3.svg";
import image4 from "../../assets/image 4.svg";
import image5 from "../../assets/image 5.svg";
import logo1 from "../../assets/1.svg";
import logo2 from "../../assets/4.svg";

const StatsSection = () => {
  return (
    <section className="flex flex-col gap-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 relative">

      <div className="bg-[linear-gradient(279.96deg,_rgba(236,242,249,0.9)_-4.54%,_rgba(239,236,250,0.801)_95.29%),_linear-gradient(0deg,_rgba(255,255,255,0.2),_rgba(255,255,255,0.2))] p-6 sm:p-10 rounded-[30px] sm:rounded-[45px] mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1A3261] font-semibold leading-tight">
          Founded in June 2020,<br /> loeagud hjasguifig iionb
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#38587E] pt-4 sm:pt-6 pb-2">
          Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum. Non at eget nullam lacus aliquam lectus nulla vulputate mattis. Lorem molestie.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 w-full max-w-6xl mx-auto">
        
        <div className="relative flex flex-col gap-6 lg:w-[65%] p-4">
          <div className="p-6 sm:p-8 md:p-10 rounded-[30px] sm:rounded-[50px] shadow-xl border mt-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1A3261] font-semibold leading-snug">
              Tortor Turpis Ante <br /> Hendrerit Cras. Ipsum.
            </h2>

            <div className="pt-6 sm:pt-8 flex flex-wrap md:justify-center lg:justify-between gap-8">
              <img src={image1} alt="Logo 1" className="w-10 sm:w-12 md:w-16 lg:w-45 h-auto" />
              <img src={image2} alt="Logo 2" className="w-10 sm:w-12 md:w-16 lg:w-45 h-auto" />
              <img src={image3} alt="Logo 3" className="w-10 sm:w-12 md:w-16 lg:w-45 h-auto" />
              <img src={image4} alt="Logo 4" className="w-10 sm:w-12 md:w-16 lg:w-45 h-auto" />
              <img src={image5} alt="Logo 5" className="w-10 sm:w-12 md:w-16 lg:w-45 h-auto" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30%] flex flex-col items-center">
          <div className="flex flex-col gap-4 sm:gap-6 text-center rounded-[30px] sm:rounded-[45px] p-4 sm:p-6 shadow-xl border w-full max-w-[350px]">
            <div className="flex gap-8 bg-[#F1F5FB] p-4 rounded-xl items-center">
              <img src={logo1} alt="Icon 1" className="w-10 h-10" />
              <p className="text-3xl text-[#1A3261] font-bold">25,000+</p>
            </div>
           <div className="flex gap-8 bg-[#F1F5FB] p-4 rounded-xl items-center">
             <img src={logo2} alt="Icon 2" className="w-10 h-10" />
             <p className="text-3xl text-[#1A3261] font-bold">350,000+</p>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default StatsSection;
