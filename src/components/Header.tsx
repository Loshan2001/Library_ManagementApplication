import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-3">
        <div className="mb-4 md:mb-0 w-full md:w-auto">
          <h1 className="text-left text-xl md:text-2xl lg:text-3xl uppercase font-extrabold">Library Management</h1>
        </div>
        <div className="hidden md:flex mb-4 md:mb-0">
          <ul className="flex items-center gap-4 md:gap-8 uppercase">
            <li className="p-2 hover:bg-secondary active:bg-primary cursor-pointer">Home</li>
            <li className="p-2 hover:bg-secondary active:bg-primary cursor-pointer">Add Book</li>
          </ul>
        </div>
        <div className="flex md:hidden mb-4 md:mb-0">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white w-full mt-2">
            <ul className="flex flex-col items-center gap-4">
              <li className="p-2 hover:bg-secondary active:bg-primary cursor-pointer">Home</li>
              <li className="p-2 hover:bg-secondary active:bg-primary cursor-pointer">About Us</li>
            </ul>
          </div>
        )}
        <div className="flex items-center md:justify-end">
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
                <ul className="flex flex-col">
                  <li className="p-2 hover:bg-secondary active:bg-primary cursor-pointer">Profile</li>
                  <li className="p-2 hover:bg-secondary active:bg-primary cursor-pointer">Login</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
