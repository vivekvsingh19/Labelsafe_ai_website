import React from 'react';
import { Quote } from 'lucide-react';

const WhyLabelSafe: React.FC = () => {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
         <div className="text-center mb-16 md:w-2/3 mx-auto">
            <span className="text-xs tracking-[0.2em] text-secondary uppercase mb-4 block">Voices from the Community</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">Real people. Real impact.</h2>
            <p className="text-secondary text-lg font-light leading-relaxed">
              Navigating the grocery store shouldn't require a chemistry degree. Here is why thousands of people are switching to LabelSafe.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-background p-10 rounded-3xl border border-border relative hover:translate-y-[-5px] transition-transform duration-300 shadow-sm hover:shadow-md">
               <Quote className="text-terracotta/20 absolute top-8 right-8" size={40} />
               <p className="text-primary text-lg leading-relaxed mb-8 font-medium">"I used to be confused by 'natural flavors' and chemical names. LabelSafe tells me exactly what they are and if I should worry. It's a game changer."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-highlight border border-border flex items-center justify-center text-sm font-bold text-secondary">SJ</div>
                  <div>
                     <div className="text-sm font-bold text-primary">Sarah Jenkins</div>
                     <div className="text-xs text-secondary tracking-wide">Beta Tester</div>
                  </div>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-background p-10 rounded-3xl border border-border relative hover:translate-y-[-5px] transition-transform duration-300 shadow-sm hover:shadow-md">
               <Quote className="text-terracotta/20 absolute top-8 right-8" size={40} />
               <p className="text-primary text-lg leading-relaxed mb-8 font-medium">"As a mom, I want to keep ultra-processed foods out of my house. This app makes it instant and easy to check everything before it goes in the cart."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-highlight border border-border flex items-center justify-center text-sm font-bold text-secondary">MT</div>
                  <div>
                     <div className="text-sm font-bold text-primary">Michael Torres</div>
                     <div className="text-xs text-secondary tracking-wide">Parent</div>
                  </div>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-background p-10 rounded-3xl border border-border relative hover:translate-y-[-5px] transition-transform duration-300 shadow-sm hover:shadow-md">
               <Quote className="text-terracotta/20 absolute top-8 right-8" size={40} />
               <p className="text-primary text-lg leading-relaxed mb-8 font-medium">"Finally, a food scanner that focuses on health quality, not just calories. It's helped me lower my inflammation significantly."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-highlight border border-border flex items-center justify-center text-sm font-bold text-secondary">ER</div>
                  <div>
                     <div className="text-sm font-bold text-primary">Dr. Emily Ross</div>
                     <div className="text-xs text-secondary tracking-wide">Functional Medicine</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default WhyLabelSafe;