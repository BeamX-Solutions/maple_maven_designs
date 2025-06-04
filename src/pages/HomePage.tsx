import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  description: string;
  fullImages: string[];
}

const HomePage: React.FC = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const projectTarget = 75;
    const satisfactionTarget = 95;
    const duration = 4000;
    const incrementProject = projectTarget / (duration / 16);
    const incrementSatisfaction = satisfactionTarget / (duration / 16);

    let projectAnimation = setInterval(() => {
      setProjectCount((prev) => {
        if (prev >= projectTarget) {
          clearInterval(projectAnimation);
          return projectTarget;
        }
        return Math.min(prev + incrementProject, projectTarget);
      });
    }, 16);

    let satisfactionAnimation = setInterval(() => {
      setSatisfactionCount((prev) => {
        if (prev >= satisfactionTarget) {
          clearInterval(satisfactionAnimation);
          return satisfactionTarget;
        }
        return Math.min(prev + incrementSatisfaction, satisfactionTarget);
      });
    }, 16);

    return () => {
      clearInterval(projectAnimation);
      clearInterval(satisfactionAnimation);
    };
  }, [isVisible]);

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Modern Living Room Redesign",
      category: "Interior Design",
      location: "Lagos, Nigeria",
      year: "2023",
      imageUrl: "/portfolio-living-room.jpeg",
      description: "A complete transformation of a living space into a modern, comfortable sanctuary that reflects the client's personality and lifestyle. The design focuses on clean lines, neutral tones with bold accents, and a harmonious flow throughout the space.",
      fullImages: [
        "/portfolio-living-room.jpeg",
        "/portfolio-living-room-2.jpeg",
        "/portfolio-living-room-3.jpeg",
        "/portfolio-living-room-4.jpeg"
      ]
    },
    {
      id: 6,
      title: "Redesigned Kids' Bedroom",
      category: "Interior Design",
      location: "Lagos, Nigeria",
      year: "2023",
      imageUrl: "/portfolio-kids-bedroom.jpg",
      description: "A playful and cozy kids' bedroom with themed decor, comfortable bedding, and safe furniture, designed to inspire creativity and ensure a restful environment for children.",
      fullImages: [
        "/portfolio-kids-bedroom.jpg",
        "/portfolio-kids-bedroom-2.jpg",
        "/portfolio-kids-bedroom-3.jpg",
        "/portfolio-kids-bedroom-4.jpg"
      ]
    },
    {
      id: 3,
      title: "Luxury Bathroom Renovation",
      category: "Renovation",
      location: "Port Harcourt, Nigeria",
      year: "2023",
      imageUrl: "/portfolio-bathroom.jpg",
      description: "Transformation of an outdated bathroom into a spa-like retreat with premium fixtures. The renovation included custom cabinetry, high-end finishes, and innovative storage solutions to create a luxurious yet practical space.",
      fullImages: [
        "/portfolio-bathroom.jpg",
        "/portfolio-bathroom-2.jpg",
        "/portfolio-bathroom-3.jpg",
        "/portfolio-bathroom-4.jpg",
      ]
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleImageClick = (index: number) => {
    if (selectedImageIndex !== index) {
      setSelectedImageIndex(index);
    }
  };

  const handleRequestSimilarDesign = () => {
    navigate('/contact');
    closeProjectModal();
  };

  return (
    <div>
      <HeroSection />

      {/* Why Choose Us Section */}
      <section
        ref={sectionRef}
        className="py-16 mt-0 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Image Gallery */}
            <div className="relative mt-16">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/maven-background.jpeg"
                    alt="Living Room Design"
                    className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  />
                  <img 
                    src="/why-choose-us.jpeg"
                    alt="Kitchen Design"
                    className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="/why-choose-us.jpeg"
                    alt="Office Design"
                    className="w-full h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  />
                  <img 
                    src="/maven-background-4.jpg"
                    alt="Modern Design"
                    className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Text and Stats */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-serif font-bold text-gray-800">Why Choose Us</h2>
                <div className="w-24 h-1 bg-gold mt-2 mb-6"></div>
              </div>
              <p className="text-gray-600 text-md leading-relaxed">
                Experience excellence in design and execution with our dedicated team. We bring your vision to life with precision and creativity, ensuring every project reflects your unique style and needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-gold mb-2">{Math.round(projectCount)}+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-gold mb-2">{Math.round(satisfactionCount)}%</div>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-gold mb-2">4</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-gold mb-2">15+</div>
                  <p className="text-gray-600">Expert Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden cursor-pointer">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 bg-gold text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{project.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.year}
                    </span>
                  </div>
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

      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" onClick={closeProjectModal}>
          <div 
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                className="absolute top-4 right-4 bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
                onClick={closeProjectModal}
              >
                ×
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <div className="h-[500px] overflow-hidden">
                    <img 
                      src={selectedProject.fullImages[selectedImageIndex]} 
                      alt={`${selectedProject.title} main view`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 grid grid-cols-3 gap-2">
                    {selectedProject.fullImages.map((img, index) => (
                      <img 
                        key={index}
                        src={img} 
                        alt={`${selectedProject.title} view ${index + 1}`} 
                        className={`w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity ${
                          selectedImageIndex === index ? 'border-4 border-gold' : ''
                        }`}
                        onClick={() => handleImageClick(index)}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6">
                  <h3 className="font-serif text-3xl font-semibold mb-2">{selectedProject.title}</h3>
                  <div className="w-16 h-1 bg-gold mb-4"></div>
                  
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-medium">{selectedProject.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{selectedProject.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Year</p>
                        <p className="font-medium">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">Project Description</h4>
                  <p className="text-gray-600 mb-6">
                    {selectedProject.description}
                  </p>
                  
                  <button 
                    className="px-6 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors"
                    onClick={handleRequestSimilarDesign}
                  >
                    Request Similar Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </div>
  );
};

export default HomePage;