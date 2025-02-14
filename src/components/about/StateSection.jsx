import React from "react";
import image1 from "../../assets/image 1.svg"
import image2 from "../../assets/image 2.svg"
import image3 from "../../assets/image 3.svg"
import image4 from "../../assets/image 4.svg"
import image5 from "../../assets/image 5.svg"
import logo1 from "../../assets/1.svg"
import logo2 from "../../assets/4.svg"

const StatsSection = () => {
  return (
    <section className="flex flex-col gap-10 p-10 relative">

      <div className=" bg-[linear-gradient(279.96deg,_rgba(236,242,249,0.9)_-4.54%,_rgba(239,236,250,0.801)_95.29%),_linear-gradient(0deg,_rgba(255,255,255,0.2),_rgba(255,255,255,0.2))] p-10  rounded-[45px] mx-[50px]">
        <h2 className="text-5xl text-[#1A3261] font-semibold">
          Founded in June 2020,<br /> loeagud hjasguifig iionb
        </h2>
        <p className="text-[#38587E] pt-[6%] pb-[2%] ">
          Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum. Non at eget nullam lacus aliquam lectus nulla vulputate mattis. Lorem molestie.
        </p>
      </div>


      <div className="flex flex-col lg:flex-row mx-[50px] justify-between items-center gap-6 w-full">

         <div className="relative flex gap-6 lg:w-1/2">
            <div className="relative p-8 rounded-[50px] shadow-xl border mt-6">
              <h2 className="text-4xl text-[#1A3261] font-semibold relative z-10">
                   Tortor Turpis Ante <br /> Hendrerit Cras. Ipsum.
              </h2>

             <div className=" pt-8 flex flex-wrap gap-4">
              <img src={image1} alt="Logo 1" className="w-12 h-12" />
              <img src={image2} alt="Logo 2" className="w-12 h-12" />
              <img src={image3} alt="Logo 3" className="w-12 h-12" />
              <img src={image4} alt="Logo 4" className="w-12 h-12" />
              <img src={image5} alt="Logo 5" className="w-12 h-12" />
            </div>
           </div>
         </div>

        <div className="lg:w-1/2 flex flex-col items-center gap-6">
          <div className="flex flex-col gap-6 text-center rounded-[45px] p-6 shadow-xl border">
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