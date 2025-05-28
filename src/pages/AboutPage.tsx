import React from 'react';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="pt-40 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">About Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto my-6"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Learn more about Maple Maven Design and our passion for creating extraordinary spaces.
          </p>
        </div>
      </div>
      
      <AboutSection />
      
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our talented team of designers and architects brings expertise and creativity to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5324913/pexels-photo-5324913.jpeg" 
                  alt="Sarah Johnson" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-gold mb-3">Founder & Principal Designer</p>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience, Sarah leads our team with a passion for creating functional, beautiful spaces that enhance daily living.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg" 
                  alt="Michael Chen" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-gold mb-3">Lead Architect</p>
                <p className="text-gray-600 mb-4">
                  Michael specializes in creating innovative architectural solutions that blend form and function for both residential and commercial projects.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg" 
                  alt="Olivia Martinez" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-1">Olivia Martinez</h3>
                <p className="text-gold mb-3">Interior Design Specialist</p>
                <p className="text-gray-600 mb-4">
                  Olivia brings creativity and attention to detail to every project, with expertise in color theory and spatial planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default AboutPage;