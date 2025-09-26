import React, { useState, useEffect } from 'react';
import { ArrowRight, GraduationCap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyCTA: React.FC = () => {
  const [slotsLeft] = useState(4);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images
  const carouselImages = [
    { src: '/portfolio-living-room.jpeg', alt: 'Modern Living Room Design' },
    { src: '/portfolio-kitchen.jpg', alt: 'Contemporary Kitchen Space' },
    { src: '/project-ulk-2.jpg', alt: 'Luxurious Building Exterior' },
    { src: '/cafe-one-calabar-6.JPG', alt: 'Elegant Office Space' },
    { src: '/portfolio-living-room.jpeg', alt: 'Stylish Living Area' },
    { src: '/portfolio-kids-bedroom.jpg', alt: 'Creative Kids Bedroom' },
    { src: '/portfolio-bathroom.jpg', alt: 'Spa-like Bathroom Retreat' }
  ];

  // Image carousel effect
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageTimer);
  }, [carouselImages.length]);

  return (
    <section className="py-16 bg-gradient-to-r from-gold to-gold/80 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 mr-3" />
              <span className="text-lg font-semibold">NEW LAUNCH</span>
            </div>
            
            <h2 className="text-4xl font-serif font-bold mb-4">
              Join Our Design Academy
            </h2>
            
            <p className="text-xl mb-6 opacity-90">
              Become a professional interior designer in just 4 months. 
              Comprehensive training program for ₦300,000.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-80">Limited Offer</div>
                  <div className="text-2xl font-bold">Only {slotsLeft} Slots Left!</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/academy"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gold rounded-lg hover:bg-gray-100 transition-colors font-medium group"
              >
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+2349064013237"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                Call to Enroll
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              {/* Image Carousel Container */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="h-64 relative">
                  {carouselImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image.src} 
                      alt={image.alt} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Image overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Image title overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      {carouselImages[currentImageIndex].alt}
                    </div>
                  </div>
                </div>
                
                {/* Carousel indicators */}
                <div className="absolute bottom-2 right-4 flex space-x-1">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-2">Transform Spaces Like These</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Duration</div>
                    <div className="opacity-80">4 Months</div>
                  </div>
                  <div>
                    <div className="font-semibold">Investment</div>
                    <div className="opacity-80">₦300,000</div>
                  </div>
                  <div>
                    <div className="font-semibold">Class Size</div>
                    <div className="opacity-80">Max 5 Students</div>
                  </div>
                  <div>
                    <div className="font-semibold">Certification</div>
                    <div className="opacity-80">Included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyCTA;