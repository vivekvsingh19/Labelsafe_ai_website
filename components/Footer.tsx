import React from 'react';
import { Github, Twitter, Coffee } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-[#111111] py-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        
        {/* Legal Links */}
        <div className="flex gap-6 order-2 md:order-1">
           <button onClick={() => onOpenModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
           <button onClick={() => onOpenModal('terms')} className="hover:text-white transition-colors">Terms of Service</button>
           <a href="mailto:vivekvsingh19@gmail.com" className="hover:text-white transition-colors">Support</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 order-1 md:order-2">
           <a 
             href="https://github.com/vivekvsingh19" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-gray-500 hover:text-white transition-colors"
             aria-label="GitHub"
           >
             <Github size={20} />
           </a>
           <a 
             href="https://x.com/vivek_uncovered" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-gray-500 hover:text-white transition-colors"
             aria-label="X (Twitter)"
           >
             <Twitter size={20} />
           </a>
           <a 
             href="https://buymeacoffee.com/vivekvsingh" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-gray-500 hover:text-white transition-colors"
             aria-label="Buy Me a Coffee"
           >
             <Coffee size={20} />
           </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right order-3">
           <span className="opacity-60">© 2026 LabelSafe Labs. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;