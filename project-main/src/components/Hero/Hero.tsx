import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/images/hero.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-36 md:pb-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="w-full md:w-3/5 md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-indigo-600 dark:text-indigo-400 font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="heading-xl mb-4 text-slate-900 dark:text-slate-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              SALIK AZEEM
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                Full-Stack Web-Developer
              </span>
            </motion.p>
            <motion.p 
              className="text-slate-600 dark:text-slate-400 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Building bridges between Front-end and Back-end.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get in touch <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#about" className="btn btn-outline">
                Learn more
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a 
                href="https://github.com/salikAzeem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/salik-azeem/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:salikazeem123@gmail.com" 
                className="p-2 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="w-full md:w-2/5 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 blur"></div>
              <div className="relative rounded-lg overflow-hidden border-2 border-white dark:border-slate-800">
                <img 
                  src={heroImage} 
                  alt="Portrait" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
