import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import WhyLabelSafe from '../components/WhyLabelSafe';
import Privacy from '../components/Privacy';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  // Simple scroll observation for fade-in effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        <Screenshots />
        <WhyLabelSafe />
        <Privacy />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
