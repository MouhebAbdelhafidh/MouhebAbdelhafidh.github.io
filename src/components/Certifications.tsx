import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { Certification } from '../types';
import { useInView } from '../hooks/useInView';

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Deep Learning Specialization',
    issuer: 'Coursera - deeplearning.ai',
    date: 'December 2022',
    url: '#',
    image: 'https://images.pexels.com/photos/5926383/pexels-photo-5926383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'Machine Learning Engineer Nanodegree',
    issuer: 'Udacity',
    date: 'August 2022',
    url: '#',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'March 2023',
    url: '#',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'Data Science Professional Certificate',
    issuer: 'IBM',
    date: 'January 2023',
    url: '#',
    image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    title: 'SQL for Data Science',
    issuer: 'UC Davis (Coursera)',
    date: 'November 2022',
    url: '#',
    image: 'https://images.pexels.com/photos/5380769/pexels-photo-5380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '6',
    title: 'AWS Machine Learning Specialty',
    issuer: 'Amazon Web Services',
    date: 'May 2023',
    url: '#',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const CertificationCard: React.FC<{ certification: Certification; index: number }> = ({ certification, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-500 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-32 bg-indigo-100 dark:bg-indigo-900 relative overflow-hidden">
        {certification.image && (
          <img 
            src={certification.image} 
            alt={certification.title} 
            className="w-full h-full object-cover opacity-70 dark:opacity-50"
          />
        )}
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
            <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {certification.title}
        </h3>
        
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          <p className="mb-1">{certification.issuer}</p>
          <p className="text-gray-500 dark:text-gray-400">{certification.date}</p>
        </div>
        
        {certification.url && (
          <a 
            href={certification.url} 
            className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            View Certificate
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Certifications & Courses
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning is essential in the fast-evolving field of data science.
            Here are some of the courses and certifications I've completed to stay at the forefront.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={certification.id} 
              certification={certification} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;