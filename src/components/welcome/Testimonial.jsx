import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import clip from "../../assets/Clip path group.svg";

const testimonials = [
  {
    text: "Nilah Advisors is indispensable for Startup Founders. Not only do they guide you with a good direction, but they also give you the courage to try to solve problems together and never give up.",
    name: "Ms. Ji Hyun Chong",
    position: "CEO & Co-Founder, Gifticon",
  },
  {
    text: "Nilah Advisors is indispensable for Startup Founders. Not only do they guide you with a good direction, but they also give you the courage to try to solve problems together and never give up.",
    name: "Ms. Ji Hyun Chong",
    position: "CEO & Co-Founder, Gifticon",
  },
  {
    text: "Nilah Advisors is indispensable for Startup Founders. Not only do they guide you with a good direction, but they also give you the courage to try to solve problems together and never give up.",
    name: "Ms. Ji Hyun Chong",
    position: "CEO & Co-Founder, Gifticon",
  },
  {
    text: "Nilah Advisors is indispensable for Startup Founders. Not only do they guide you with a good direction, but they also give you the courage to try to solve problems together and never give up.",
    name: "Ms. Ji Hyun Chong",
    position: "CEO & Co-Founder, Gifticon",
  },
  {
    text: "Nilah Advisors is indispensable for Startup Founders. Not only do they guide you with a good direction, but they also give you the courage to try to solve problems together and never give up.",
    name: "Ms. Ji Hyun Chong",
    position: "CEO & Co-Founder, Gifticon",
  },
];

const ClientTestimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-1/3 text-left">
          <h2 className="text-3xl font-bold text-[#1A3261]">What Our Clients Say</h2>
        </div>

        <div className="md:w-3/4 relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={false}
            speed={600}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-20"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div
                  className={`p-6 rounded-xl shadow-md transition-all duration-500 w-full max-w-lg 
                    ${index % 2 === 0 ? "bg-[#FAE4F6]" : "bg-[#E4EAFA]"}`}
                >
                  <p className="text-gray-800 text-lg font-medium">"{testimonial.text}"</p>
                  <div className="flex gap-4 mt-4">
                    <img src={clip} className="w-14" alt="" />
                    <div>
                      <h3 className="font-semibold text-[#263A6E] mt-3">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-10 flex flex-col lg:flex-row lg:items-center w-full lg:w-[600px] xl:w-[750px] gap-5 items-end">
            <div className="w-full h-2 bg-gray-300 rounded-full relative">
              <div
                className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>
            <span className="text-gray-700 font-medium text-sm">{activeIndex + 1}/{testimonials.length}</span>
            <button
              className={`border-[1px] border-[#0B1E1C] p-3 rounded-full shadow-md transition 
                ${activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}`}
              onClick={() => swiperRef.current.swiper.slidePrev()}
              disabled={activeIndex === 0}
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              className={`border-[1px] border-[#0B1E1C] p-3 rounded-full shadow-md transition 
                ${activeIndex === testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}`}
              onClick={() => swiperRef.current.swiper.slideNext()}
              disabled={activeIndex === testimonials.length - 1}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
