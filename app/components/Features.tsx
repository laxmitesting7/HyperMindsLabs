"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: "ph:lightning-fill",
      title: "SaaS Product Incubation",
      subtitle: "From Concept to Global Market Leadership",
      description: "Transform your innovative ideas into market-ready SaaS solutions with our comprehensive incubation program. We guide startups and enterprises through every stage of product development, from initial concept validation to global market penetration. Our proven methodology combines lean startup principles with enterprise-grade architecture, ensuring your product scales seamlessly from MVP to millions of users.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: "ph:code-bold",
      title: "AI MVP Building",
      subtitle: "Rapid Prototyping Powered by Cutting-Edge AI",
      description: "Accelerate your time-to-market with our AI-enhanced MVP development process. We leverage GPT models, open APIs, and advanced automation tools to build functional, scalable prototypes in weeks, not months. Our approach combines human creativity with AI efficiency, delivering MVPs that not only validate your concept but are production-ready from day one.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: "ph:users-three-fill",
      title: "Internal Tooling for Enterprises",
      subtitle: "Custom Solutions That Transform Operations",
      description: "Streamline your business operations with bespoke internal tools designed specifically for your enterprise needs. We create intuitive dashboards, automated workflow systems, and intelligent automation solutions that eliminate bottlenecks, reduce manual work, and empower your teams to focus on high-value activities.",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: "ph:squares-four-fill",
      title: "White-labeled SaaS Solutions",
      subtitle: "Your Brand, Our Expertise",
      description: "Launch your own SaaS product without the development overhead. Our white-label solutions provide fully customizable, enterprise-grade software that you can rebrand and sell as your own. Perfect for agencies, consultants, and businesses looking to expand their service offerings with proven, reliable technology.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#faf6f2] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            What We Do at HyperMindsLabs
          </h2>
          <p className="text-lg text-blue-600 mb-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              HyperMindsLabs.com
            </a>{" "}
            — Powering the Future of SaaS
          </p>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build our own world-class SaaS products — we also help other startups, founders, and enterprise clients bring their software ideas to life.
          </p>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mt-4">
            Whether you're launching a new AI-powered MVP, streamlining your internal operations, or scaling an existing platform, HyperMindsLabs offers expert product strategy, rapid prototyping, and end-to-end development support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-neutral-200/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon icon={feature.icon} className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900">{feature.title}</h3>
                  <h4 className="text-lg font-medium text-blue-600 mt-1">{feature.subtitle}</h4>
                  <p className="text-neutral-600 mt-3 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 