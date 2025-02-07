import React from "react";

const testimonials = [
  {
    id: 1,
    heading: "We’re Reliable",
    text: "Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum.",
  },
  {
    id: 2,
    heading: "We’re Fast",
    text: "Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum.",
  },
  {
    id: 3,
    heading: "We’re Focused",
    text: "Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum.",
  },
];

const Testimonials = () => {
  return (
    <div className=" py-16 px-8 flex justify-center">
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-[#1A3261] mb-3">
              {testimonial.heading}
            </h3>
            <p className="text-[#38587E]">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
