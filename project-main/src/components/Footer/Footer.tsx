import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
              SALIK AZEEM
            </h2>
            <p className="text-slate-400 text-sm">
              Creating exceptional digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/salikAzeem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/salik-azeem/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:salikazeem123@gmail.com" 
                className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-slate-500 text-sm flex items-center">
              © {currentYear} Made with <Heart size={14} className="mx-1 text-red-500" /> by Salik Azeem
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
                <li>
                  <a href="#home" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#experience" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">Projects</a>
                </li>
                <li>
                  <a href="#certifications" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">Certifications</a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </nav>
            
            <p className="text-slate-500 text-xs mt-4 md:mt-0 text-center md:text-right">
              All rights reserved. Thank you for visiting my portfolio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;