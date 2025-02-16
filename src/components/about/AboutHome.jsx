import InfoSection from "./InfoSection";
import StatsSection from "./StateSection";
import rectangle from "../../assets/Rectangle 1.svg"

export default function AboutHome() {
    return (
        <>
      <section className="flex flex-col justify-center items-start min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[59.45px] 2xl:text-[100px] font-semibold text-[#1A3261] mb-6 leading-tight">
             Non Eget Lobortis Tempor <br /> Sodales. Tristique Est
          </h1>

          <button className="bg-gradient-to-r from-[#2347C7] to-[#39ABDC] text-white text-sm sm:text-base md:text-lg lg:text-xl py-2 sm:py-3 px-5 sm:px-6 w-auto lg:w-[200px] xl:w-[300px] rounded-md shadow-lg hover:opacity-90 transition">
            Contact Us
          </button>
      </section>

      <StatsSection/>
      <InfoSection/>
      </>
    );
  }
  