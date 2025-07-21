import React, { useEffect, useRef } from 'react';
import { ArrowDown, FileDown, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Create animated particles
    const container = particlesRef.current;
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-indigo-500/20 dark:bg-indigo-400/20';
      
      // Random size
      const size = Math.random() * 10 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration
      const duration = Math.random() * 15 + 10;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(particle);
    }
    
    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
      
      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'fixed w-8 h-8 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full pointer-events-none';
      ripple.style.left = `${x - 16}px`;
      ripple.style.top = `${y - 16}px`;
      ripple.style.animation = 'ripple 1s ease-out forwards';
      document.body.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 1000);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-4 h-4 bg-indigo-500/30 dark:bg-indigo-400/30 rounded-full pointer-events-none mix-blend-screen z-50"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
      
      {/* Animated background particles */}
      <div 
        ref={particlesRef} 
        className="absolute inset-0 z-0 opacity-70"
        aria-hidden="true"
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            <span className="block">Hi, I'm Mouheb</span>
            <span className="block mt-2 text-indigo-600 dark:text-indigo-400">
              Data Science & AI Student
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Turning data into smart AI solutions that drive real-world impact
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex gap-4">
              <a 
                  href="/documents/Resume.pdf"
                  download="Resume.pdf"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                <FileDown className="mr-2 h-5 w-5" />
                Download CV (EN)  
              </a>



              <a 
                  href="/documents/CVFrançais.pdf"
                  download="CVFrançais.pdf"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                <FileDown className="mr-2 h-5 w-5" />
                Telecharger CV (FR)  
              </a>
            </div>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-1">
          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;