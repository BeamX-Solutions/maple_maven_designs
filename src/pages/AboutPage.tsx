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
                  src="/first-person1.jpg" 
                  alt="Emeka Dioha" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-1">Emeka Dioha</h3>
                <p className="text-gold mb-3">Creative Director & Project Manager</p>
                <p className="text-gray-600 mb-4">
                  Emeka leads our team with a passion for creating functional, beautiful spaces that enhance daily living.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="/second-person.jpg" 
                  alt="Obinna Nweke" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-1">Obinna Nweke</h3>
                <p className="text-gold mb-3">Client Services</p>
                <p className="text-gray-600 mb-4">
                  Obinna ensures a smooth and responsive client experience by managing communications, expectations, and support from initial inquiry to project completion.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="/third-person.jpg" 
                  alt="Charles Dioha"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-1">Barr. Charles Dioha</h3>
                <p className="text-gold mb-3">Legal Advisor</p>
                <p className="text-gray-600 mb-4">
                  Charles brings a wealth of knowledge in legal matters, ensuring that all our projects comply with regulations and standards.
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