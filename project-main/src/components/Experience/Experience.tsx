import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Medical and Health Care in Tribal and Rural Areas Project",
    company: "Faith Evangelical Ministries",
    location: "Remote / On-field",
    period: "10 June 2023 - 10 July 2023",
    description: [
      "Contributed to healthcare initiatives in tribal and rural areas through a non-governmental organization (NGO).",
      "Participated in efforts to provide essential medical and health care services to underprivileged communities.",
      "Worked collaboratively with teams across different regions, promoting unity and readiness to serve where needed.",
      "Supported nonprofit initiatives focused on community welfare and health improvement."
    ],
    skills: ["Community Service", "Healthcare Assistance", "Team Collaboration", "Nonprofit Work"]
  },
  {
    id: 2,
    title: "Summer Internship - Data Structures and Algorithms",
    company: "GeeksforGeeks",
    location: "Remote",
    period: "June 2024 - July 2024",
    description: [
      "Completed an intensive 8-week internship focused on mastering Data Structures and Algorithms (DSA).",
      "Solved complex problems involving arrays, linked lists, trees, graphs, and dynamic programming.",
      "Enhanced problem-solving skills and coding proficiency through structured learning and assessments.",
      "Practiced writing efficient and optimized code in real-world coding environments and competitions."
    ],
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Competitive Programming", "Coding Best Practices"]
  }
];


const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">My professional journey and career highlights</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-3 md:left-1/2 md:-ml-0.5 h-full w-0.5 bg-indigo-100 dark:bg-slate-700"></div>

          {/* Experience Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-3 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-500 shadow-lg flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-soft transition-all duration-300 hover:shadow-soft-lg border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center mb-2">
                      <Briefcase size={18} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h3 className="heading-sm text-slate-900 dark:text-white">{item.title}</h3>
                    </div>
                    <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                      {item.company}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">{item.location}</p>
                    <div className="flex items-center text-slate-500 dark:text-slate-500 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {item.description.map((desc, i) => (
                        <p key={i} className="text-slate-700 dark:text-slate-300 text-sm">
                          • {desc}
                        </p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="bg-indigo-50 dark:bg-slate-700 px-2 py-1 rounded-md text-xs font-medium text-indigo-600 dark:text-indigo-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty div for layout in alternating */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;