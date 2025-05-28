import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
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
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Living Room Redesign",
      category: "Interior Design",
      location: "Lagos, Nigeria",
      year: "2023",
      imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      description: "A complete transformation of a living space into a modern, comfortable sanctuary that reflects the client's personality and lifestyle. The design focuses on clean lines, neutral tones with bold accents, and a harmonious flow throughout the space.",
      fullImages: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
      ]
    },
    {
      id: 2,
      title: "Executive Office Space",
      category: "Commercial Design",
      location: "Abuja, Nigeria",
      year: "2022",
      imageUrl: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
      description: "Functional and stylish office design for a corporate client focusing on productivity and comfort. The space incorporates ergonomic furniture, strategic lighting, and a color scheme that promotes focus and creativity.",
      fullImages: [
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
        "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg",
        "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg"
      ]
    },
    {
      id: 3,
      title: "Luxury Bathroom Renovation",
      category: "Renovation",
      location: "Port Harcourt, Nigeria",
      year: "2023",
      imageUrl: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg",
      description: "Transformation of an outdated bathroom into a spa-like retreat with premium fixtures. The renovation included custom cabinetry, high-end finishes, and innovative storage solutions to create a luxurious yet practical space.",
      fullImages: [
        "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg",
        "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
        "https://images.pexels.com/photos/2775328/pexels-photo-2775328.jpeg"
      ]
    },
    {
      id: 4,
      title: "Contemporary Kitchen Design",
      category: "Interior Design",
      location: "Lagos, Nigeria",
      year: "2022",
      imageUrl: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      description: "A functional kitchen with modern appliances, smart storage solutions, and elegant finishes. The design prioritizes workflow efficiency while maintaining a stylish aesthetic that complements the home's overall design.",
      fullImages: [
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
        "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg",
        "https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg"
      ]
    },
    {
      id: 5,
      title: "Residential Exterior Redesign",
      category: "Exterior Design",
      location: "Awka, Nigeria",
      year: "2021",
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
      title: "Retail Store Layout",
      category: "Commercial Design",
      location: "Lagos, Nigeria",
      year: "2023",
      imageUrl: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg",
      description: "Strategic store layout designed to enhance customer experience and increase sales. The design incorporated brand elements, optimal traffic flow, and eye-catching displays to create an inviting shopping environment.",
      fullImages: [
        "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg",
        "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
        "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg"
      ]
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
    document.body.style.overflow = 'auto';
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
                  <div className="h-96 overflow-hidden">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 grid grid-cols-3 gap-2">
                    {selectedProject.fullImages.map((img, index) => (
                      <img 
                        key={index}
                        src={img} 
                        alt={`${selectedProject.title} view ${index + 1}`} 
                        className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
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
                  
                  <button className="px-6 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors">
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

export default PortfolioPage;