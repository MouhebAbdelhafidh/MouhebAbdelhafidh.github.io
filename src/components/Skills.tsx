import React from 'react';
import { useInView } from '../hooks/useInView';

const skills = [
  {
    name: 'PyTorch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    category: 'frameworks'
  },
  {
  name: 'CrewAI',
  icon: 'https://miro.medium.com/v2/resize:fit:1400/0*-7HC-GJCxjn-Dm7i.png',
  category: 'AI Framework'
  },
  {
    name: 'MCP',
    icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/mcp.png',
    category: 'AI Framework'
  },
  {
    name: 'Llama Index',
    icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/llamaindex-color.png',
    category: 'AI Framework'
  },
  {
    name: 'LangChain',
    icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAg1AAZAA0',
    category: 'frameworks'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'tools'
  }
];

const SkillIcon: React.FC<{ skill: typeof skills[0]; index: number }> = ({ skill, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div 
      ref={ref}
      className={`group relative transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-24 h-24 mx-auto">
        <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl transform group-hover:rotate-6 transition-transform duration-300"></div>
        <div className="relative w-full h-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md transform group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300">
          <img 
            src={skill.icon} 
            alt={skill.name}
            className="w-full h-full object-contain animate-bounce-scale"
          />
        </div>
      </div>
      <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
        {skill.name}
      </p>
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical toolkit for end-to-end AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <SkillIcon key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;