import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Theme state

  // Handle theme change
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with id '${id}' not found.`);
    }
    // Close the mobile menu after clicking a link
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white py-2 px-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)" }}
          className="text-2xl font-extrabold text-gray-300"
        >
          <a href="/">Reagan Jake</a>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex space-x-6 items-center ${
            isMobileMenuOpen
              ? "block absolute top-full left-0 w-full bg-blue-500"
              : "hidden md:block"
          }`}
        >
          <a
            href="#home"
            className="block md:inline hover:text-gray-400 font-bold"
            onClick={(e) => handleLinkClick(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="block md:inline hover:text-gray-400 font-bold"
            onClick={(e) => handleLinkClick(e, "about")}
          >
            About
          </a>
          <a
            href="#projects"
            className="block md:inline hover:text-gray-400 font-bold"
            onClick={(e) => handleLinkClick(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#services"
            className="block md:inline hover:text-gray-400 font-bold"
            onClick={(e) => handleLinkClick(e, "services")}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block md:inline hover:text-gray-400 font-bold"
            onClick={(e) => handleLinkClick(e, "contact")}
          >
            Contact
          </a>
          <a
            href="/blog"
            className="block md:inline hover:text-gray-400 font-bold"
          >
            Blog
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Theme Toggle Button */}
        <button
          className="ml-4 p-2 rounded-full hover:bg-blue-700 focus:outline-none br-1"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          {theme === "light" ? "🌞" : "🌙"}
        </button>
        {/* <button className="p-1 rounded hover:bg-blue-900 border-gray-200 hover:border-2 focus:outline-none br-1">
          Join
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;

