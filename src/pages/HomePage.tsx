import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Modern Living Room",
      imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      id: 2,
      title: "Executive Office",
      imageUrl: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
    },
    {
      id: 3,
      title: "Luxury Bathroom",
      imageUrl: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg",
    },
  ];

  const designStyles = [
    {
      id: 1,
      title: "Modern Design",
      imageUrl: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      description: "Clean lines and functional elegance for contemporary living.",
    },
    {
      id: 2,
      title: "Minimalist Style",
      imageUrl: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      description: "Simplicity with a focus on space and light.",
    },
  ];

  const beforeAfter = [
    {
      id: 1,
      beforeImage: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      afterImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      title: "Living Room Transformation",
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* Featured Projects Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-2 bg-gold text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-block px-6 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Design Inspiration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Design Inspiration</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {designStyles.map((style) => (
              <div
                key={style.id}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={style.imageUrl}
                    alt={style.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-2 bg-gold text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Explore
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2">{style.title}</h3>
                  <p className="text-gray-600">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-block px-6 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors"
            >
              Discover Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Before & After</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {beforeAfter.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} Before`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white">Before</span>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={item.afterImage}
                      alt={`${item.title} After`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white">After</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors"
            >
              Contact Us for a Transformation
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default HomePage;