import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-gray-900/80 py-4' // Changed from bg-transparent to bg-gray-900/80
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold flex items-center">
              <img
                src="/maven-logo.PNG"
                alt="Maple Maven Logo"
                className={`mr-2 ${scrolled ? 'filter-gold' : 'filter-white'}`}
                style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: scrolled ? '#ffffff' : 'transparent',
                  transition: 'background-color 0.3s ease',
                  padding: '2px',
                }}
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium flex items-center px-4 py-2 rounded transition-all duration-300 group ${
                scrolled 
                  ? 'bg-white text-gold hover:bg-gray-100' 
                  : 'bg-gold text-white hover:bg-gold/90'
              }`}
            >
              Contact Us
              <ArrowUpRight 
                size={18} 
                className={`ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  scrolled ? 'text-gold' : 'text-white'
                }`}
              />
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className={`transition-colors ${
                scrolled ? 'text-gray-800 hover:text-gold' : 'text-white hover:text-gold'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="font-medium py-2 hover:text-gold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="font-medium py-2 hover:text-gold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className="font-medium py-2 hover:text-gold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/about" 
            className="font-medium py-2 hover:text-gold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="font-medium py-2 text-gold hover:text-gold/90 transition-colors flex items-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
            <ArrowUpRight size={18} className="ml-2 text-gold" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;