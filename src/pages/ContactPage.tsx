import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="pt-40 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto my-6"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Get in touch with our team to discuss your project or schedule a consultation.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">Get in Touch</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="project-management">Project Management</option>
                    <option value="renovation">Renovation</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="exterior-design">Exterior Design</option>
                    <option value="architecture">Architecture</option>
                    <option value="building-finishing">Building Finishing</option>
                    <option value="3d-modeling">3D Graphical Modeling</option>
                    <option value="retail-decor">Retail Decor and Furnishings</option>
                    <option value="consultation">Building Project Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors text-lg font-medium w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">Our Offices</h3>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-serif text-xl font-semibold mb-4">Awka Office</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        11 Seaman Avenue, Secretariat Road Awka
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        +234 906 401 3237
                      </p>
                    <div className="flex items-start">
                      <Clock className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday: 10am - 2pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-serif text-xl font-semibold mb-4">Lagos Office</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        B025, Yobe Plaza, Balogun Business Association (BBA) Trade Fair Lagos
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        +234 906 401 3237
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday: 10am - 2pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96">
              {/* Google Maps Embed would go here */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Map loading...</p>
                {/* In a real implementation, this would be replaced with an actual Google Maps embed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">
                  We primarily serve Lagos, Abuja, and surrounding areas, but we're available for projects throughout Nigeria and can discuss international projects as well.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">What is your typical process for a new client?</h3>
                <p className="text-gray-600">
                  We begin with an initial consultation to understand your needs, then proceed with concept development, detailed planning, implementation, and final handover. Each step involves close collaboration with you.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">What is the typical timeline for a project?</h3>
                <p className="text-gray-600">
                  Project timelines vary based on scope and complexity. Small renovations might take 4-6 weeks, while larger projects can take several months. We'll provide a detailed timeline during the planning phase.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Do you offer virtual consultations?</h3>
                <p className="text-gray-600">
                  Yes, we offer virtual consultations for clients who prefer remote meetings or are located outside our service area. These can be arranged via video call at your convenience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">How are your services priced?</h3>
                <p className="text-gray-600">
                  Our pricing varies based on project scope, size, and specific services required. We offer transparent pricing and will provide a detailed quote after the initial consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default ContactPage;