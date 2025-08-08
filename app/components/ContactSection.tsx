import React from 'react';
import { Mail } from 'lucide-react';

interface ContactSectionProps {
  isVisible: { [key: string]: boolean };
  isSubmitting: boolean;
  submitStatus: { type: 'success' | 'error' | null; message: string };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isSubmitting, submitStatus, handleSubmit }) => (
  <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="text-center mb-20 fade-in-element">
        <div className="text-sm font-bold text-slate-400 tracking-wider mb-4">GET IN TOUCH</div>
        <h2 className="text-5xl font-bold mb-6">
          Enter Your <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">Email</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          We&apos;ll notify the owner and get back to you soon.
        </p>
      </div>
      <div className="max-w-xl mx-auto bg-slate-800 rounded-3xl shadow-2xl p-10 fade-in-element">
        <form onSubmit={handleSubmit} className="space-y-8">
          {submitStatus.type && (
            <div className={`p-4 rounded-xl ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                : 'bg-red-500/20 border border-red-500/30 text-red-300'
            }`}>
              {submitStatus.message}
            </div>
          )}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-bold text-slate-300">Email Address *</label>
            <div className="flex items-center space-x-3">
              <Mail size={22} className="text-slate-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 border-2 border-slate-600 bg-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-white placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-slate-600 to-slate-800 text-white font-bold py-4 px-8 rounded-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-500/25 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>SUBMITTING...</span>
              </>
            ) : (
              'NOTIFY OWNER'
            )}
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;