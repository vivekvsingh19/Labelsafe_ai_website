import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Keeping ultra-processed foods away from my family is a priority. LabelSafe makes it instant and easy to scan everything before it goes in the cart. No more guessing.",
      name: "Maria Torres",
      initials: "MT",
      color: "bg-terracotta",
      delay: "0"
    },
    {
      quote: "I wanted to eat cleaner but chemistry labels were overwhelming. This app simplifies everything—I finally know what I'm actually putting in my body.",
      name: "Sarah Jenkins",
      initials: "SJ",
      color: "bg-purple-500",
      delay: "100"
    },
    {
      quote: "Most apps purely count calories. LabelSafe identifies the inflammatory ingredients that actually impact metabolic health. It is an essential tool for my patients.",
      name: "Dr. Emily Ross",
      initials: "ER",
      color: "bg-blue-500",
      delay: "200"
    }
  ];

  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Real people. <span className="text-terracotta italic">Real impact.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Navigating the grocery store shouldn't require a chemistry degree. Here is why thousands of people are switching to LabelSafe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="mb-8 text-terracotta/50">
                <Quote size={32} className="rotate-180" />
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light min-h-[120px]">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
