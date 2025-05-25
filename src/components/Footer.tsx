import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-bold text-2xl mb-4">Mouheb<span className="text-indigo-400">.dev</span></div>
              <p className="text-gray-400 mb-6 max-w-md">
                Data scientist and machine learning engineer specializing in building intelligent systems
                that solve real-world problems through data-driven approaches.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-indigo-400 transition-colors">Blog</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email: hello@mouheb.dev</span>
                </li>
                <li className="text-gray-400">
                  <span className="block">Phone: +1 (123) 456-7890</span>
                </li>
                <li className="text-gray-400">
                  <span className="block">San Francisco, California</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mouheb. All rights reserved.
            </p>
            
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Built with 
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              using React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;