import React, { useState } from 'react';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const serviceProcess = [
    { id: 1, title: "Connect With Us", description: "Start by contacting us via DM, WhatsApp, or call to discuss your space and provide key visual details." },
    { id: 2, title: "Have a Budget", description: "Share your budget post-initial chat to guide the planning process (no visits without this)." },
    { id: 3, title: "Site Visitation", description: "Plan a site visit based on your location, with potential extra charges outside Awka and Lagos." },
    { id: 4, title: "Design Concept Payment", description: "Make payment via invoice to resume design, based on agreed deliverables like moodboards or 3D models." },
    { id: 5, title: "Presentation & Approval", description: "Review and approve the design presentation, with adjustments if needed before proceeding." },
    { id: 6, title: "Quotation & Payment", description: "Receive and settle quotes following the approved moodboard." },
    { id: 7, title: "Execution", description: "Begin work post-payment, aligned with the agreed timeline." },
    { id: 8, title: "Hand Over", description: "Officially hand over the completed project after execution and styling." },
    { id: 9, title: "Follow Up", description: "Follow up within the first week post-handover for any minor adjustments." },
  ];

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div>
      <Helmet>
        <title>Maple Maven Designs - Our Services</title>
        <meta name="description" content="Explore the interior design, renovation, and 3D modeling services offered by Maple Maven Designs in Nigeria. Tailored solutions for your unique needs." />
        <meta name="keywords" content="interior design Nigeria, renovation services, 3D modeling, Maple Maven Designs services" />
      </Helmet>
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
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Our Service Process</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Roadmap Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
              {serviceProcess.map((step) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center group transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => toggleStep(step.id)}
                >
                  {/* Step Circle with Clickable Cue */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-2 animate-pulse">
                      {step.id}
                    </div>
                    <h3 className="text-lg font-semibold text-center">{step.title}</h3>
                    <span className="text-gold text-sm mt-1">
                      {activeStep === step.id ? '−' : '+'}
                    </span>
                  </div>

                  {/* Dropdown Description */}
                  {activeStep === step.id && (
                    <div className="mt-2 p-4 bg-white rounded-lg shadow-md text-gray-600 text-center animate-fadeIn">
                      {step.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default ServicesPage;
