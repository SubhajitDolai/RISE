import React, { memo } from 'react';
import Image from 'next/image';

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
          <Image
            src={slide.image}
            alt={`Hero slide ${index + 1}`}
            fill
            priority={index === 0}
            quality={90}
            sizes="100vw"
            className={`object-cover transition-transform duration-15000 ease-linear ${
              index === currentSlide ? 'scale-101' : 'scale-100'
            }`}
          />
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
        </div>
      ))}
    </div>
    <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
      <div className="max-w-3xl w-full flex flex-col items-center justify-center animate-fadeInUp">
        {/* Tagline for credibility */}
        <div className="uppercase tracking-widest text-xs font-semibold mb-6 text-white/80 bg-black/30 px-4 py-1 rounded-full shadow-sm">
          Trusted Construction Partner
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl">
          {heroSlides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-2xl mb-10 font-light tracking-wide max-w-2xl mx-auto leading-relaxed text-white/90">
          {heroSlides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-base shadow-md hover:bg-slate-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400/60 w-full sm:w-auto"
          >
            Get in Touch
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="border border-white/70 text-white/90 font-semibold text-base px-10 py-4 rounded-full bg-transparent hover:bg-white/10 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400/60 w-full sm:w-auto shadow-sm"
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
          tabIndex={0}
          className={`transition-all duration-200 border-none focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 ${
            index === currentSlide 
              ? 'w-8 h-2 bg-white rounded-full' 
              : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/70'
          }`}
        />
      ))}
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

export default HeroSection;