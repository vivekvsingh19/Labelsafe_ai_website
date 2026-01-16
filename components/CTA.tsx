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

         const waitlistUrl = import.meta.env.VITE_WAITLIST_URL;

         if (!waitlistUrl) {
            console.warn("VITE_WAITLIST_URL is not set. Simulating submission.");
            // Simulate network request
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsLoading(false);
            setSubmitted(true);
            return;
         }

         try {
            const response = await fetch(waitlistUrl, {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
               },
               body: JSON.stringify({ email })
            });

            if (response.ok) {
               setSubmitted(true);
            } else {
               const data = await response.json().catch(() => ({}));
               console.error("Submission failed", data);
               alert("Something went wrong. Please try again.");
            }
         } catch (error) {
            console.error("Error submitting to waitlist:", error);
            alert("There was an issue joining the waitlist. Please check your connection.");
         } finally {
            setIsLoading(false);
         }
      }
   };

   return (
      <section id="waitlist" className="relative py-32 bg-[#050505] text-white overflow-hidden border-t border-white/5">

         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

         <div className="max-w-6xl mx-auto px-6 relative z-10">

            <div className="grid lg:grid-cols-2 gap-20 items-start">

               {/* Left Column: Android Waitlist */}
               <div className="flex flex-col justify-center h-full pt-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold tracking-wide mb-8 w-fit backdrop-blur-sm">
                     <Smartphone size={14} className="text-terracotta" />
                     <span>FIRST ON ANDROID</span>
                  </div>

                  <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-[1.05] tracking-tight">
                     Join the <br /> <span className="italic text-terracotta relative">
                        waitlist.
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-terracotta opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                           <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                     </span>
                  </h2>

                  <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg font-light">
                     LabelSafe is arriving soon on Google Play. Be the first to scan, analyze, and eat with intention.
                  </p>

                  {/* Form */}
                  <div className="max-w-md w-full">
                     {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                           <div className="relative group">
                              <input
                                 type="email"
                                 placeholder="Enter your email"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 className="w-full h-16 pl-8 pr-20 bg-transparent border border-white rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:bg-white/5 transition-all duration-300 text-lg"
                                 required
                                 disabled={isLoading}
                              />
                              <div className="absolute right-2 top-2 bottom-2">
                                 <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="h-full aspect-square rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center justify-center disabled:opacity-70"
                                 >
                                    {isLoading ? <Loader2 className="animate-spin" /> : <ArrowRight size={20} />}
                                 </button>
                              </div>
                           </div>
                           <p className="text-xs text-gray-600 pl-2">
                              Join 2,000+ others waiting. No spam, ever.
                           </p>
                        </form>
                     ) : (
                        <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-6 animate-fade-in">
                           <div className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/20">
                              <CheckCircle2 size={24} />
                           </div>
                           <div>
                              <h3 className="font-serif text-2xl text-white mb-1">You're on the list!</h3>
                              <p className="text-base text-gray-400">We'll notify you soon.</p>
                           </div>
                        </div>
                     )}
                  </div>
               </div>

               {/* Right Column: iOS / Support Card */}
               <div className="relative pt-8 lg:pt-0">
                  <div className="absolute -inset-1 bg-gradient-to-br from-terracotta/20 to-transparent rounded-[2.5rem] blur-xl opacity-30" />

                  <div className="relative bg-[#111111] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden group">
                     {/* Decorative background circle */}
                     <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700" />

                     <div className="flex items-center justify-between mb-8 relative z-10">
                        <div className="flex flex-col">
                           <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Concept</span>
                           <h3 className="font-serif text-3xl text-white">Waiting for iOS?</h3>
                        </div>
                        <span className="text-[10px] font-black bg-white text-black px-2 py-1 rounded uppercase tracking-wider">Indie Dev</span>
                     </div>

                     <p className="text-gray-400 mb-8 leading-relaxed font-light relative z-10">
                        LabelSafe is a labor of love—a mission to protect our health from hidden additives. As a student developer, I'm giving this everything I have, but the cost to launch on the App Store is a real barrier.
                     </p>

                     <div className="flex items-start gap-4 mb-8 bg-white/5 p-4 rounded-xl border border-white/5 relative z-10">
                        <img
                           src="https://i.pinimg.com/736x/89/61/47/8961479176aa5eab4a8c0f2cbf46024e.jpg"
                           className="w-12 h-12 rounded-full border-2 border-white/10 object-cover flex-shrink-0"
                           alt="Vivek"
                        />
                        <div className="space-y-1">
                           <p className="text-sm text-gray-300 italic leading-relaxed">
                              "Your support fuels this journey to make the world healthier. Help me cross the finish line, and I'll gift you a <span className="text-white font-medium underline decoration-terracotta/50 underline-offset-2">Lifetime Premium License</span> as a heartfelt thank you."
                           </p>
                           <div className="text-xs font-bold text-white mt-2">— Vivek, Student Developer</div>
                        </div>
                     </div>

                     <a
                        href="https://buymeacoffee.com/vivekvsingh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 w-full bg-[#CF7556] hover:bg-[#E08667] text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-[#CF7556]/20 group/btn"
                     >
                        <Coffee size={20} className="fill-white/20 group-hover/btn:rotate-12 transition-transform" />
                        <span>Support Mission & Get Featured</span>
                     </a>

                     <div className="mt-5 flex justify-center text-xs text-gray-500 items-center gap-2 relative z-10">
                        <Sparkles size={14} className="text-[#CF7556]" />
                        <span className="font-medium">Lock in all future premium features</span>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default CTA;