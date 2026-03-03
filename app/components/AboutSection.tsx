"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-2.5 bg-[#e8f5e6] relative z-10 pb-5.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            About HyperMindsLabs
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed border rounded-lg p-6 shadow-sm">
            HyperMindsLabs is a modern SaaS parent company with a diverse portfolio of innovative products. we're driven by a passion for creating intelligent software that solves real-world problems.

            Our team of experts combines deep technical knowledge with business acumen to build scalable, user-friendly solutions across various industries. We're committed to pushing boundaries, embracing cutting-edge technologies, and delivering exceptional value to our users.
          </p>
        </motion.div>
      </div>
    </section>
  );
}