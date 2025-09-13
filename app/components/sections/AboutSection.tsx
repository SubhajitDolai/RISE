import React, { memo, useState, useEffect } from 'react';
import Image from 'next/image';

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
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Extract numbers from stat strings for animation
  const getNumberFromStat = (stat: string): number => {
    const match = stat.match(/[\d,]+/);
    if (!match) return 0;
    return parseInt(match[0].replace(/,/g, ''));
  };

  // Animate counters when section becomes visible (only once)
  useEffect(() => {
    if (isVisible['element-0'] && !hasAnimated) {
      setHasAnimated(true);
      
      const targets = stats.slice(0, 2).map(stat => ({
        key: stat.label,
        target: getNumberFromStat(stat.number)
      }));

      targets.forEach(({ key, target }) => {
        if (target === 0) return;
        
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, duration / steps);
      });
    }
  }, [isVisible, stats, hasAnimated]);

  const formatCounter = (key: string, originalNumber: string): string => {
    const counter = counters[key];
    if (counter === undefined) return '0';
    
    if (originalNumber.includes('%')) return `${counter}%`;
    if (originalNumber.includes('+')) {
      return counter >= 1000 
        ? `${Math.floor(counter / 1000)},${(counter % 1000).toString().padStart(3, '0')}+`
        : `${counter}+`;
    }
    return counter.toString();
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-500 via-slate-500 to-slate-700 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-slate-600 via-blue-600 to-slate-800 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Section */}
          <div className={`fade-in-element ${isVisible['element-0'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000`}>
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-blue-50 px-4 py-2 rounded-full border border-slate-200/50 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-slate-700 tracking-wider uppercase">About Rise Enterprises</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 leading-[1.1]">
              Building Excellence Since{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-slate-600 to-slate-800 bg-clip-text text-transparent">
                  2022
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 to-slate-600/20 rounded-full"></div>
              </span>
            </h2>
            
            {/* Description */}
            <div className="space-y-6 mb-12">
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                Established in{" "}
                <span className="font-semibold text-slate-700">Pune, Maharashtra, India</span>, 
                we are a dedicated force in the realm of{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                  civil construction services
                </span>.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With a passion for building the foundation of a better future, we tackle{" "}
                <span className="font-semibold text-slate-700">complex infrastructure projects</span>, 
                contributing to community growth through{" "}
                <span className="font-semibold text-slate-700">quality construction</span>{" "}
                and unwavering commitment.
              </p>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.slice(0, 2).map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-200 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="text-3xl sm:text-4xl mb-4 text-slate-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold mb-3">
                      <span className="bg-gradient-to-r from-blue-600 via-slate-600 to-slate-800 bg-clip-text text-transparent">
                        {formatCounter(stat.label, stat.number)}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Subtle animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Visual Section */}
          <div className={`fade-in-element ${isVisible['element-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000 delay-300`}>
            <div className="relative group">
              {/* Main container with enhanced shadows */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-slate-600/20 to-slate-800/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/10 to-slate-700/10 rounded-3xl blur-xl"></div>
              
              {/* Logo container */}
              <div className="relative rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 flex items-center justify-center p-8 sm:p-12 border border-white/50 backdrop-blur-sm">
                <div className="relative">
                  <Image
                    src="/rise-logo.webp"
                    alt="RISE Enterprises Logo"
                    width={600}
                    height={500}
                    priority={true}
                    quality={95}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-slate-600/5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Enhanced badge */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-white via-blue-50/50 to-slate-50 p-6 sm:p-8 rounded-2xl shadow-2xl border border-blue-100/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-1">
                    Since 2022
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    Building Excellence
                  </div>
                  {/* Animated accent */}
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full mx-auto mt-2 animate-pulse"></div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute top-8 -left-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-slate-100 rounded-full blur-sm opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 -right-2 w-16 h-16 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full blur-sm opacity-40 animate-pulse delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
