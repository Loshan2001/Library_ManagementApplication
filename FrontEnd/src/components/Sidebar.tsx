import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative">
        {/* Menu icon */}
        <button
          className="block md:hidden p-2 bg-black text-white hover:bg-secondary focus:outline-none"
          onClick={toggleMenu}
        >
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
              d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
            />
          </svg>
        </button>

        {/* Sidebar list */}
        <div
          className={`md:flex md:flex-col md:w-auto md:h-auto md:p-2 md:bg-white md:relative md:gap-9 transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-2 md:gap-4 p-2 md:p-0">
            <li className="p-2 bg-primary hover:bg-secondary uppercase w-full">Fairy Tale</li>
            <li className="p-2 bg-primary hover:bg-secondary uppercase w-full">Fiction</li>
            <li className="p-2 bg-primary hover:bg-secondary uppercase w-full">Fantasy</li>
            <li className="p-2 bg-primary hover:bg-secondary uppercase w-full">Comics</li>
            <li className="p-2 bg-primary hover:bg-secondary uppercase w-full">Mystery</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
