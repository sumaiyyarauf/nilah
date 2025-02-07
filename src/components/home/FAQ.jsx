import React, { useState } from "react";
import up from "../../assets/arrow-up.svg";
import down from "../../assets/arrow-down.svg";

const FAQ = () => {
  // State for toggling each question section
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the section
  };

  return (
    <div className="p-6 px-[15%] min-h-screen bg-[#F4FBFF]">
      <h1 className="text-4xl font-medium font-Inter text-[#263A6E] text-center mb-8">
        Frequently Asked Questions
      </h1>

      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`mb-4 ${openIndex === index ? "bg-white" : "bg-blue-200"}`}
        >
          <div
            className="flex justify-between items-center cursor-pointer p-4 rounded-md"
            onClick={() => toggleSection(index)}
          >
            <h2 className="text-xl font-semibold text-gray-700">
              Sagittis odio eget tempus volutpat. Ullamcorper
            </h2>
            <span className="text-blue-600">
              {openIndex === index ? (
                <img src={up} alt="Up Arrow" />
              ) : (
                <img src={down} alt="Down Arrow" />
              )}
            </span>
          </div>
          {openIndex === index && (
            <div className="p-4 bg-white rounded-md mt-2 transition-all duration-300 ease-in-out">
              <p className="text-gray-600 bg-white">
                Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna
                feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere
                fringilla tellus interdum. Non at eget nullam lacus aliquam lectus
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
