import React, { memo } from 'react';
import OptimizedImage from '../ui/OptimizedImage';

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface AboutSectionProps {
  stats: Stat[];
  isVisible: { [key: string]: boolean };
}

const AboutSection = memo(function AboutSection({ stats, isVisible }: AboutSectionProps) {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`fade-in-element ${isVisible['element-0'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000`}>
            <div className="text-sm font-bold text-slate-600 tracking-wider mb-4">ABOUT RISE ENTERPRISES</div>
            <h2 className="text-5xl font-bold mb-8 text-slate-900 leading-tight">
              Building Excellence Since 
              <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent"> 2022</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Established in Pune, Maharashtra, India, in 2022, we are a dedicated force in the realm of civil construction services. 
              Our commitment to excellence and diverse range of offerings sets us apart in the industry.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              With a passion for building the foundation of a better future, we tackle complex infrastructure projects, 
              contributing to the growth of our communities through quality construction and unwavering commitment.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`fade-in-element ${isVisible['element-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000 delay-300`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-600 to-slate-800 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative rounded-3xl shadow-2xl w-full h-[500px] bg-white flex items-center justify-center p-12">
                <OptimizedImage
                  src="/rise-logo.webp"
                  alt="RISE Enterprises Logo"
                  width={600}
                  height={500}
                  priority={true}
                  quality={90}
                  className="max-w-full max-h-full object-contain"
                  placeholder="blur"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200">
                <div className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">Since 2022</div>
                <div className="text-sm text-slate-600">Building Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
