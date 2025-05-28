import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8">
            Ready to transform your space? Reach out to our team to start your project.
          </p>
          <div className="mb-12">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors text-lg font-medium"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://facebook.com/maplemavendesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gold text-white p-3 rounded-full hover:bg-gold/90 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/maplemavendesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gold text-white p-3 rounded-full hover:bg-gold/90 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/maplemavendesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gold text-white p-3 rounded-full hover:bg-gold/90 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;