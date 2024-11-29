import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to = '/'>
          <div className="text-lg font-bold">MyBrand</div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/home" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/home" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link to="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
            About
          </Link>
          <Link to="/services" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
            Services
          </Link>
          <Link to="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
            Contact
          </Link>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Navbar