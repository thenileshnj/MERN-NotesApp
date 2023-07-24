

import { Link } from 'react-router-dom';
import Logo from "../../../assets/logo.png";


import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-8 w-auto mr-2"
              src={Logo}
              alt="Logo"
            />
            <span className="text-white font-bold text-xl">My Notes App</span>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-white focus:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/login" className="text-white hover:text-white">Login</Link>
            <Link to="/register" className="text-white hover:text-white">Signup</Link>
            <Link to="/notes" onClick={()=>{}} className="text-white hover:text-white">My Notes</Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link to="/login" className="block text-white hover:text-white">Login</Link>
            <Link to="/register" className="block text-white hover:text-white mt-2">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
