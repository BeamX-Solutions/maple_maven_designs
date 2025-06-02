import React from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6">
              Maple Maven Design is a premier interior design and architectural firm committed to creating extraordinary spaces that inspire and elevate everyday living. With our innovative approach and meticulous attention to detail, we transform environments into functional works of art.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our team of expert designers and architects brings a wealth of experience and creativity to every project. We believe that great design should not only be beautiful but should also enhance your life and reflect your unique personality and needs.
            </p>
            
            <p className="text-gray-600 mb-8">
              From concept to completion, we guide our clients through every step of the design process, ensuring a seamless and enjoyable experience that results in spaces that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Award className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Quality Design</h4>
                  <p className="text-sm text-gray-600">Award-winning designs</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Users className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Expert Team</h4>
                  <p className="text-sm text-gray-600">Professional designers</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Heart className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Client-Focused</h4>
                  <p className="text-sm text-gray-600">Your vision, our priority</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <Sparkles className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-gray-600">Cutting-edge solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg" 
              alt="Interior Designer at Work" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            
            <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 md:translate-y-1/3 md:translate-x-1/3 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-gold">10+</h3>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div className="w-full h-0.5 bg-gray-200 my-4"></div>
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-gold">500+</h3>
                <p className="text-gray-700">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
        

        {/* Design Process Section 
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-serif font-bold mb-4">Our Design Process</h3>
            <p className="text-gray-600">
              We follow a structured approach to ensure your vision is realized to perfection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h4 className="font-serif text-xl font-semibold mt-6 mb-3">Consultation</h4>
              <p className="text-gray-600">
                We meet to understand your vision, needs, preferences, and budget constraints.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h4 className="font-serif text-xl font-semibold mt-6 mb-3">Concept Development</h4>
              <p className="text-gray-600">
                Our designers create detailed concepts and 3D visualizations of your space.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h4 className="font-serif text-xl font-semibold mt-6 mb-3">Implementation</h4>
              <p className="text-gray-600">
                We manage the entire execution process, from sourcing materials to installation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h4 className="font-serif text-xl font-semibold mt-6 mb-3">Final Reveal</h4>
              <p className="text-gray-600">
                We present your transformed space and ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;