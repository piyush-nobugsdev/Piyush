'use client';

import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section
  id="contact"
  className="mt-[80px] bg-gradient-to-br from-[#1a0a0a] via-[#3d1818] to-[#1a0a0a] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24 "
>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-red-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        
        {/* Left red accent bar */}
        <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-transparent opacity-0 sm:opacity-100"></div>

        {/* Content */}
        <div className="animate-fade-in">
          
          {/* Heading */}
         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Send a Message
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-400 tracking-wide uppercase">
                <User size={14} className="text-red-500" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-gray-900/70 border border-gray-600 hover:border-red-500/50 focus:border-red-500 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition duration-300"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-400 tracking-wide uppercase">
                <Mail size={14} className="text-red-500" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-gray-900/70 border border-gray-600 hover:border-red-500/50 focus:border-red-500 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition duration-300"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-400 tracking-wide uppercase">
                <MessageSquare size={14} className="text-red-500" />
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={3}
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-gray-900/70 border border-gray-600 hover:border-red-500/50 focus:border-red-500 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 sm:px-8 py-2.5 sm:py-3 mt-2 bg-red-600 hover:bg-red-700 border border-red-600 hover:border-red-500 text-white font-bold text-sm sm:text-base rounded-lg transition duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
              <Send size={16} className="group-hover:translate-x-0.5 transition duration-300" />
            </button>

            {/* Success Message */}
            {submitSuccess && (
              <div className="p-3 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-center font-semibold text-sm animate-pulse">
                ✓ Message sent successfully! I'll be in touch soon.
              </div>
            )}
          </form>

          {/* Contact Info - Social Links */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-700/30">
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Or connect with me on social media:
            </p>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 bg-gray-900/50 hover:bg-gray-800 border border-gray-600 hover:border-red-500 text-white font-semibold text-xs sm:text-sm rounded transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 bg-gray-900/50 hover:bg-gray-800 border border-gray-600 hover:border-red-500 text-white font-semibold text-xs sm:text-sm rounded transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your-email@example.com"
                className="px-4 sm:px-5 py-2 bg-gray-900/50 hover:bg-gray-800 border border-gray-600 hover:border-red-500 text-white font-semibold text-xs sm:text-sm rounded transition duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;