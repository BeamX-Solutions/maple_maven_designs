import React from 'react';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <div className="pt-40 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-center">Our Services</h1>
          <div className="w-24 h-1 bg-gold mx-auto my-6"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            We offer a comprehensive range of design and architectural services to transform your spaces into extraordinary environments.
          </p>
        </div>
      </div>
      
      <div className="bg-white">
        <ServicesSection />
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" 
                alt="Our Process" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Our Service Process</h2>
              <div className="w-24 h-1 bg-gold mb-6"></div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Initial Consultation</h4>
                    <p className="text-gray-600">
                      We begin with a thorough consultation to understand your vision, requirements, and budget. This helps us align our services with your specific needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Concept Development</h4>
                    <p className="text-gray-600">
                      Our team creates detailed design concepts and 3D visualizations to bring your ideas to life. We refine these based on your feedback.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Detailed Planning</h4>
                    <p className="text-gray-600">
                      We develop comprehensive plans, including technical drawings, material selections, and project timelines for a seamless execution.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Implementation</h4>
                    <p className="text-gray-600">
                      Our experienced team manages the entire implementation process, from sourcing materials to coordinating with contractors and vendors.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                      5
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Final Handover</h4>
                    <p className="text-gray-600">
                      We conduct a final review to ensure every detail meets our high standards before presenting your transformed space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default ServicesPage;