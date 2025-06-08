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
    title: 'COVID-19  Deaths forecasting ',
    description: 'Time Series Statistical study to predict Covid19 deaths .',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Time series', 'Statistics', 'R'],
    githubUrl: 'https://github.com/MouhebAbdelhafidh/Covid19-Deaths-Time-Series-Forecasting'
  },
  {
    id: '5',
    title: 'Emotion Recognition in Audio Signals',
    description: 'Recreating the research paper: "A Generation of Enhanced Data by Variational Autoencoders and Diffusion Modeling"',
    image: 'data:image/jpeg;base64,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',
    tags: ['Audio', 'Deep Learning'],
    githubUrl: 'https://github.com/MouhebAbdelhafidh/Emotion-recognition-in-audio-signals'
  },
  
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
    { value: 'Time series', label: 'Time series' },
    { value: 'Audio', label: 'Audio' }
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