import React, { useState, useEffect } from 'react';
import { Clock, Users, Award, BookOpen, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyPage: React.FC = () => {
  const [slotsLeft, setSlotsLeft] = useState(4);
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

  const curriculum = [
    {
      module: "Foundation of Design",
      topics: ["Design Principles", "Color Theory", "Typography", "Composition"]
    },
    {
      module: "Interior Design Fundamentals",
      topics: ["Space Planning", "Furniture Selection", "Material Knowledge", "Lighting Design"]
    },
    {
      module: "3D Modeling & Visualization",
      topics: ["SketchUp/AutoCAD", "3D Rendering", "Technical Drawing", "Presentation Skills"]
    },
    {
      module: "Project Management",
      topics: ["Client Relations", "Budget Management", "Timeline Planning", "Quality Control"]
    },
    {
      module: "Business Development",
      topics: ["Portfolio Building", "Marketing Strategies", "Pricing Models", "Legal Aspects"]
    },
    {
      module: "Practical Experience",
      topics: ["Live Projects", "Site Visits", "Client Presentations", "Industry Networking"]
    }
  ];

  const benefits = [
    "Hands-on training with real projects",
    "Industry-standard software training",
    "Certificate of completion",
    "Portfolio development assistance",
    "Job placement support",
    "Ongoing mentorship",
    "Access to exclusive industry events",
    "Professional networking opportunities"
  ];

  return (
    <div>
      <head>
        <title>Maple Maven Design Academy - Professional Interior Design Training</title>
        <meta name="description" content="Join Maple Maven Design Academy and become a professional interior designer in 4 months. Limited slots available - ₦300,000 comprehensive training program." />
        <meta name="keywords" content="interior design training, design academy Nigeria, professional design course, interior design certification" />
      </head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gold/20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url("/maven-background.jpeg")' }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
                <span className="text-gold font-semibold">LIMITED TIME OFFER</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                BECOME A<br />
                <span className="text-gold">PROFESSIONAL</span><br />
                DESIGNER TODAY
              </h1>
              
              <div className="bg-gold/90 text-white px-8 py-6 rounded-lg mb-8 transform rotate-1">
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">COMPLETE PROGRAM</div>
                  <div className="text-4xl font-bold">₦300,000</div>
                  <div className="text-lg">FOR 4 MONTHS</div>
                </div>
              </div>

              <div className="bg-transparent border-white border-2 text-white px-6 py-4 rounded-lg mb-8 text-center">
                <div className="font-bold text-xl mb-2">ONLY {slotsLeft} SLOTS LEFT!</div>
                <div className="text-sm">Secure your spot before it's too late</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white rounded-lg hover:bg-gold/90 transition-colors text-lg font-medium group"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+2349064013237"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-medium"
                >
                  <Phone className="mr-2" size={20} />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              {/* 3D Room Showcase with Carousel */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Image Carousel Container */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="h-80 relative">
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
                  <h3 className="text-2xl font-serif font-bold mb-2">Transform Spaces Like These</h3>
                  <p className="text-white/80">Learn to create stunning designs that wow clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">What You'll Master</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Our comprehensive 4-month program covers everything you need to become a successful professional interior designer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculum.map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-serif font-semibold">{module.module}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="text-gold w-4 h-4 mr-2 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Our Academy?</h2>
              <div className="w-24 h-1 bg-gold mb-8"></div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/*
              <div className="mt-8 p-6 bg-gold/10 rounded-lg">
                <h4 className="font-serif text-xl font-semibold mb-3">🏆 Success Guarantee</h4>
                <p className="text-gray-700">
                  75% of our graduates secure design jobs or start successful freelance careers within 6 months of completion.
                </p>
              </div>
              */}

            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="text-gold w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-semibold text-lg">Flexible Schedule</h4>
                    <p className="text-gray-600">Weekend & evening classes available</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="text-gold w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-semibold text-lg">Small Class Sizes</h4>
                    <p className="text-gray-600">Maximum 5 students for personalized attention</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Award className="text-gold w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-semibold text-lg">Industry Recognition</h4>
                    <p className="text-gray-600">Certified by leading design associations</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-gold w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-semibold text-lg">Comprehensive Materials</h4>
                    <p className="text-gray-600">All tools and software licenses included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/*
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Hear from our graduates who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                  alt="Graduate" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Adaora Okafor</h4>
                  <p className="text-gray-600 text-sm">Class of 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The academy transformed my passion into a profitable career. I now run my own design studio!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
                  alt="Graduate" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Chidi Nwosu</h4>
                  <p className="text-gray-600 text-sm">Class of 2024</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Excellent training with real-world projects. I landed a job at a top firm immediately after graduation."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Graduate" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Kemi Adebayo</h4>
                  <p className="text-gray-600 text-sm">Class of 2024</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The mentorship and practical experience were invaluable. Best investment I ever made!"
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Final CTA */}
      <section className="py-20 bg-gold text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Don't Miss This Opportunity</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Only {slotsLeft} spots remaining. Start your design career journey today for just ₦300,000
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Secure Your Spot Now
            </Link>
            <a
              href="mailto:hello@maplemavendesigns.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-medium"
            >
              <Mail className="mr-2" size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;