import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-background transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 border-t border-border pt-16">
           {[
             { title: "Scan Instantly", text: "Point your camera at any barcode or ingredient list." },
             { title: "Reveal Truths", text: "AI highlights additives, allergens, and hidden chemicals in seconds." },
             { title: "Eat Clean", text: "Get a clear safety score and cleaner alternatives for a healthier life." }
           ].map((step, i) => (
             <div key={i} className="group">
                <span className="block font-serif text-lg italic text-secondary mb-4 group-hover:text-primary transition-colors">0{i + 1}</span>
                <h3 className="text-xl font-medium text-primary mb-2">{step.title}</h3>
                <p className="text-secondary font-light">{step.text}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;