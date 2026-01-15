import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  type: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: (
            <div className="space-y-4 text-gray-600">
              <p>At LabelSafe, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
              <h4 className="font-medium text-black">Data Collection</h4>
              <p>We do not store images of the products you scan. All analysis happens locally on your device or via ephemeral processing where data is discarded immediately after analysis.</p>
              <h4 className="font-medium text-black">User Accounts</h4>
              <p>If you create an account, we store your email and preferences securely. We do not sell your personal data to third parties.</p>
              <h4 className="font-medium text-black">Updates</h4>
              <p>We may update this policy from time to time. Continued use of the app signifies your acceptance of any changes.</p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          content: (
            <div className="space-y-4 text-gray-600">
              <p>By using LabelSafe, you agree to these Terms. Please read them carefully.</p>
              <h4 className="font-medium text-black">Usage License</h4>
              <p>LabelSafe grants you a personal, non-commercial license to use the app for informational purposes regarding food ingredients.</p>
              <h4 className="font-medium text-black">Disclaimer</h4>
              <p>LabelSafe provides nutritional analysis for informational purposes only. It is not a substitute for professional medical advice. Always consult a physician for dietary restrictions or allergies.</p>
              <h4 className="font-medium text-black">Liability</h4>
              <p>We strive for accuracy but cannot guarantee that all product database information is 100% complete or error-free.</p>
            </div>
          )
        };
      case 'support':
        return {
          title: 'Support',
          content: (
            <div className="space-y-4 text-gray-600">
              <p>Need help? Our team is here for you.</p>
              <h4 className="font-medium text-black">Contact Us</h4>
              <p>Email us directly at <a href="mailto:vivekvsingh19@gmail.com" className="text-terracotta underline">vivekvsingh19@gmail.com</a></p>
              <h4 className="font-medium text-black">FAQ</h4>
              <p>Visit our Help Center on the website for common questions about scanning, scores, and account management.</p>
            </div>
          )
        };
      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-slide-up">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="font-serif text-2xl text-black">{title}</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {content}
        </div>
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
           <button onClick={onClose} className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800">
             Close
           </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;