import React from 'react';
import { ChevronDown, ArrowRight, Smartphone } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContent = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{
               backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
               backgroundSize: '40px 40px',
               opacity: 0.4
           }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        
        {/* Main Heading */}
        <h1 className="font-serif text-6xl md:text-8xl text-black leading-[0.95] mb-4 tracking-tight animate-slide-up">
          Don't just eat.
        </h1>
        <h1 className="font-serif text-6xl md:text-8xl text-terracotta leading-[0.95] mb-8 tracking-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
          Understand.
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
          Scan any ingredient label to reveal hidden additives, measure processing levels, and make choices that align with your biology. <br className="hidden md:block"/>
          No more confusion in the grocery aisle.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 mb-24 animate-slide-up" style={{animationDelay: '0.3s'}}>
           <div className="flex flex-col sm:flex-row gap-4">
               <button onClick={scrollToWaitlist} className="bg-black text-white px-8 py-3.5 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-xl shadow-black/10">
                  <span className="font-medium text-lg">Get Early Access</span>
                  <ArrowRight size={20} />
               </button>
               <button onClick={scrollToContent} className="px-8 py-3.5 rounded-full bg-white border border-gray-200 text-black font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
                  How it works <ChevronDown size={16} />
               </button>
           </div>
           <p className="text-xs text-gray-400 font-medium tracking-wide flex items-center gap-1.5">
             <Smartphone size={12} /> Launching on Google Play first
           </p>
        </div>

        {/* 3-Phone Layout */}
        <div className="relative w-full max-w-[1000px] mx-auto h-[560px] sm:h-[640px] md:h-[700px] flex justify-center items-start animate-slide-up perspective-1000" style={{animationDelay: '0.6s'}}>
           
           {/* Left Phone - Tilted */}
           <div className="hidden md:block absolute left-[5%] top-[10%] transform -rotate-6 scale-90 opacity-90 hover:opacity-100 transition-all duration-700 hover:z-20 hover:scale-95">
              <PhoneMockup screen="scan" className="shadow-2xl shadow-black/10" />
           </div>

           {/* Center Phone - Straight & Prominent */}
           <div className="absolute top-0 z-10 transform scale-[0.8] sm:scale-90 md:scale-100 origin-top hover:scale-[0.85] sm:hover:scale-[0.95] md:hover:scale-105 transition-transform duration-700">
              <PhoneMockup screen="result" className="shadow-2xl shadow-black/20" />
           </div>

           {/* Right Phone - Tilted */}
           <div className="hidden md:block absolute right-[5%] top-[10%] transform rotate-6 scale-90 opacity-90 hover:opacity-100 transition-all duration-700 hover:z-20 hover:scale-95">
              <PhoneMockup screen="history" className="shadow-2xl shadow-black/10" />
           </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;