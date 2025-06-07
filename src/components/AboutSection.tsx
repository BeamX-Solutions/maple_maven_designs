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
                <h3 className="font-serif text-3xl font-bold text-gold">5+</h3>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div className="w-full h-0.5 bg-gray-200 my-4"></div>
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-gold">30+</h3>
                <p className="text-gray-700">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;