"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: "mdi:brain",
      title: "AI & Machine Learning",
      description: "Custom AI models, natural language processing, computer vision, and predictive analytics solutions.",
      features: ["Deep Learning Models", "NLP Solutions", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: "material-symbols:code",
      title: "Custom Software Development",
      description: "Full-stack web applications, mobile apps, and enterprise software tailored to your business needs.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"]
    },
    {
      icon: "material-symbols:cloud",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, migration services, and DevOps implementation for optimal performance.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps Implementation", "Monitoring & Analytics"]
    },
    {
      icon: "material-symbols:automation",
      title: "Process Automation",
      description: "Intelligent automation solutions to streamline workflows and increase operational efficiency.",
      features: ["Workflow Automation", "RPA Solutions", "Integration Services", "Process Optimization"]
    },
    {
      icon: "material-symbols:analytics",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Custom Dashboards"]
    },
    {
      icon: "material-symbols:support-agent",
      title: "Consulting & Support",
      description: "Strategic technology consulting and ongoing support to ensure your solutions perform optimally.",
      features: ["Technology Strategy", "Architecture Review", "24/7 Support", "Training & Documentation"]
    }
  ];

  const iconStyles = [
    { background: 'linear-gradient(135deg, #6366f1, #3b82f6)' },
  ];


  return (
    <section id="services" className="py-20 bg-[#e6e6f5] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to accelerate your business growth
            and digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Box with Inline Gradient */}
              <div
                className="rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #3b82f6)',
                  width: "64px",
                  height: "64px",
                  padding: "16px",
                  borderRadius: "16px",
                  color: "white",
                }}
              >
                <Icon icon={service.icon} className="w-8 h-8" />
              </div>


              {/* Title and Description */}
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                    <Icon icon="material-symbols:check-circle" className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neutral-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
