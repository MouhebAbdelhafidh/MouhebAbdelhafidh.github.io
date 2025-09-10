import React, { useState } from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { useInView } from '../hooks/useInView';

const projects: Project[] = [
  {
    id: '1',
    title: 'Marketmind: Intelligent marketing assistant',
    description: 'Intelligent marketing assistant designed to generate marketing strategies and social media content.',
    image: 'https://img.freepik.com/premium-photo/virtual-canvas-abstract-representation-generative-ai_767466-14812.jpg',
    tags: ['AI agents', 'GenAI'],
    githubUrl: 'https://github.com/MouhebAbdelhafidh/MarketMind-PIDS',
    demoUrl: 'https://huggingface.co/spaces/rayen-toujani/market-mind'
  },
  {
    id: '2',
    title: 'Churn Prediction with MLOps',
    description: 'Implimentation of MLOps techniques on customer churn prediction in the telecom sector project.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['MLOps'],
    githubUrl: 'https://github.com/MouhebAbdelhafidh/Customer-churn-prediction-with-MLOps'
  },
  {
    id: '3',
    title: 'Brain Tumor Detection and Classification',
    description: 'A computer vision system that detects and classifies brain tumor from X-Ray images.',
    image: 'https://th.bing.com/th/id/OIP.JO0VFXXDCzSgXhIS6Z3W5AHaEJ?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    tags: ['Computer Vision', 'Deep Learning'],
    githubUrl: 'https://github.com/MouhebAbdelhafidh/Brain-Tumor-Images-Classification',
  },
  {
    id: '4',
    title: 'COVID-19  Deaths forecasting',
    description: 'Time Series Statistical study to predict Covid19 deaths.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Time series', 'Statistics', 'R'],
    githubUrl: 'https://github.com/MouhebAbdelhafidh/Covid19-Deaths-Time-Series-Forecasting'
  },
  {
    id: '5',
    title: 'See-Through: ADAS using mmWave radar fusion',
    description: 'A computer vision atomomous system that detects ,classifies, predicts velocity of objects on the road and tracks their movement.',
    image: 'https://www.shutterstock.com/image-illustration/advanced-driver-assistance-systems-adas-600nw-2527686993.jpg',
    tags: ['Computer Vision', 'Deep Learning'],
    githubUrl: 'https://github.com/MouhebAbdelhafidh/See-Through'
  }
];

const ProjectCard: React.FC<{ project: Project; delay: number }> = ({ project, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-500 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex items-center space-x-3 mt-auto">
          <a 
            href={project.githubUrl} 
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github size={20} />
          </a>
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label={`View live demo of ${project.title}`}
            >
              <p
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-400 dark:bg-indigo-900/50 dark:hover:bg-indigo-900 transition-colors duration-300"
          >
            Demo
          </p>
            </a>
          )}
          
          
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'GenAI', label: 'GenAI' },
    { value: 'Computer Vision', label: 'Computer Vision' },
    { value: 'MLOps', label: 'MLOps' },
    { value: 'Time series', label: 'Time series' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.includes(filter))
      );
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Explore my data science projects showcase my skills in diffrent AI fields.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((item) => (
              <button
                key={item.value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === item.value
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;