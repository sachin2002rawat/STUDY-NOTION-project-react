import React from 'react';
import { motion } from 'framer-motion'; // Install framer-motion: npm install framer-motion

const About = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-800 to-purple-700 flex flex-col justify-center items-center p-4 overflow-hidden">
      
      {/* Animated Heading */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-white mb-2 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Study Notion
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-white text-sm text-center max-w-xs mb-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Study Notion is a coding and full-stack learning platform. Learn frontend and backend technologies with small hands-on projects.
      </motion.p>

      {/* Animated Cards */}
      <motion.div
        className="bg-white rounded-lg shadow-md p-3 max-w-xs w-full mb-2 cursor-pointer hover:scale-105 transition-transform duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-1">What You Learn</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>HTML & CSS</li>
          <li>JavaScript & React</li>
          <li>Node.js & Databases</li>
        </ul>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg shadow-md p-3 max-w-xs w-full mb-2 cursor-pointer hover:scale-105 transition-transform duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Why Study Notion</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Hands-on projects</li>
          <li>Step-by-step tutorials</li>
          <li>Real-world coding skills</li>
        </ul>
      </motion.div>

      <motion.p
        className="text-white mt-2 text-center max-w-xs text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Start learning coding today and build skills that matter.
      </motion.p>

    </div>
  );
};

export default About;
