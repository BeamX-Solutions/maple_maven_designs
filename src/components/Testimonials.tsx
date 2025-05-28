import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  imageUrl: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Homeowner",
      quote: "Maple Maven transformed our house into a home. Their attention to detail and understanding of our vision exceeded our expectations. We couldn't be happier with the results!",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, Tech Innovations",
      quote: "The team at Maple Maven designed our corporate office with both aesthetics and functionality in mind. The space has significantly improved employee satisfaction and productivity.",
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Restaurant Owner",
      quote: "Working with Maple Maven on our restaurant redesign was a seamless experience. They captured our brand essence perfectly and created a space our customers love.",
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    }
  ];

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600">
            Hear what our clients have to say about their experience working with Maple Maven Design.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img 
                  src={testimonials[currentIndex].imageUrl} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-xl text-gray-700 italic mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <h4 className="font-serif font-semibold text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-600">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  currentIndex === index ? 'bg-gold' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;