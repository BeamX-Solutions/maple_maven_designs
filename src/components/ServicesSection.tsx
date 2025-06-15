import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  Briefcase, 
  Home, 
  PaintBucket, 
  Building, 
  PenTool, 
  Columns, 
  Store, 
  FileText 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Project Management",
      description: "Comprehensive oversight of your design project from concept to completion, ensuring timely delivery within budget.",
      icon: <Briefcase size={36} />
    },
    {
      title: "Renovation",
      description: "Transform and revitalize your existing spaces with our expert renovation services tailored to your needs.",
      icon: <Home size={36} />
    },
    {
      title: "Interior/Exterior Design",
      description: "Create harmonious and functional spaces that reflect your style and meet your specific requirements.",
      icon: <PaintBucket size={36} />
    },
    {
      title: "Interior Architecture",
      description: "Innovative architectural solutions that combine aesthetics with functionality for interiors.",
      icon: <Building size={36} />
    },
    {
      title: "Building Finishing",
      description: "Premium quality finishing touches that elevate your space with attention to detail and craftsmanship.",
      icon: <PenTool size={36} />
    },
    {
      title: "3D Graphical Modeling",
      description: "Visualize your future space with accurate and detailed 3D models before implementation begins.",
      icon: <Columns size={36} />
    },
    {
      title: "Retail Decor and Furnishings",
      description: "Specialized design solutions for retail spaces that enhance customer experience and brand representation.",
      icon: <Store size={36} />
    },
    {
      title: "Building Project Consultation Plan",
      description: "Expert guidance and detailed planning for your construction or renovation project from start to finish.",
      icon: <FileText size={36} />
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;