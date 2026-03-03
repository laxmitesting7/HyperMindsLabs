"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: '#6366f1',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '8px',
  fontWeight: '500',
  fontSize: '14px',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
};

const buttonHoverStyle = {
  backgroundColor: '#4f46e5',
};

const iconStyle = {
  marginLeft: '8px',
  width: '20px',
  height: '20px',
};

const cardStyle = {
  backgroundColor: 'white', 
  borderRadius: '16px', 
  padding: '32px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  transition: 'box-shadow 0.3s ease',
};

const cardHoverStyle = {
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const linkStyle = {
  color: '#6366f1',
  textDecoration: 'none',
};

const linkHoverStyle = {
  color: '#4f46e5'
};

export default function MyProducts() {
  const products = [
    {
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/codecaptain.png" alt="CodeCaptain" style={{ width: '140px', height: 'auto' }} />
        </div>
      ),
      title: "CodeCaptain.dev",
      status: "Coming Soon",
      description: "CodeCaptain is an AI-powered platform that helps makers go from idea to launch 10x faster with AI-powered tools that generate product documentation, tech flows, system prompts, and marketing kits so you can build and ship with clarity. Whether you're an indie hacker, startup founder, or AI developer, CodeCaptain gives you everything you need to plan, build, and launch with confidence.",
      link: "https://codecaptain.dev"
    },
    {
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px', fontWeight: '600', color: '#6366f1', height: '40px', display: 'flex', alignItems: 'center' }}>GetInterviewAI</span>
        </div>
      ),
      title: "GetInterviewAI.com",
      status: "Coming Soon",
      description: "Get Interview AI is the #1 AI-powered interview preparation platform, offering mock interviews, resume building, coding assistance, and AI-driven feedback to help you land your dream job.",
      link: "https://getinterviewai.com"
    }
  ];

  return (
    <section id="products" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
            Featured Products
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280' }}>
            Discover our growing portfolio of innovative SaaS solutions
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={cardStyle}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, cardHoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, cardStyle);
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                {product.logo}
                <span style={{ 
                  padding: '4px 12px', 
                  backgroundColor: '#f3f4f6', 
                  color: '#6b7280',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '9999px'
                }}>
                  {product.status}
                </span>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, linkHoverStyle);
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, linkStyle);
                  }}
                >
                  {product.title}
                </a>
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.625', marginBottom: '24px' }}>
                {product.description}
              </p>
              <button
                onClick={() => window.open(product.link, '_blank')}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, buttonHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, buttonStyle);
                }}
              >
                Learn More
                <Icon icon="material-symbols:arrow-forward-rounded" style={iconStyle} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 