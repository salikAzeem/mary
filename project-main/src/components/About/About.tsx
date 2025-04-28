import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Code } from 'lucide-react';
import aboutImage from '../../assets/images/about.jpg';
import resume from '../../assets/docs/resume.pdf';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skills = ['C++', 'Excel', 'Tableau', 'Java', 'HTML5', 'CSS3'];

  return (
    <section id="about" className="section-padding bg-slate-100 dark:bg-slate-800/40">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Get to know more about me and what I do
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-40 blur"></div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="About me"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={itemVariants} className="heading-md mb-4 text-slate-900 dark:text-white">
              Who I Am
            </motion.h3>
            <motion.p variants={itemVariants} className="text-slate-700 dark:text-slate-300 mb-4">
              I'm a passionate data scientist with a strong background in analyzing complex data, building predictive models, and delivering actionable insights. With 5+ years of experience, I specialize in creating data-driven solutions that combine statistical rigor with real-world impact.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-700 dark:text-slate-300 mb-6">
              I'm continuously learning and adapting to new tools and methodologies in the ever-evolving field of data science. My goal is to transform raw data into meaningful insights that drive intelligent decision-making and create tangible value.
            </motion.p>

            {/* Services */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-soft text-center">
                <Code className="text-indigo-600 dark:text-indigo-400 mb-2 mx-auto" size={24} />
                <h4 className="font-semibold mb-1">Data Scientist</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Custom data-driven applications and dashboards
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="heading-sm mb-4 text-slate-900 dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full text-sm font-medium text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div variants={itemVariants}>
              <a
                href={resume}
                download
                className="btn btn-primary flex items-center"
              >
                Download CV <Download size={18} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
