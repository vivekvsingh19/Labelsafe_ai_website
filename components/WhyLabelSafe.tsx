import React from 'react';
import { Quote } from 'lucide-react';

const WhyLabelSafe: React.FC = () => {
   return (
      <section className="py-32 bg-surface relative overflow-hidden">
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 md:w-2/3 mx-auto">
               <span className="text-xs tracking-[0.2em] text-secondary uppercase mb-4 block">Voices from the Waitlist</span>
               <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">Why people are waiting.</h2>
               <p className="text-secondary text-lg font-light leading-relaxed">
                  Navigating the grocery store shouldn't require a chemistry degree. Here is why thousands are signing up for early access.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="bg-background p-10 rounded-3xl border border-border relative hover:translate-y-[-5px] transition-transform duration-300 shadow-sm hover:shadow-md">
                  <Quote className="text-terracotta/20 absolute top-8 right-8" size={40} />
                  <p className="text-primary text-lg leading-relaxed mb-8 font-medium">"I'm tired of being confused by 'natural flavors' and chemical names. I signed up because I finally want to know what I'm eating without guessing."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-surface-highlight border border-border flex items-center justify-center text-sm font-bold text-secondary">SJ</div>
                     <div>
                        <div className="text-sm font-bold text-primary">Sarah Jenkins</div>
                     </div>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="bg-background p-10 rounded-3xl border border-border relative hover:translate-y-[-5px] transition-transform duration-300 shadow-sm hover:shadow-md">
                  <Quote className="text-terracotta/20 absolute top-8 right-8" size={40} />
                  <p className="text-primary text-lg leading-relaxed mb-8 font-medium">"Keeping ultra-processed foods away from my family is a priority. I can't wait for an app that scans everything instantly before it goes in the cart."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-surface-highlight border border-border flex items-center justify-center text-sm font-bold text-secondary">MT</div>
                     <div>
                        <div className="text-sm font-bold text-primary">Maria Torres</div>
                     </div>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="bg-background p-10 rounded-3xl border border-border relative hover:translate-y-[-5px] transition-transform duration-300 shadow-sm hover:shadow-md">
                  <Quote className="text-terracotta/20 absolute top-8 right-8" size={40} />
                  <p className="text-primary text-lg leading-relaxed mb-8 font-medium">"Most apps purely count calories. I'm excited for a tool that finally identifies the inflammatory ingredients that actually impact metabolic health."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-surface-highlight border border-border flex items-center justify-center text-sm font-bold text-secondary">ER</div>
                     <div>
                        <div className="text-sm font-bold text-primary">Dr. Emily Ross</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhyLabelSafe;