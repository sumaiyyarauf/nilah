import React, { useRef, useState, useEffect } from "react";
import Icon7 from "../../assets/tm.svg";
import IconLeft from "../../assets/arrow left.svg";
import IconRight from "../../assets/arrow right.svg";

const Testimonials = () => {
  const carouselRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(1);
  const totalCards = 5;

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const progressPercentage = (scrollLeft / scrollWidth) * 100;
        setProgress(progressPercentage);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(".shrink-0").offsetWidth + 20;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });

      if (count > 1) setCount((prev) => prev - 1);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(".shrink-0").offsetWidth + 20;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });

      if (count < totalCards) setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-white flex flex-col items-center w-full font-custom py-10 ">
      <div className="w-full flex flex-col items-center gap-10 lg:gap-0 lg:flex-row lg:items-center">
        <h1 className="text-[40px] lg:text-[45px] xl:text-[60px] text-center w-full lg:w-[30%] font-semibold text-[#1A3261]">
          What Our<br className="hidden lg:block 3xl:hidden" /> Clients Say
        </h1>

        <div className="relative flex w-full lg:w-[70%] overflow-hidden">
          <div
            ref={carouselRef}
            className="flex flex-row gap-5 3xl:gap-10 rounded-l-lg overflow-x-auto w-full no-scrollbar"
          >
            {Array.from({ length: totalCards }).map((_, index) => (
              <div
                key={index}
                className={`w-[300px] md:w-[450px] lg:w-[600px] 2xl:w-[1078px] p-5 md:p-10 shrink-0 rounded-lg lg:rounded-[16px] ${
                  index % 2 === 0 ? "bg-[#FAE4F6]" : "bg-[#E4EAFA]"
                }`}
              >
                <p className={`font-medium md:text-[17px] lg:text-[19px] 2xl:text-[24.74px] ${index % 2 === 0 ? "text-[#551388]" : "text-[#151388]"}`}>
                “Nilah Advisors is indispensable for Startup Founders. Not only they guide you with a good direction, but they also give you the courage to try to solve problems together and never give up. Founders who are starting a startup for the first time are recommended to start a business with their professional guidance and help.”
                </p>
                <div className="flex items-center mt-7 gap-4">
                  <img src={Icon7} alt="Icon" className="w-10 h-10" />
                  <div className={index % 2 === 0 ? "text-[#551388]" : "text-[#151388]"}>
                    <p className="font-medium text-xl">Ms. Ji Hyun Chong</p>
                    <p>CEO & Co-Founder, Giftiicon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row lg:items-center w-full lg:w-[600px] xl:w-[750px] gap-5 items-end">
        <div className="w-full relative">
          <div className="w-full h-[3px] bg-gray-300 rounded-lg"></div>
          <div
            style={{ width: `${progress}%` }}
            className="h-[3px] bg-[#254FC9] rounded-lg absolute top-0 left-0 transition-all duration-500"
          ></div>
        </div>
        <div className="flex gap-5 items-center">
          <div>{count}/{totalCards}</div>
          <button onClick={scrollLeft} disabled={count === 1}>
            <img src={IconLeft} alt="Scroll Left" className="h-15" />
          </button>
          <button onClick={scrollRight} disabled={count === totalCards}>
            <img src={IconRight} alt="Scroll Right" className="h-15" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
