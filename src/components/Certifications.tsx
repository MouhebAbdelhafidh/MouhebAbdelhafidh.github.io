import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { Certification } from '../types';
import { useInView } from '../hooks/useInView';

const certifications: Certification[] = [
  {
    id: '1',
    title: '7th place in Code Red competetive programming contest',
    issuer: 'ISTIC',
    date: 'May 2025',
    url: 'https://www.linkedin.com/posts/mouheb-abdelhafidh-978282236_codefroces-problemsolving-activity-7324538785151524864-Zk2w?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrF0uwBRiktbRJLbANocb8aKChy65QwuWI',
    image: 'images/CodeRedPic.jpg'
  },
  {
    id: '2',
    title: '8th place in CatForces competetive programming contest',
    issuer: 'IPS (ISSAM Problem Solving)',
    date: 'April 2025',
    url: 'https://www.linkedin.com/posts/mouheb-abdelhafidh-978282236_catforces-competitive-programming-9th-place-activity-7323272204018778112-ZOYg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrF0uwBRiktbRJLbANocb8aKChy65QwuWI',
    image: 'images/CatForcesPic.png'
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
          >View
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
            Achivements
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my achivements so far.
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