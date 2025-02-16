import React from "react";
import { Link } from "react-router-dom";
import linkdin from "../assets/linkdin.svg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import twiter from "../assets/twiter.svg";

const Footer = () => {
  return (
    <footer className="text-[#263A6E] py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-xl text-black font-bold">
            <Link to="/welcomehome">NILAH <br /> ADVISORS</Link>
          </h1>
          <p className="mt-2 text-sm md:text-base w-[60%]">
            Scelerisque nisl egestas ultricies mattis egestas porttitor ullamcorper lorem.
          </p>
        </div>
         
        <div>

        <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 text-[20px] text-center md:text-right">
          <li><Link to="/" className="text-[#263A6E]">Home</Link></li>
          <li><Link to="/abthome" className="text-[#263A6E]">About</Link></li>
          <li><Link to="/services" className="text-[#263A6E]">Services</Link></li>
          <li><Link to="/gallery" className="text-[#263A6E]">Gallery</Link></li>
          <li><Link to="/blog" className="text-[#263A6E]">Blog</Link></li>
          <li><Link to="/contact" className="text-[#263A6E]">Contact</Link></li>
        </ul>

        <div className="flex justify-end space-x-8 mt-4 md:mt-8 ">
          <a href="#" className="hover:opacity-75"><img src={linkdin} alt="LinkedIn" className="w-6 h-6" /></a>
          <a href="#" className="hover:opacity-75"><img src={facebook} alt="Facebook" className="w-6 h-6" /></a>
          <a href="#" className="hover:opacity-75"><img src={insta} alt="Instagram" className="w-6 h-6" /></a>
          <a href="#" className="hover:opacity-75"><img src={twiter} alt="Twitter" className="w-6 h-6" /></a>
        </div>
       </div>

      </div>

    </footer>
  );
};

export default Footer;
