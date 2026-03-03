// "use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const coreValues = [
  {
    icon: "mdi:flash",
    title: "AI-first development",
    description:
      "We leverage the latest in artificial intelligence to build smarter, more intuitive products that solve real problems and deliver exceptional value.",
  },
  {
    icon: "mdi:account-group-outline",
    title: "Lean, fast, and founder-led",
    description:
      "Our agile approach minimizes waste while maximizing speed to market. Every project benefits from the direct involvement of experienced founders.",
  },
  {
    icon: "mdi:shield-lock-outline",
    title: "Privacy-first, global-ready",
    description:
      "We build with privacy and security as foundational principles, ensuring our products are ready for global deployment and compliant with regulations.",
  },
];

export default function WhyHyperMindsLabs() {
  return (
    <section id="why" className="py-20 bg-[#fdfbff] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Why HyperMindsLabs?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our core values drive everything we do — from building trust to delivering future-ready solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon={value.icon} className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed text-sm">
                {value.description}
              </p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neutral-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
