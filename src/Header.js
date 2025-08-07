import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import Logo from './assets/logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Integrations', path: '/integration' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`bg-[#0a1f44] border-b border-blue-300 relative z-50`}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-10 w-auto transform scale-150 object-cover"
            />
          </Link>


            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 mx-auto">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-400 hover:text-white text-lg transition-colors ${
                    location.pathname === item.path ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Us Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="text-white bg-gray-700 py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 lg:hidden"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <div className="space-y-2">
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                  </div>
                )}
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Full-screen Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a1f44] z-40 transition-transform duration-300 lg:hidden ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 h-full flex flex-col pt-20">
          {/* Menu Items */}
          <div className="flex-grow flex flex-col justify-center items-center space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleMenuItemClick}
                className={`text-gray-400 hover:text-white text-lg transition-colors ${
                  location.pathname === item.path ? 'text-white' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="pb-20">
            <Link 
              to="/pricing"
              onClick={handleMenuItemClick}
              className="block w-full bg-gray-800 text-white py-4 rounded-lg hover:bg-gray-700 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
