import React from 'react';
import { motion } from 'framer-motion'; // npm install framer-motion

const Dashboard = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col justify-center items-center p-4">

      {/* Animated Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Study Notion!!
      </motion.h1>

      {/* Animated Paragraphs */}
      <motion.p
        className="text-gray-300 text-sm md:text-base text-center max-w-xs mb-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Explore our newest courses in React, Node.js, and Full-Stack Development.
      </motion.p>

      <motion.p
        className="text-gray-400 text-sm md:text-base text-center max-w-xs"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Start learning today and build real-world projects with hands-on tutorials.
      </motion.p>

    </div>
  );
};

export default Dashboard;
