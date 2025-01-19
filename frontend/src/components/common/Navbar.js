import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height here */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src="/assets/rgpv.png" alt="Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8"> {/* Increased space between items */}
                <NavLink to="/" fontSize="text-lg">Home</NavLink>
                <NavLink to="/about" fontSize="text-lg">Certificates</NavLink>
                <NavLink to="/contact" fontSize="text-lg">Contact Us</NavLink>
                <NavLink to="/announcement" fontSize="text-lg">Announcement</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink to="/faculty-login" className="ml-4" fontSize="text-lg">Teacher-LogIn</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className=" flex items-center md:ml-6">
              <NavLink to="/login" fontSize="text-lg">Student-LogIn</NavLink>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-200 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" mobile fontSize="text-lg">Home</NavLink>
            <NavLink to="/about" mobile fontSize="text-lg">About</NavLink>
            <NavLink to="/contact" mobile fontSize="text-lg">Contact Us</NavLink>
            <NavLink to="/logout" mobile fontSize="text-lg">Logout</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, mobile = false, fontSize = "text-sm" }) => {
  const baseClasses = "text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md font-medium";
  const mobileClasses = "block text-base font-medium";
  const desktopClasses = `text-sm ${fontSize}`;

  return (
    <Link
      to={to}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
