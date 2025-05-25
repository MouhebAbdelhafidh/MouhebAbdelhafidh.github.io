import React, { useState } from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { useInView } from '../hooks/useInView';

const projects: Project[] = [
  {
    id: '1',
    title: 'Predictive Analytics Dashboard',
    description: 'A real-time analytics dashboard for predicting customer behavior using machine learning algorithms and interactive visualizations.',
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: '2',
    title: 'NLP Text Summarization',
    description: 'An automated text summarization tool that uses NLP techniques to extract key information from lengthy documents.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'BERT', 'Flask', 'NLP'],
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Computer Vision Object Detection',
    description: 'A computer vision system that detects and classifies objects in real-time video streams with high accuracy.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'OpenCV', 'PyTorch', 'YOLO'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: '4',
    title: 'Time Series Forecasting',
    description: 'A time series analysis tool for predicting future values based on historical data patterns.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Pandas', 'Prophet', 'Matplotlib'],
    githubUrl: '#'
  },
  {
    id: '5',
    title: 'Recommendation System',
    description: 'A collaborative filtering recommendation system that suggests items based on user preferences and behavior.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'PostgreSQL'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: '6',
    title: 'Sentiment Analysis Tool',
    description: 'A sentiment analysis tool that evaluates text data to determine emotional tone and user opinions.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'NLTK', 'Streamlit', 'Plotly'],
    githubUrl: '#'
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
              <ExternalLink size={20} />
            </a>
          )}
          
          <a 
            href={`#project-${project.id}`} 
            className="ml-auto text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center transition-colors"
          >
            <span className="text-sm font-medium">Details</span>
            <ChevronRight size={16} className="ml-1" />
          </a>
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
    { value: 'Python', label: 'Python' },
    { value: 'Machine Learning', label: 'ML & AI' },
    { value: 'NLP', label: 'NLP' },
    { value: 'Computer Vision', label: 'Computer Vision' }
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
            Explore my portfolio of data science and machine learning projects, showcasing my skills in
            predictive modeling, natural language processing, and computer vision.
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