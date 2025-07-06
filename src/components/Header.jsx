import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#08213f] text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        {/* Logo Image */}
        <img
         
        />
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-gray-200">
            DevOps Engineer 
          </Link>
        </div>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`lg:flex flex-col lg:flex-row ${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block absolute lg:static bg-[#08213f] lg:bg-transparent w-full h-full top-0 left-0 lg:flex-row justify-center items-center transition-all duration-300 ease-in-out`}
      >
        {/* Menu List with background on mobile */}
        <ul
          className={`flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg ${
            isMenuOpen ? 'bg-[#08213f] justify-center items-center py-6' : ''
          } transition-all duration-300 ease-in-out`}
        >
          <li>
            <Link
              to="/"
              className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/achievements"
              className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
