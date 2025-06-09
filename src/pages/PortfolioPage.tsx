import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming React Router is used
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

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the selected image index
  const navigate = useNavigate(); // For navigation to ContactPage

  const projects: Project[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      title: "Luxury Bathroom Renovation",
      category: "Renovation",
      location: "Port Harcourt, Nigeria",
      year: "2024",
      imageUrl: "/portfolio-bathroom.jpg",
      description: "Transformation of an outdated bathroom into a spa-like retreat with premium fixtures. The renovation included custom cabinetry, high-end finishes, and innovative storage solutions to create a luxurious yet practical space.",
      fullImages: [
        "/portfolio-bathroom.jpg",
        "/portfolio-bathroom-2.jpg",
        "/portfolio-bathroom-3.jpg",
        "/portfolio-bathroom-4.jpg",
      ]
    },
    {
      id: 4,
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
      id: 5,
      title: "Residential Exterior Redesign",
      category: "Exterior Design",
      location: "Awka, Nigeria",
      year: "2023",
      imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      description: "Complete exterior renovation including facade updates and landscaping design. The project focused on enhancing curb appeal while ensuring durability and minimal maintenance requirements.",
      fullImages: [
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg"
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
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0); // Set the first image as default
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
      setSelectedImageIndex(index); // Only update if a different image is clicked
    }
  };

  const handleRequestSimilarDesign = () => {
    navigate('/contact'); // Navigate to ContactPage using React Router
    closeProjectModal(); // Close the modal after navigation
  };

  return (
    <div>
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
                <div className="h-[500px] overflow-hidden"> {/* Increased height for better visibility */}
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
                        selectedImageIndex === index ? 'border-4 border-gold' : '' // Highlight selected image
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