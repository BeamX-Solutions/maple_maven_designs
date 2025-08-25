import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet-async';

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

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      title: "Cafe One Calabar",
      category: "Interior Design",
      location: "Calabar, Nigeria",
      year: "2025",
      imageUrl: "/cafe-one-calabar-6.JPG",
      description: "This project was special to us because it wasn’t just about designing a café, it was about shaping an experience. We created a space where work and leisure flow seamlessly with warm textures, custom seating, and thoughtful details that make people feel both productive and at ease. For us, Café One reflects what design should be: functional, inviting, and full of life.",
      fullImages: [
        "/cafe-one-calabar-6.JPG",
        "/cafe-one-calabar-1.JPG",
        "/cafe-one-calabar-3.JPG",
        "/cafe-one-calabar-5.JPG",
        "/cafe-one-calabar-2.JPG",
        "/cafe-one-calabar-4.JPG"
      ]
    },
    {
      id: 2,
      title: "Modern Living Room Redesign",
      category: "Interior Design",
      location: "Lagos, Nigeria",
      year: "2025",
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
      id: 3,
      title: "Project ULK",
      category: "Exterior Design",
      location: "Port Harcourt, Nigeria",
      year: "2025",
      imageUrl: "/project-ulk-1.jpg",
      description: "With ULK, we explored the harmony between modern living and nature. This biophilic project was designed to bring the outdoors in by using natural textures, earthy tones, and organic forms to create a refreshing, restorative environment. Every element was intentional, blurring the line between architecture and nature, and turning the space into a living experience.",
      fullImages: [
        "/project-ulk-1.jpg",
        "/project-ulk-2.jpg",
        "/project-ulk-3.jpg",
        "/project-ulk-4.jpg",
      ]
    },
    {
      id: 4,
      title: "Project GRG",
      category: "Exterior and Interior Design",
      location: "Port Harcourt, Nigeria",
      year: "2025",
      imageUrl: "/project-grg-1.jpg",
      description: "GRG is a study in modern minimalism, a home defined by clean lines, open spaces, and purposeful simplicity. Every detail was curated to celebrate light, function, and flow, creating a space that feels both refined and effortlessly livable.",
      fullImages: [
        "/project-grg-1.jpg",
        "/project-grg-2.jpg",
        "/project-grg-3.jpg",
        "/project-grg-4.jpg",
        "/project-grg-5.jpg",
      ]
    },
    {
      id: 5,
      title: "Project ASB",
      category: "Interior Design",
      location: "Asaba, Nigeria",
      year: "2024",
      imageUrl: "/project-asb-1.jpg",
      description: "For this project, we drew inspiration from the warm depth of cappuccino tones by layering soft neutrals and rich accents to create a space that feels both grounded and refined. Every detail was chosen to highlight comfort while maintaining a sophisticated balance, making the design as inviting as it is timeless.",
      fullImages: [
        "/project-asb-1.jpg",
        "/project-asb-2.jpg",
        "/project-asb-3.jpg",
        "/project-asb-4.jpg",
        "/project-asb-5.jpg",
        "/project-asb-6.jpg"
      ]
    },
    {
      id: 6,
      title: "Snappy Logistics",
      category: "Commercial Design",
      location: "Enugu, Nigeria",
      year: "2024",
      imageUrl: "/snappy-logistics-2.jpg",
      description: "This project allowed us to play with creativity in a bold way. For Snappy, we introduced custom murals that brought their brand identity to life, adding color, movement, and storytelling to the walls. The design blends function with character, a space that feels practical for logistics yet vibrant enough to inspire the team behind it.",
      fullImages: [
        "/snappy-logistics-2.jpg",
        "/snappy-logistics-1.jpg",
        "/snappy-logistics-4.jpg",
        "/snappy-logistics-3.jpg"
      ]
    },
    {
      id: 7,
      title: "Elegant Bar Lounge Design",
      category: "Commercial Design",
      location: "Abuja, Nigeria",
      year: "2024",
      imageUrl: "/portfolio-bar.jpg",
      description: "A sophisticated bar design featuring a sleek counter, ambient lighting, and an extensive wine storage system, creating an inviting atmosphere for social gatherings and relaxation.",
      fullImages: [
        "/portfolio-bar.jpg",
        "/portfolio-bar-2.jpg",
        "/portfolio-bar-3.jpg",
        "/portfolio-bar-4.jpg"
      ]
    },
    {
      id: 8,
      title: "Contemporary Kitchen Design",
      category: "Interior Design",
      location: "Lagos, Nigeria",
      year: "2023",
      imageUrl: "/portfolio-kitchen.jpg",
      description: "A functional kitchen with modern appliances, smart storage solutions, and elegant finishes. The design prioritizes workflow efficiency while maintaining a stylish aesthetic that complements the home's overall design.",
      fullImages: [
        "/portfolio-kitchen.jpg",
        "/portfolio-kitchen-2.jpg",
        "/portfolio-kitchen-3.jpg"
      ]
    },
    {
      id: 9,
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

  // Auto-rotate images every 3 seconds when modal is open
  useEffect(() => {
    if (modalOpen && selectedProject) {
      const interval = setInterval(() => {
        setSelectedImageIndex((prevIndex) => 
          (prevIndex + 1) % selectedProject.fullImages.length
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Clear interval when modal closes or component unmounts
    }
  }, [modalOpen, selectedProject]);

  return (
    <div>
      <Helmet>
        <title>Maple Maven Designs - Portfolio</title>
        <meta name="description" content="Browse Maple Maven Designs' portfolio of interior design and renovation projects across Nigeria, showcasing creativity and craftsmanship." />
        <meta name="keywords" content="Maple Maven Designs portfolio, interior design projects Nigeria, renovation portfolio" />
      </Helmet>
      <div className="pt-40 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-center">Our Portfolio</h1>
          <div className="w-24 h-1 bg-gold mx-auto my-6"></div>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Explore our diverse collection of projects showcasing our expertise in creating beautiful, functional spaces.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
        </div>
      </section>
      
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" onClick={closeProjectModal}>
          <div 
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none fixed top-4 right-4 z-60"
              onClick={closeProjectModal}
            >
              ×
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="h-[500px] overflow-hidden">
                  <img 
                    src={selectedProject.fullImages[selectedImageIndex]} 
                    alt={`${selectedProject.title} view ${selectedImageIndex + 1}`} 
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
      )}
      
      <CTASection />
    </div>
  );
};

export default PortfolioPage;