import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (type: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenModal('privacy');
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="https://i.pinimg.com/736x/89/61/47/8961479176aa5eab4a8c0f2cbf46024e.jpg" 
                alt="LabelSafe Logo" 
                className="w-10 h-10 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="font-serif text-xl text-black tracking-tight">LabelSafe</span>
            </a>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">How it Works</a>
              <a href="#features" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Mission</a>
              <button onClick={handlePrivacyClick} className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Privacy</button>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button onClick={scrollToWaitlist} className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                Join Waitlist
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-32 px-6 md:hidden">
          <div className="flex flex-col space-y-6 text-center font-serif text-2xl">
            <a onClick={() => setIsOpen(false)} href="#how-it-works" className="text-black hover:text-terracotta transition-colors">How it Works</a>
            <a onClick={() => setIsOpen(false)} href="#features" className="text-black hover:text-terracotta transition-colors">Mission</a>
            <button onClick={handlePrivacyClick} className="text-black hover:text-terracotta transition-colors">Privacy</button>
            <button onClick={scrollToWaitlist} className="text-black hover:text-terracotta transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;