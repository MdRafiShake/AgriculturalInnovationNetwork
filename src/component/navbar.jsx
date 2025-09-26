import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#8FA31E] w-full h-[80px] lg:h-[100px]  2xl:max-w-[2000px] mx-auto flex items-center px-4 shadow-lg shadow-[#556B2F]/50">
      {/* Logo + Title */}
      <Link to="/">
      <div className="logo-container flex items-center cursor-pointer text-white font-bold text-xl lg:text-2xl w-[200px] lg:w-[300px]">
        <span>
          <img
            src="../public/ain-logo-01.png"
            alt="Logo"
            className="w-[70px] lg:w-[90px]"
          />
        </span>
        <span className="ml-2 transition-transform duration-300 hover:scale-105">
          Harvesting Friend
        </span>
      </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 ml-auto text-white font-semibold lg:text-lg">
        <Link
          to="/"
          className="relative hover:text-[#2F4F1F] transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 
          after:-bottom-1 after:bg-white after:transition-all after:duration-300 
          hover:after:w-full"
        >
          Home
        </Link>
        <Link
          to="/product-list"
          className="relative hover:text-[#2F4F1F] transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 
          after:-bottom-1 after:bg-white after:transition-all after:duration-300 
          hover:after:w-full"
        >
          Marketplace
        </Link>
        <Link
          to="/blogs"
          className="relative hover:text-[#2F4F1F] transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 
          after:-bottom-1 after:bg-white after:transition-all after:duration-300 
          hover:after:w-full"
        >
          Harvesting Blogs
        </Link>
        <Link
          to="/diary"
          className="relative hover:text-[#2F4F1F] transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 
          after:-bottom-1 after:bg-white after:transition-all after:duration-300 
          hover:after:w-full"
        >
          Farm Diary
        </Link>
      </div>

      {/* Login button (desktop) */}
      <Link to="/login">
        <button className="hidden md:block bg-[#556B2F] border-none text-white font-bold px-4 py-2 lg:px-6 lg:py-3 rounded transition duration-300 hover:bg-[#6B8E23] hover:scale-105 cursor-pointer ml-4">
          Log In
        </button></Link>

      {/* Mobile Hamburger Button */}
      <div className="ml-auto lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white transition-transform duration-300 hover:scale-110"
        >
          {!isOpen ? (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          ) : (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[80px] right-0 w-[200px] bg-[#8FA31E] flex flex-col items-center py-4 space-y-4 lg:hidden shadow-lg shadow-[#556B2F]/50 animate-slideDown">
          <Link
            to="/"
            className="text-white font-semibold hover:text-[#2F4F1F] transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            to="/product-list"
            className="text-white font-semibold hover:text-[#2F4F1F] transition-colors duration-300"
          >
            Marketplace
          </Link>
          <Link
            to="/blogs"
            className="text-white font-semibold hover:text-[#2F4F1F] transition-colors duration-300"
          >
            Harvesting Tips
          </Link>
          <Link
            to="/diary"
            className="text-white font-semibold hover:text-[#2F4F1F] transition-colors duration-300"
          >
            Farm Diary
          </Link>
          <Link to="/login">
            <button className="bg-[#556B2F] border-none text-white font-bold px-4 py-2 rounded transition duration-300 hover:bg-[#6B8E23] hover:scale-105 cursor-pointer">
              Log In
            </button></Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
