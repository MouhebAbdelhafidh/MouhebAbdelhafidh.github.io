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
              <div className="font-bold text-2xl mb-4">Mouheb<span className="text-indigo-400"> Abdelhafidh</span></div>
              <p className="text-gray-400 mb-6 max-w-md">
                Final-year engineering student curious about AI agents,
                computer vision and deep learning. I develop intelligent systems that leverage
                data-driven insights to address complex challenges.
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
                  <span className="block">Email: mouheb.abdelhafidh@esprit.tn</span>
                </li>
                <li className="text-gray-400">
                  <span className="block">Phone: +216 - 28 053 250</span>
                </li>
                <li className="text-gray-400">
                  <span className="block">Ariana, Tunisia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;