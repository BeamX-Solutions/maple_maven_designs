import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  '/maven-background.jpeg',
  '/maven-background-2.jpg',
  '/maven-background-3.jpg',
  '/maven-background-4.jpg'
];

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = 1 - scrollY * 0.003;
        const translateY = scrollY * 0.3;

        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Content Overlay */}
      <div
        ref={heroRef}
        className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4 md:px-0"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="block text-gold">Designing Dreams,</span>
            <span className="block">One Space at a Time</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Transform your space into a masterpiece with our expert interior design and architectural services.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors text-lg font-medium"
            >
              View Our Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded hover:bg-white/10 transition-colors text-lg font-medium group"
            >
              Get a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
