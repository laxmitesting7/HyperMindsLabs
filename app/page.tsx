"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Features from "./components/Features";
import MyProducts from "./components/MyProducts";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import WhyHyperMindsLabs from "./components/WhyHyperMindsLabs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div style={{ background: 'linear-gradient(174.2deg, rgb(245, 237, 225) 7.1%, rgb(247, 253, 247) 67.4%)' }}>
        <HeroSection />
      </div>
      <div style={{ backgroundColor: '#ffffff' }}>
        <AboutSection />
      </div>
      <div style={{ backgroundColor: '#fffdf8' }}>
        <Features />
      </div>
      <div style={{ backgroundColor: '#ffffff' }}>
        <MyProducts />
      </div>
      <div style={{ backgroundColor: '#fffdf8' }}>
        <ServicesSection />
      </div>
      <div style={{ backgroundColor: '#ffffff' }}>
        <WhyHyperMindsLabs />
      </div>
      {/* <div style={{ backgroundColor: '#f5f3ff' }}>
        <ContactSection />
      </div> */}
      <Footer />
    </div>
  );
}