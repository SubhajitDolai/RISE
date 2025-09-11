import React, { memo } from 'react';
import OptimizedImage from '../ui/OptimizedImage';

interface HeroSectionProps {
  heroSlides: Array<{ image: string; title: string; subtitle: string; overlay: string }>;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = memo(({ heroSlides, currentSlide, setCurrentSlide, scrollToSection }) => (
  <section id="home" className="relative h-screen overflow-hidden">
    <div className="absolute inset-0">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <OptimizedImage
            src={slide.image}
            alt={`Hero slide ${index + 1}`}
            fill
            priority={index === 0} // Priority loading for first slide only
            quality={90}
            sizes="100vw"
            className={`transition-transform duration-15000 ease-linear ${
              index === currentSlide ? 'scale-101' : 'scale-100'
            }`}
            placeholder="blur"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`}></div>
        </div>
      ))}
    </div>
    <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
      <div className="max-w-6xl">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
              {heroSlides[currentSlide].title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-slate-700 to-slate-900 px-12 py-5 rounded-full font-bold text-lg hover:-translate-y-2 transition-all duration-300 shadow-2xl hover:shadow-slate-500/30 min-w-[220px] border border-slate-600"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 min-w-[220px] backdrop-blur-sm"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`transition-all duration-300 ${
            index === currentSlide 
              ? 'w-12 h-3 bg-white rounded-full scale-110' 
              : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/70'
          }`}
        />
      ))}
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

export default HeroSection;