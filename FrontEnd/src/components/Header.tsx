import React, { useState } from 'react';
import CreatePopup from './create/CreatePopup';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-3 md:items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Library Management title */}
          <h1 className="text-left text-xl md:text-2xl lg:text-3xl uppercase font-extrabold">Library Management</h1>

          {/* Profile icon and Hamburger menu */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Profile icon */}
            
            {/* Hamburger menu for mobile */}
            <button onClick={toggleMenu} className="focus:outline-none md:hidden">
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
        </div>

        {/* Navigation items */}
        <div className={`md:flex items-center gap-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row items-center gap-4 uppercase">
            <li className="p-2 hover:bg-secondary active:bg-primary cursor-pointer">Home</li>
            <li className="p-2 hover:bg-secondary active:bg-primary cursor-pointer" onClick={openModal}>Add Book</li>
          </ul>
        </div>

      
      </div>

      {isModalOpen && <CreatePopup onClose={closeModal} />}
    </>
  );
};

export default Header;
