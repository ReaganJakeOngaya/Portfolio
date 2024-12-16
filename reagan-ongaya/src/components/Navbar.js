import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation(); // Get the current route

  // Handle theme change
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with id '${id}' not found.`);
    }
    // Close the mobile menu after clicking a link
    closeMobileMenu();
  };

  // Define the navigation links for each route
  const links =
    location.pathname === "/blog"
      ? [
          { name: "Home", path: "/" },
          { name: "Categories", id: "categories" },
          { name: "Featured Posts", id: "featuredposts" },
          { name: "Recent Posts", id: "recentposts" },
          { name: "Newsletter", id: "newsletter" },
        ]
      : [
          { name: "Home", id: "home" },
          { name: "About", id: "about" },
          { name: "Projects", id: "projects" },
          { name: "Services", id: "services" },
          { name: "Contact", id: "contact" },
          { name: "Blog", path: "/blog" },
        ];

  return (
    <nav className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white py-2 px-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)" }}
          className="text-2xl font-extrabold text-gray-300"
        >
          <Link to="/">Reagan Jake</Link>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex space-x-6 items-center ${
            isMobileMenuOpen
              ? "block absolute top-full left-0 w-full bg-blue-500"
              : "hidden md:block"
          }`}
        >
          {links.map((link, index) =>
            link.id ? (
              <a
                key={index}
                href={`#${link.id}`}
                className="block md:inline hover:text-gray-400 font-bold"
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={index}
                to={link.path}
                className="block md:inline hover:text-gray-400 font-bold"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            )
          )}
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
      </div>
    </nav>
  );
};

export default Navbar;


