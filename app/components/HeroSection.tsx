"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-[#f5e6d3] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-full text-sm font-medium text-neutral-700"
          >
            <Icon icon="material-symbols:rocket" className="w-4 h-4 mr-2 text-blue-600" />
            Transforming Ideas into Intelligent Solutions
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight"
          >
            Next-Generation
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI & Software Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            We empower businesses with cutting-edge AI technologies and custom software development.
            From machine learning to full-stack applications, we deliver solutions that drive growth and innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >   

          </motion.div>
      
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-100 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-100 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-green-100 rounded-full opacity-20"
          />
        </div>
      </div>
    </section>
  );
}