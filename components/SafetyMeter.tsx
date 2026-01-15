import React from 'react';

const SafetyMeter: React.FC = () => {
  return (
    <section className="py-32 bg-surface relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        <div className="md:w-1/2">
           <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-8">
             10 Million Products.<br/>
             One Standard.
           </h2>
           <p className="text-secondary font-light leading-relaxed mb-8 max-w-md">
             We have built the definitive library of food additives. From common preservatives to obscure chemical compounds, LabelSafe knows what's really in your food.
           </p>
           
           <div className="flex gap-8">
              <div>
                 <div className="text-3xl font-serif text-primary mb-1">10k+</div>
                 <div className="text-xs text-secondary uppercase tracking-widest">Additives</div>
              </div>
              <div>
                 <div className="text-3xl font-serif text-primary mb-1">0.2s</div>
                 <div className="text-xs text-secondary uppercase tracking-widest">Scan Time</div>
              </div>
           </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
             <div className="relative w-72 h-72 rounded-full border border-border flex items-center justify-center bg-background shadow-xl dark:shadow-none">
                <div className="text-center">
                   <div className="font-serif text-7xl text-primary">98</div>
                   <div className="text-secondary text-sm mt-2 tracking-widest uppercase">Safety Score</div>
                </div>
                {/* Decorative Orbit */}
                <div className="absolute w-full h-full rounded-full border border-border animate-[spin_10s_linear_infinite]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full"></div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default SafetyMeter;