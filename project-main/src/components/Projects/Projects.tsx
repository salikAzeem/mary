import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Correctly import images manually
import projectFoodify from '../../assets/images/shobaimg.png';
import projectTableau from '../../assets/images/shoes.png';
import heartDiseaseDetection from '../../assets/images/heart.png';

// Define assets manually since assets.projects caused confusion
const assets = {
  projects: {
    foodify: projectFoodify,
    tableau: projectTableau,
    heartdetec: heartDiseaseDetection
  }
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  sourceUrl: string;
  tags: string[];
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Shoba-Cakes",
    description: "Designed and developed a fully functional bakery website for Shoba Cakes, enabling customers to order online and improving user navigation speed by 30%.",
    image: assets.projects.foodify, 
    demoUrl: "https://shobacakes.netlify.app/",
    sourceUrl: "https://github.com/salikAzeem/Shoba-Cakes", 
    tags: ["React", "HTML", "CSS", "JavaScript"],
    category: "Web Development",
  },
  {
    id: 2,
    title: "Shoes-Carnival",
    description: "For each one of those shoe sweethearts out there, ‘ShoesStore’ offers the one-stop goal to pick the correct match of footwear all within a few clicks.",
    image: assets.projects.tableau, 
    demoUrl: "https://shoescarnival.netlify.app/",
    sourceUrl: "https://github.com/salikAzeem/Shoes-Carnival", 
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
  },
  {
    id: 3,
    title: "Heart Disease Detection",
    description: "Designed a heart disease diagnosis model using federated learning, achieving 85%–90% accuracy with data visualization to represent results graphically.",
    image: assets.projects.heartdetec, 
    demoUrl: "https://heartdetection.netlify.app/", 
    sourceUrl: "https://github.com/salikAzeem/Heart-Disease-Detection", 
    tags: ["Python", "Machine Learning", "Keras"],
    category: "Machine Learning",
  }
];


const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/60">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Check out some of my recent projects and case studies</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative group overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-indigo-600 rounded-full hover:bg-indigo-100"
                    aria-label="Live Demo"
                  >
                    <Eye size={20} />
                  </a>
                  <a 
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-indigo-600 rounded-full hover:bg-indigo-100"
                    aria-label="Source Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="heading-sm mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 text-xs font-medium px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1 text-center flex items-center justify-center py-2"
                  >
                    Live Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                  <a 
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline flex-1 text-center flex items-center justify-center py-2"
                  >
                    Source <Github size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
