import React from 'react';
import { motion } from 'framer-motion'; // npm install framer-motion

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-600 to-cyan-500 flex 
flex-col justify-center items-center p-4">

      {/* Animated Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-white text-sm md:text-base mb-6 text-center max-w-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Have questions or want to collaborate? Fill out the form below and we'll get back to you soon.
      </motion.p>

      {/* Animated Form */}
      <motion.form
        className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
          />
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Your Message"
            rows="3"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md transition duration-300 text-sm"
        >
          Send
        </button>
      </motion.form>

      {/* Footer Text */}
      <motion.p
        className="text-white mt-4 text-xs text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Or email us at <span className="underline">contact@yourdomain.com</span>
      </motion.p>

    </div>
  );
};

export default Contact;
