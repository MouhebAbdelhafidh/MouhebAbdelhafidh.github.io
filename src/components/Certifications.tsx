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
  },
  {
    id: '3',
    title: 'Fundamentals of Agents',
    issuer: 'Hugging Face',
    date: 'April 2025',
    url: 'https://huggingface.co/spaces/agents-course/unit_1_quiz/discussions/245#67eea1f11fe2bdff80ff259f',
    image: 'https://huggingface.co/front/thumbnails/learn/agents-course.png'
  },
  {
    id: '4',
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: 'March 2025',
    url: 'https://learn.nvidia.com/certificates?id=OXk9fMyVTFy_DtDV2gLWPg#',
    image: 'https://i.redd.it/i96pa8te6d771.jpg'
  },
  {
    id: '5',
    title: 'Artificial Intelligence fundamentals',
    issuer: 'IBM',
    date: 'August  2024',
    url: 'https://www.credly.com/badges/d15e19fc-3205-43bf-be74-f48aa7c037a5/public_url',
    image: 'data:image/png;base64,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'
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
            Certifications & Achivements
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the certifications and achivements in Data science and competetive programming.
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