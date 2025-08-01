import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat: React.FC = () => {
  const phoneNumber = '+2349064013237'; // Your WhatsApp number
  const message = 'Hello! I would like to inquire about your design services.';
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* WhatsApp Icon */}
        <div className="relative z-10">
          <FaWhatsapp size={28} className="animate-pulse" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;