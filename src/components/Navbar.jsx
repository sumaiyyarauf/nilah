import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">
          <Link to="/welcomehome">NILAH <br /> ADVISORS</Link>
        </h1>

        <ul className="hidden md:flex text-[#263A6E] md:text-xl space-x-6">
          <li><Link to="/abthome">About Us</Link></li>
          <li><Link to="/">Contact Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/blog">Blog</Link></li>
         
        </ul>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col text-center text-lg space-y-4 py-4">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/abthome" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
