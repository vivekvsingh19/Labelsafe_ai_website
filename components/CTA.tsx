import React, { useState } from 'react';
import { ArrowRight, Loader2, Coffee, Smartphone, CheckCircle2, Gift, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
   const [email, setEmail] = useState('');
   const [submitted, setSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (email) {
         setIsLoading(true);

         const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;

         if (!sheetUrl) {
            console.warn("VITE_GOOGLE_SHEET_URL is not set. Simulating submission.");
            // Simulate network request
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsLoading(false);
            setSubmitted(true);
            return;
         }

         try {
            // We use mode: 'no-cors' to avoid CORS issues with Google Apps Script
            // This means we won't get a readable response, but the data will be sent.
            await fetch(sheetUrl, {
               method: 'POST',
               mode: 'no-cors',
               headers: {
                  'Content-Type': 'text/plain', // Avoids preflight OPTIONS
               },
               body: JSON.stringify({ email })
            });

            setSubmitted(true);
         } catch (error) {
            console.error("Error submitting to waitlist:", error);
            // In a real app we might show an error state, but for now we fallback
            // or just alert. Since no-cors hides errors, this catch is for network failures.
            alert("There was an issue joining the waitlist. Please try again.");
         } finally {
            setIsLoading(false);
         }
      }
   };

   return (
      <section id="waitlist" className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">

         <div className="max-w-6xl mx-auto px-6 relative z-10">

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

               {/* Android / Waitlist Column */}
               <div className="text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium tracking-wide mb-8">
                     <Smartphone size={14} />
                     <span>Android First</span>
                  </div>

                  <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
                     Join the <br /> <span className="text-terracotta">Android Waitlist.</span>
                  </h2>

                  <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md font-light">
                     LabelSafe is arriving soon on Google Play. Be the first to scan, analyze, and eat with intention.
                  </p>

                  {/* Discount Badge */}
                  <div className="flex items-center gap-3 mb-10 bg-terracotta/10 border border-terracotta/20 rounded-xl p-4 max-w-md">
                     <div className="bg-terracotta/20 p-2 rounded-full text-terracotta">
                        <Gift size={20} />
                     </div>
                     <div>
                        <div className="text-terracotta font-medium text-sm">Waitlist Exclusive</div>
                        <div className="text-white/90 text-sm">Get <span className="font-bold text-white">50% OFF</span> the Lifetime Plan at launch.</div>
                     </div>
                  </div>

                  {/* Minimal Form */}
                  <div className="max-w-md">
                     {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                           <div className="relative flex-grow">
                              <input
                                 type="email"
                                 placeholder="Enter your email"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 className="w-full h-14 px-6 bg-[#111111] border border-white/10 rounded-full text-white placeholder:text-gray-600 focus:outline-none focus:border-terracotta/50 focus:bg-[#151515] transition-all"
                                 required
                                 disabled={isLoading}
                              />
                           </div>
                           <button
                              type="submit"
                              disabled={isLoading}
                              className="h-14 px-8 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap"
                           >
                              {isLoading ? <Loader2 className="animate-spin" /> : <>Join List <ArrowRight size={18} /></>}
                           </button>
                        </form>
                     ) : (
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 animate-fade-in">
                           <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 size={20} />
                           </div>
                           <div>
                              <h3 className="font-medium text-white">You're on the list!</h3>
                              <p className="text-sm text-gray-500">Discount secured. We'll notify you soon.</p>
                           </div>
                        </div>
                     )}
                     <p className="text-xs text-gray-600 mt-4 pl-4">No spam. Unsubscribe anytime.</p>
                  </div>
               </div>

               {/* iOS / Support Column - Card Style */}
               <div className="relative">
                  <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-white/10 transition-colors group">

                     <div className="flex items-center justify-between mb-8">
                        <h3 className="font-serif text-3xl text-white">Waiting for iOS?</h3>
                        <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded text-white/50">INDIE</span>
                     </div>

                     <p className="text-gray-400 mb-8 leading-relaxed font-light">
                        I am a student developer building LabelSafe. Bringing this to the App Store requires a developer license that is currently out of my student budget.
                     </p>

                     <div className="flex items-start gap-4 mb-8">
                        <img
                           src="https://i.pinimg.com/736x/89/61/47/8961479176aa5eab4a8c0f2cbf46024e.jpg"
                           className="w-12 h-12 rounded-full border border-white/10 object-cover flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                           alt="Vivek"
                        />
                        <div className="space-y-2">
                           <div className="relative">
                              <span className="absolute -left-3 -top-1 text-terracotta text-xl">"</span>
                              <p className="text-sm text-gray-300 italic leading-relaxed">
                                 Help me pay the Apple Developer fee, and I'll gift you a <span className="text-white font-medium bg-white/10 px-1 rounded">Lifetime Premium License</span> as a massive thank you.
                              </p>
                           </div>
                           <div className="text-xs font-medium text-gray-500">— Vivek, Student Developer</div>
                        </div>
                     </div>

                     <a
                        href="https://buymeacoffee.com/vivekvsingh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#FFDD00] hover:bg-[#FFEA00] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] shadow-lg shadow-yellow-900/10"
                     >
                        <Coffee size={20} className="fill-black/10" />
                        <span>Fuel the Launch & Get Premium</span>
                     </a>

                     <div className="mt-4 flex justify-center text-xs text-gray-500 items-center gap-2">
                        <Sparkles size={12} className="text-[#FFDD00]" />
                        <span>Special reward for every supporter</span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default CTA;