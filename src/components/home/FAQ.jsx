import React, { useState } from "react";
import up from "../../assets/arrow-up.svg";
import down from "../../assets/arrow-down.svg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 px-[15%] min-h-screen bg-[#F4FBFF]">
      <h1 className="text-4xl font-medium font-Inter text-[#263A6E] text-center mb-8">
        Frequently Asked Questions
      </h1>

      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`mb-4 rounded-lg ${openIndex === index ? "bg-white shadow-md" : "bg-[#ECF5FF]"}`}
        >
          <div
            className="flex justify-between items-center cursor-pointer p-4 rounded-lg"
            onClick={() => toggleSection(index)}
          >
            <h2 className="text-xl font-semibold text-[#38587E]">
              Sagittis odio eget tempus volutpat. Ullamcorper
            </h2>
            <span className="text-blue-600 flex items-center">
              <img
                src={openIndex === index ? up : down}
                alt="Toggle Arrow"
                className="w-5 h-5 transition-transform duration-300"
              />
            </span>
          </div>
          {openIndex === index && (
            <div className="p-4 bg-white rounded-lg mt-2 transition-all duration-300 ease-in-out">
              <p className="text-[#38587E]">
                Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum. Non at eget nullam lacus aliquam lectus
               nulla vulputate mattis. Lorem molestie.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
