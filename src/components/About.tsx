import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const timelineItems = [
    
    {
      title: 'AI Intern',
      organization: 'ACTIA Engineering Services',
      date: 'July 2025 - Present',
      description: 'Building an ADAS system using radars fusion.',
      icon: <Briefcase size={18} />,
    },
    {
      title: 'Engineering in Data Science',
      organization: 'ESPRIT',
      date: '2021 - Present',
      description: 'Specialized in AI agents, computer vision, and deep learning.',
      icon: <GraduationCap size={18} />,
    },
    {
      title: 'High School',
      organization: 'Abu Alkacem Chebbi High school Tozeur',
      date: '2018 - 2021',
      description: 'High school diploma with a focus on mathematics.',
      icon: <GraduationCap size={18} />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Profile Info with Photo */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="relative">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-900/40 dark:to-purple-900/40"></div>
                  
                  {/* Profile photo container */}
                  <div className="relative p-6">
                    <div className="w-48 h-48 mx-auto relative group">
                      {/* Background circle */}
                      <div className="absolute inset-0 rounded-full bg-indigo-100 dark:bg-indigo-900/50 transform group-hover:scale-105 transition-transform duration-300"></div>
                      
                      {/* Photo frame */}
                      <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        <img
                          src="/images/Mouheb_Abdelhafidh_Photo.jpg"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Decorative dots */}
                      <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
                      <div className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">Mouheb Abdelhafidh</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    I’m a final-year engineering student curious about AI agents,
                    computer vision and deep learning with a problem solving mindset and a solid background in mathematics.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar size={18} className="mr-3 text-indigo-600 dark:text-indigo-400" />
                      <span>Born: January, 14 2003</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin size={18} className="mr-3 text-indigo-600 dark:text-indigo-400" />
                      <span>Location: Ariana, Tunisia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="md:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">
                  Education & Experience
                </h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-8">
                    {timelineItems.map((item, index) => (
                      <div key={index} className="relative pl-12">
                        {/* Timeline icon */}
                        <div className="absolute left-0 top-1 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center border-2 border-indigo-600 dark:border-indigo-400">
                          <span className="text-indigo-600 dark:text-indigo-400">
                            {item.icon}
                          </span>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <span>{item.organization}</span>
                            <span className="mx-2">•</span>
                            <span>{item.date}</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;