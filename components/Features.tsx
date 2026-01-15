import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#F5F5F7] relative overflow-hidden">
        
        {/* Background Marquee */}
        <div className="absolute top-0 left-0 right-0 opacity-[0.02] text-8xl md:text-9xl font-bold whitespace-nowrap pointer-events-none select-none font-serif leading-tight">
             <div className="animate-marquee inline-block">
                RED 40 • HIGH FRUCTOSE CORN SYRUP • TITANIUM DIOXIDE • ASPARTAME • SODIUM BENZOATE • CARRAGEENAN • 
             </div>
             <div className="animate-marquee inline-block" aria-hidden="true">
                RED 40 • HIGH FRUCTOSE CORN SYRUP • TITANIUM DIOXIDE • ASPARTAME • SODIUM BENZOATE • CARRAGEENAN • 
             </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
             
             {/* Header */}
             <div className="mb-20 max-w-2xl">
                 <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[1px] bg-terracotta"></span>
                    <span className="text-xs tracking-[0.2em] text-terracotta uppercase font-semibold">Mission</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">
                    Food transparency,<br/> perfected.
                 </h2>
                 <p className="text-gray-500 text-lg leading-relaxed">
                    We believe you have the right to know exactly what goes into your body. LabelSafe cuts through the marketing hype to show you the biological reality of your food.
                 </p>
             </div>

             {/* 3-Column Grid */}
             <div className="grid md:grid-cols-3 gap-8">
                 
                 {/* Card 1: Ingredient X-Ray */}
                 <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full border border-gray-100 overflow-hidden group hover:-translate-y-1">
                     {/* Visual Container */}
                     <div className="h-48 bg-gray-50 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center border border-gray-100/50">
                         {/* CSS Illustration: Barcode Scan */}
                         <div className="flex gap-2 opacity-10 group-hover:opacity-20 transition-opacity">
                             {[4, 2, 5, 2, 3, 6, 2, 4].map((w, i) => (
                                <div key={i} className="bg-black h-16 rounded-full" style={{width: `${w * 2}px`}}></div>
                             ))}
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terracotta/20 to-transparent h-[40px] w-full animate-scan-vertical blur-sm"></div>
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terracotta/40 to-transparent h-[2px] w-full animate-scan-vertical shadow-[0_0_15px_rgba(207,117,86,0.5)]"></div>
                     </div>
                     <h3 className="text-2xl font-serif mb-3 text-black">Ingredient X-Ray</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">
                        Instantly detect E-numbers, preservatives, and hidden sugars masked by technical jargon. We read the fine print so you don't have to.
                     </p>
                 </div>

                 {/* Card 2: Metabolic Score */}
                 <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full border border-gray-100 overflow-hidden group hover:-translate-y-1">
                     {/* Visual Container */}
                     <div className="h-48 bg-gray-50 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center border border-gray-100/50">
                         {/* CSS Illustration: Score Circle */}
                         <div className="w-24 h-24 rounded-full border-[3px] border-gray-100 relative flex items-center justify-center">
                              <div className="text-3xl font-serif font-bold text-black group-hover:scale-110 transition-transform duration-500">98</div>
                              <svg className="absolute inset-0 transform -rotate-90 w-full h-full p-[2px]" width="96" height="96" viewBox="0 0 96 96">
                                  <circle cx="48" cy="48" r="44" stroke="#CF7556" strokeWidth="3" fill="transparent" strokeDasharray="276" strokeDashoffset="276" className="group-hover:stroke-dash-0 transition-all duration-[1.5s] ease-out" style={{strokeDashoffset: 40, strokeLinecap: 'round'}} />
                              </svg>
                         </div>
                     </div>
                     <h3 className="text-2xl font-serif mb-3 text-black">Purity Score</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">
                        A science-backed rating that assesses insulin response, inflammation risk, and processing level—going far beyond simple calorie counting.
                     </p>
                 </div>

                 {/* Card 3: Privacy */}
                 <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full border border-gray-100 overflow-hidden group hover:-translate-y-1">
                     {/* Visual Container */}
                     <div className="h-48 bg-gray-50 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center border border-gray-100/50">
                          {/* CSS Illustration: Shield */}
                          <div className="relative flex items-center justify-center">
                              <div className="absolute w-20 h-20 bg-terracotta/5 rounded-full animate-pulse-slow"></div>
                              <div className="relative z-10 w-12 h-14 border-[3px] border-gray-200 rounded-b-2xl rounded-t-lg flex items-center justify-center group-hover:border-terracotta transition-colors duration-500 bg-white">
                                  <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-terracotta transition-colors duration-500 shadow-sm"></div>
                              </div>
                          </div>
                     </div>
                     <h3 className="text-2xl font-serif mb-3 text-black">Privacy First</h3>
                     <p className="text-gray-500 leading-relaxed text-sm">
                        Your health data stays on your device. No ads, no data selling, no addictive gamification. Just a private tool for your personal health journey.
                     </p>
                 </div>

             </div>
        </div>
    </section>
  );
};

export default Features;