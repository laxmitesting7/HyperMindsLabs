"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { homedir } from "os";

export default function Footer() {
  const footerLinks = {
    products: [
      { name: "CodeCaptain.dev", href: "https://codecaptain.dev/" },
      { name: "GetInterviewAI.com", href: "https://getinterviewai.com/" },
      { name: "HyperMindsLabs.com", href: "#" }
    ],
    company: [
      // { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Features", href: "#features" },
      { name: "Products", href: "#products" },
      { name: "Services", href: "#services" },

    ]
  };

  return (

    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="flex items-center space-x-2">
                <img
                  src="/image.png"
                  alt="HyperMindsLabs"
                  width={180}
                  height={40}
                  className="object-contain"
                />
              </div>

              <p className="text-neutral-400 leading-relaxed">
                Building intelligent SaaS solutions for a connected world.
                We're dedicated to creating powerful, user-friendly
                products that drive innovation and efficiency.
              </p>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}

              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Address</h3>
              <address className="text-neutral-400 not-italic space-y-2">
                <p>HyperMindsLabs, LLC</p>
                <p>131 Continental Dr</p>
                <p>Suite 305</p>
                <p>Newark, DE 19713</p>
                <p>US</p>
              </address>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-neutral-400 text-sm">
              © 2025 HyperMindsLabs, LLC. All rights reserved.
            </p>
         
          </div>
        </div>
      </div>
    </footer>
  );
}