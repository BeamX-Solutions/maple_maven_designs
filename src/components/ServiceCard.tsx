import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  delay = 0 
}) => {
  return (
    <div 
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
      style={{ 
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      <div className="text-gold mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      
    </div>
  );
};

export default ServiceCard;