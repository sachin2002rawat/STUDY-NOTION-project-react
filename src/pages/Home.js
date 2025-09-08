import React from 'react';
import { motion } from 'framer-motion'; // npm install framer-motion

const Home = ({ isLoggedIn }) => {
  return (
    <div className="h-screen bg-gradient-to-r from-teal-600 to-cyan-500 flex flex-col justify-center items-center p-4 overflow-hidden">

      {/* Animated Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Study Notion
      </motion.h1>

      {/* Animated Paragraphs */}
      <motion.p
        className="text-white text-sm md:text-base text-center max-w-xs mb-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {isLoggedIn 
          ? "Glad to see you back! Explore coding projects and full-stack tutorials." 
          : "Learn coding and full-stack development with hands-on projects and step-by-step tutorials."}
      </motion.p>

      <motion.p
        className="text-white text-sm md:text-base text-center max-w-xs mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Study Notion helps you master frontend and backend technologies while building real-world projects. It's designed for learners of all levels.
      </motion.p>

      {/* Animated Single Card */}
      <motion.div
        className="bg-white rounded-lg shadow-md p-4 max-w-xs w-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">Get Started</h2>
        <p className="text-gray-700 text-sm text-center">
          {isLoggedIn 
            ? "Continue your learning journey now!" 
            : "Sign up and start coding today!"}
        </p>
      </motion.div>

    </div>
  );
};

export default Home;
