import InfoSection from "./InfoSection";
import StatsSection from "./StateSection";

export default function AboutHome() {
    return (
        <>
      <section className="flex pt-[8%] pl-[8%] h-screen flex-col p-6 ">
        <h1 className="text-[59.45px] font-semibold text-[#1A3261] mb-6">
          Non Eget Lobortis Tempor 
          <br />Sodales. Tristique Est
        </h1>
        <button className="bg-gradient-to-r from-[#2347C7] to-[#39ABDC] text-white py-3 px-6 w-auto max-w-[200px] rounded-md shadow-lg hover:opacity-90 transition">
          Contact Us
        </button>
      </section>
      <StatsSection/>
      <InfoSection/>
      </>
    );
  }
  