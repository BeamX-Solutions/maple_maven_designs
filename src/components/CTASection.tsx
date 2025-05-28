import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-cover bg-center relative" style={{ 
      backgroundImage: 'url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
    }}>
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl mb-8">
            Schedule a consultation with our design experts and take the first step toward your dream space.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors text-lg font-medium group"
            >
              Book a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:+2349064013237"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded hover:bg-white/10 transition-colors text-lg font-medium"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;