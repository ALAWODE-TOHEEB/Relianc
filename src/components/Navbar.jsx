import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left side item */}
        <div>
          <a href="/" className="text-white font-bold text-xl">
            <img src={logo} alt="" className="w-32" />
          </a>
        </div>
        {/* Right side items */}
        <div className=" hidden md:flex items-center">
          <a href="/" className="text-gray-950 font-bold px-3 py-2  hover:text-blue-600 hover:underline hover:transition hover:ease-in-out hover:duration-700">
            Home
          </a>
          <a href="/" className="text-gray-950 font-bold px-3 py-2 hover:text-blue-600 hover:underline hover:transition hover:ease-in-out hover:duration-700">
            About Us
          </a>
          <a href="/" className="text-gray-950 font-bold px-3 py-2 hover:text-blue-600 hover:underline hover:transition hover:ease-in-out hover:duration-700">
            Services
          </a>
          <a href="/" className="text-gray-950 font-bold px-3 py-2 hover:text-blue-600 hover:underline hover:transition hover:ease-in-out hover:duration-700">
            Blogs
          </a>
          <a href="/" className="text-gray-950 font-bold px-3 py-2 hover:text-blue-600 hover:underline hover:transition hover:ease-in-out hover:duration-700">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
