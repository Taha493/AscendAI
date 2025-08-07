/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Mail} from 'lucide-react';
import Logo from './assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] pt-20 pb-8 border-t border-blue-300">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="space-y-4">
            <Link to="/" className="text-white text-2xl font-bold">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-10 w-auto transform scale-150 object-cover"
            />
            </Link>
            <p className="text-gray-400 text-sm">
            Ascend to New Heights with AI-Driven Solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/integration" className="text-gray-400 hover:text-white transition-colors">Integration</Link></li>
              {/* <li><Link to="/demo" className="text-gray-400 hover:text-white transition-colors">AI Demo Call</Link></li> */}
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Info</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-16 pt-8">
          <p className="text-gray-400 text-sm">
            © 2025 AscendAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;