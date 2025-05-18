import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ExternalLink, Award } from 'lucide-react';

import Hacka from "../../assets/images/Hacka.png";
import Cpp from "../../assets/images/Cpp.png";
import Dsa from "../../assets/images/Dsa.png";
import Cc from "../../assets/images/Cc.png";
import Mooc from "../../assets/images/Mooc.png";
import Reactimg from "../../assets/images/Reactimg.png";



import cpp from "../../assets/docs/cpp.pdf";
import cc from "../../assets/docs/cc.pdf";
import dsaGFGPDF from "../../assets/docs/salik DSA.pdf";
import react from "../../assets/docs/React.pdf";
import hackathon from "../../assets/docs/Hackathon salik.pdf";
import mooc from "../../assets/docs/mooc.pdf";



interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
  pdfUrl: string;
  skills: string[];
}

const certificationsData: Certification[] = [
  {
    id: 1,
    title: "DSA Self Paced Course",
    issuer: "GeeksforGeeks",
    date: "July, 2024",
    image: Dsa,
    credentialUrl: "https://media.geeksforgeeks.org/courses/certificates/b75f9ee7e8d9bf06717f83e4d42826b4.pdf",
    pdfUrl: dsaGFGPDF,
    skills: ["Data Structures", "Algorithms", "Problem Solving"]
  },
  {
    id: 2,
    title: "React Bootcamp",
    issuer: "UpGrad",
    date: "Feb, 2025",
    image: Reactimg, // e.g. reactBootcampImg
    credentialUrl: "not there",
    pdfUrl: react,
    skills: ["React", "JSX", "State Management"]
  },
  {
    id: 3,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Jul-Oct, 2024",
    image: Cc,
    credentialUrl:"NOt there",
    pdfUrl: cc,
    skills: ["AWS", "Virtualization", "Cloud Services"]
  },
  {
    id: 4,
    title: "CTF Hackathon",
    issuer: "UpGrad Campus",
    date: "April, 2024",
    image: Hacka,
    credentialUrl: "not there",
    pdfUrl: hackathon,
    skills: ["Ethical Hacking", "Cybersecurity", "Teamwork"]
  },
  {
    id: 5,
    title: "SQL for Data Science",
    issuer: "Great Learning",
    date: "Feb, 2023",
    image: Mooc,
    credentialUrl: "REPLACE_WITH_CREDENTIAL_LINK",
    pdfUrl: mooc,
    skills: ["SQL", "Data Queries", "Data Manipulation"]
  },
  {
    id: 6,
    title: "Programming in C++",
    issuer: "Coursera",
    date: "Mar, 2024",
    image: Cpp,
    credentialUrl: "not there",
    pdfUrl: cpp,
    skills: ["C++", "Object-Oriented Programming", "Memory Management"]
  }
];


const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and courses I've completed
          </p>
        </motion.div>

        {/* Certifications Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificationsData.map((certification) => (
            <motion.div
              key={certification.id}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-soft transition-all duration-300 hover:shadow-soft-lg border border-slate-100 dark:border-slate-700 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {certification.date}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start mb-3">
                  <Award className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1 flex-shrink-0" size={20} />
                  <h3 className="heading-sm text-slate-900 dark:text-white">
                    {certification.title}
                  </h3>
                </div>

                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                  {certification.issuer}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {certification.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-50 dark:bg-slate-700 px-2 py-1 rounded-md text-xs font-medium text-indigo-600 dark:text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex space-x-3">
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline flex-1 py-2 flex items-center justify-center text-sm text-slate-700 dark:text-slate-300"
                  >
                    View Credential <ExternalLink size={14} className="ml-1.5" />
                  </a>
                  <a
                    href={certification.pdfUrl}
                    download
                    className="btn btn-primary flex-1 py-2 flex items-center justify-center text-sm"
                  >
                    Download <Download size={14} className="ml-1.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
