import React from 'react';
import { Mail, User, Phone } from 'lucide-react';

interface ContactSectionProps {
  isVisible: { [key: string]: boolean };
  isSubmitting: boolean;
  submitStatus: { type: 'success' | 'error' | null; message: string };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isSubmitting, submitStatus, handleSubmit }) => (
  <section id="contact" className="py-32 bg-slate-950 text-white border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="mb-16 fade-in-element">
        <div className="text-xs font-semibold text-slate-400 tracking-widest mb-2 uppercase">Get In Touch</div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white text-left">Get In Touch</h2>
        <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
        <p className="text-slate-400 text-lg max-w-2xl text-left">
          Share your details and we&apos;ll contact you within 24 hours to discuss your project requirements.
        </p>
      </div>
      <div className="max-w-2xl mx-auto rounded-2xl shadow-xl p-10 fade-in-element bg-white/10 backdrop-blur-md border border-slate-800">
        <div className="h-1 w-12 bg-slate-400/60 rounded-full mb-8 mx-auto" />
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitStatus.type && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                : 'bg-red-500/20 border border-red-500/30 text-red-300'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          {/* Name Field */}
          <div className="space-y-3">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-300">Full Name *</label>
            <div className="relative">
              <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isSubmitting}
                className="w-full pl-12 pr-4 py-4 border border-slate-600 bg-slate-800/50 backdrop-blur-sm rounded-lg focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/50 transition-all duration-300 text-white placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-3">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-300">Email Address *</label>
            <div className="relative">
              <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                className="w-full pl-12 pr-4 py-4 border border-slate-600 bg-slate-800/50 backdrop-blur-sm rounded-lg focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/50 transition-all duration-300 text-white placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-3">
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-300">Phone Number *</label>
            <div className="relative">
              <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                disabled={isSubmitting}
                className="w-full pl-12 pr-4 py-4 border border-slate-600 bg-slate-800/50 backdrop-blur-sm rounded-lg focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/50 transition-all duration-300 text-white placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-slate-900 font-bold py-4 px-8 rounded-lg hover:bg-slate-100 transition-all duration-200 text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-md"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;