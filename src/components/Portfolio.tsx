import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Living Room Redesign",
      category: "interior",
      imageUrl: "/portfolio-living-room.jpeg",
      description: "A complete transformation of a living space into a modern, comfortable sanctuary."
    },
    {
      id: 2,
      title: "Executive Office Space",
      category: "commercial",
      imageUrl: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
      description: "Functional and stylish office design for a corporate client focusing on productivity and comfort."
    },
    {
      id: 3,
      title: "Luxury Bathroom Renovation",
      category: "renovation",
      imageUrl: "portfolio-bathroom.jpg",
      description: "Transformation of an outdated bathroom into a spa-like retreat with premium fixtures."
    },
    {
      id: 4,
      title: "Contemporary Kitchen Design",
      category: "interior",
      imageUrl: "/portfolio-kitchen.jpg",
      description: "A functional kitchen with modern appliances, smart storage solutions, and elegant finishes."
    },
    {
      id: 5,
      title: "Residential Exterior Redesign",
      category: "exterior",
      imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      description: "Complete exterior renovation including facade updates and landscaping design."
    },
    {
      id: 6,
      title: "Retail Store Layout",
      category: "commercial",
      imageUrl: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg",
      description: "Strategic store layout designed to enhance customer experience and increase sales."
    }
  ];

  const categories = ['all', 'interior', 'exterior', 'commercial', 'renovation'];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600">
            Explore our diverse portfolio of projects showcasing our expertise in creating beautiful, functional spaces.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-gold text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
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
                  <button className="px-6 py-2 bg-gold text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors text-lg font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;