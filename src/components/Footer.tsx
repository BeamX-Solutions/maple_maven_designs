import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6 flex items-center">
              <img
                src="/maven-logo.PNG"
                alt="Maple Maven Logo"
                className="mr-2"
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
              <span className="font-serif text-xl">Maple Maven</span>
            </div>
            <p className="mb-6 text-gray-400">
              Designing Dreams, One Space at a Time. Innovation through imagination.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/maplemavendesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/maplemavendesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/maplemavendesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-gold transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#project-management" className="text-gray-400 hover:text-gold transition-colors">Project Management</Link>
              </li>
              <li>
                <Link to="/services#renovation" className="text-gray-400 hover:text-gold transition-colors">Renovation</Link>
              </li>
              <li>
                <Link to="/services#interior-design" className="text-gray-400 hover:text-gold transition-colors">Interior Design</Link>
              </li>
              <li>
                <Link to="/services#architecture" className="text-gray-400 hover:text-gold transition-colors">Architecture</Link>
              </li>
              <li>
                <Link to="/services#3d-modeling" className="text-gray-400 hover:text-gold transition-colors">3D Graphical Modeling</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-400">
                  11 Seaman Avenue, Secretariat Road Awka
                </div>
              </li>
              <li className="flex">
                <MapPin className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-400">
                  B025, Yobe Plaza, BBA Trade Fair Lagos
                </div>
              </li>
              <li className="flex">
                <Phone className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-400">
                  +234 906 401 3237
                </div>
              </li>
              <li className="flex">
                <Mail className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-400">
                  info@maplemaven.com
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Maple Maven Design. All rights reserved.</p>
          <p className="mt-2">...INNOVATION THROUGH IMAGINATION...</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;