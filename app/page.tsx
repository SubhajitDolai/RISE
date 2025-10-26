
'use client';
import React from 'react';

import { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ProcessSectionDirect from './components/sections/ProcessSection';
import { projectsListData } from './lib/data/projects';
import {
  Building2, Building, Sparkles, Home, Landmark, TreePine, Wrench, ShieldCheck, Lock, Users, Phone, Ruler, Star, Smile,
  DollarSign, Target, AlarmClock
} from 'lucide-react';

// Fast-loading components with minimal loading states
const HeroSection = dynamic(() => import('./components/sections/HeroSection'), {
  loading: () => <div className="h-screen bg-slate-900 animate-pulse" />,
  ssr: true,
});

const AboutSection = dynamic(() => import('./components/sections/AboutSection'), {
  loading: () => <div className="py-8 bg-white" />,
  ssr: false,
});

const ServicesSection = dynamic(() => import('./components/sections/ServicesSection'), {
  loading: () => <div className="py-8 bg-slate-50" />,
  ssr: false,
});

const ProjectsSection = dynamic(() => import('./components/sections/ProjectsSection'), {
  loading: () => <div className="py-8 bg-white" />,
  ssr: false,
});

const GallerySection = dynamic(() => import('./components/sections/GallerySection'), {
  loading: () => <div className="py-32 bg-white animate-pulse" />,
  ssr: false,
});

const ContactSection = dynamic(() => import('./components/sections/ContactSection'), {
  loading: () => <div className="py-8 bg-slate-900" />,
  ssr: false,
});

const Footer = dynamic(() => import('./components/sections/Footer'), {
  loading: () => <div className="py-4 bg-slate-900" />,
  ssr: false,
});

const MissionVisionSection = dynamic(() => import('./components/sections/MissionVisionSection'), {
  loading: () => <div className="py-8 bg-slate-900" />,
  ssr: false,
});

const LeadershipSection = dynamic(() => import('./components/sections/LeadershipSection'), {
  loading: () => <div className="py-8 bg-white" />,
  ssr: false,
});

const FuturePlansSection = dynamic(() => import('./components/sections/FuturePlansSection'), {
  loading: () => <div className="py-8 bg-slate-900" />,
  ssr: false,
});

const AdvantagesSection = dynamic(() => import('./components/sections/AdvantagesSection'), {
  loading: () => <div className="py-8 bg-slate-50" />,
  ssr: false,
});

const ClientsSection = dynamic(() => import('./components/sections/ClientsSection'), {
  loading: () => <div className="py-8 bg-slate-900" />,
  ssr: false,
});

export default function RiseEnterprisesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerBg, setHeaderBg] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHydrated] = useState(true);

  // Memoized data with optimized smaller images for fast loading
  const heroSlides = useMemo(() => [
    {
      image: "/Main Complex - 1.webp",
      title: "ENGINEERING EXCELLENCE",
      subtitle: "Precision construction for lasting impact and community growth.",
      overlay: "from-slate-900/80 via-slate-800/60 to-transparent"
    },
    {
      image: "/Main Complex - 2.webp",
      title: "ARCHITECTURAL GRANDEUR",
      subtitle: "Blending tradition and modernity in every project we deliver.",
      overlay: "from-slate-900/80 via-slate-800/60 to-transparent"
    },
    {
      image: "/Multipurpose Hall Inside - 1.webp",
      title: "SPACES THAT INSPIRE",
      subtitle: "Creating environments that foster innovation and connection.",
      overlay: "from-slate-900/80 via-slate-800/60 to-transparent"
    }
  ], []);

  const services = useMemo(() => [
    {
      icon: <Landmark size={32} />,
      title: "Infrastructure Work",
      description: "Complex infrastructure projects contributing to community growth with passion for building a better future through quality construction.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      details: "Specialized in large-scale infrastructure development projects"
    },
    {
      icon: <Building2 size={32} />,
      title: "Civil Construction (RCC)",
      description: "Meticulous construction of reinforced concrete structures, ensuring durability and reliability in every project we undertake.",
      image: "/Building A - 2.webp",
      details: "Expert RCC construction with advanced engineering techniques"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Development & Finishing",
      description: "Crafting spaces that reflect quality and sophistication, paying attention to every detail from conceptualization to completion.",
      image: "/Building Outside - 1.webp",
      details: "Premium finishing work with attention to finest details"
    },
    {
      icon: <Home size={32} />,
      title: "Luxury Bungalows",
      description: "Bringing luxury and sophistication to life with our bungalow projects, offering comfortable and elegant living spaces.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      details: "Custom luxury residential construction solutions"
    },
    {
      icon: <Building size={32} />,
      title: "Commercial Buildings",
      description: "Our commercial projects are testament to our commitment to quality and efficiency, creating spaces that enhance business operations.",
      image: "/Multipurpose Hall Inside - 2.webp",
      details: "Modern commercial spaces designed for business success"
    },
    {
      icon: <Landmark size={32} />,
      title: "Road Projects (PQC/Bitumen/WBM)",
      description: "Contributing to infrastructure development with road projects, ensuring safe and efficient transportation networks.",
      image: "/Road main.webp",
      details: "Advanced road construction with modern materials and techniques"
    },
    {
      icon: <TreePine size={32} />,
      title: "Publication Park & Garden Projects",
      description: "Our expertise extends to creating beautiful, serene parks and gardens for the community to enjoy and connect with nature.",
      image: "/Main Building & Parking - 2.webp",
      details: "Landscape architecture and environmental construction"
    },
    {
      icon: <Wrench size={32} />,
      title: "Development Projects",
      description: "We undertake diverse development projects including retaining walls, clubhouses, podiums, STP, and UGWT systems.",
      image: "/Main Complex - 1 c.webp",
      details: "Comprehensive development solutions for modern infrastructure"
    }
  ], []);

  // Use centralized project data
  const projects = useMemo(() => projectsListData, []);

  const advantages = useMemo(() => [
    {
      icon: <DollarSign size={32} />,
      title: "Best Price in Market",
      description: "We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Target size={32} />,
      title: "Experience & Track Record",
      description: "With experienced civil engineers and a track record of successful projects, we offer expertise you can trust.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <AlarmClock size={32} />,
      title: "Timely Project Delivery",
      description: "Our track record speaks for itself, with a history of punctual project delivery, giving you peace of mind.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Strong Risk Management",
      description: "We manage risks proactively, ensuring smooth project execution and minimizing potential issues.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Wrench size={32} />,
      title: "Modern Equipment & Technology",
      description: "We invest in cutting-edge equipment and technology to deliver projects with utmost precision and efficiency.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Lock size={32} />,
      title: "Unwavering Safety Commitment",
      description: "Your safety is our priority. We execute projects with the highest safety standards in the industry.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Users size={32} />,
      title: "Sound Management Team",
      description: "Our management team is equipped with skills and knowledge to navigate complex projects efficiently.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Phone size={32} />,
      title: "Single Point of Contact",
      description: "We provide a single point of contact for clients, simplifying communication and ensuring seamless experience.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Wrench size={32} />,
      title: "Work with Quality Materials",
      description: "We build with materials according to your plans and specifications, ensuring lasting quality.",
      color: "from-yellow-500 to-orange-600"
    }
  ], []);

  const stats = useMemo(() => [
    { number: "7,91,000+", label: "Sq. Ft. Completed", icon: <Ruler size={28} /> },
    { number: "75+", label: "Projects Delivered", icon: <Landmark size={28} /> },
    { number: "16+", label: "Years Experience", icon: <Star size={28} /> },
    { number: "100%", label: "Client Satisfaction", icon: <Smile size={28} /> }
  ], []);

  // Optimized auto-slide functionality with throttling
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Reduced from 6000ms
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  // Instant loading effect
  useEffect(() => {
    if (isHydrated) {
      setIsLoading(false); // Instant loading
    }
  }, [isHydrated]);

  // Optimized scroll effects with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setHeaderBg(window.scrollY > 50);

          const elements = document.querySelectorAll('.fade-in-element');
          const galleryElements = document.querySelectorAll('[id^="gallery"]');
          const windowHeight = window.innerHeight;

          elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = elementTop < windowHeight - 80;

            setIsVisible(prev => ({
              ...prev,
              [`element-${index}`]: elementVisible
            }));
          });

          // Track gallery elements visibility
          galleryElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = elementTop < windowHeight - 80;

            setIsVisible(prev => ({
              ...prev,
              [`gallery-${index}`]: elementVisible
            }));
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced scroll function with optimized performance
  const scrollToSection = useCallback((sectionId: string) => {    
    // Fast scroll without waiting for components
    const performScroll = () => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Use scrollIntoView with better options
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        return true;
      }
      return false;
    };
    
    // Try immediate scroll
    if (performScroll()) {
      return;
    }
    
    // If element not found, wait and try multiple times
    let attempts = 0;
    const maxAttempts = 20;
    
    const retryScroll = () => {
      attempts++;
      
      if (performScroll()) {
        return; // Success!
      }
      
      if (attempts < maxAttempts) {
        // Use requestAnimationFrame for better timing
        requestAnimationFrame(() => {
          setTimeout(retryScroll, attempts * 100); // Progressive delay
        });
      }
    };
    
    // Start retrying
    requestAnimationFrame(retryScroll);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Memoized submit handler
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const formObject = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you! The owner will contact you soon.'
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'An error occurred. Please try again.'
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  // Memoized mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // Prevent hydration mismatch by showing loading on both server and client initially
  if (!isHydrated || isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              RISE
            </span>
          </div>
          <div className="text-slate-400 text-sm tracking-wider mb-8">ENTERPRISES</div>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-400 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans overflow-x-hidden bg-white">
      {/* Navigation */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerBg
          ? 'bg-white/30 backdrop-blur-xl shadow-2xl' // glassmorphism
          : 'bg-transparent' // fully transparent at top
          }`}
      >
  <nav className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ${headerBg ? '' : 'text-white drop-shadow-lg'}`}>
          <button
            onClick={() => scrollToSection('home')}
            className={`group flex flex-col items-start text-3xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 ${headerBg ? 'focus:ring-slate-400/60 text-slate-900' : 'focus:ring-white/60 text-white' } rounded-lg px-2 py-1 -ml-2`}
            aria-label="Go to top"
          >
            <span className="flex items-center gap-2">
              <span className={`bg-gradient-to-r ${headerBg ? 'from-slate-900 via-slate-700 to-slate-400' : 'from-white via-slate-200 to-slate-400'} bg-clip-text text-transparent group-hover:from-slate-100 group-hover:to-slate-400 transition-colors duration-300`}>
                RISE
              </span>
            </span>
            <div className={`text-xs font-medium tracking-widest mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${headerBg ? 'from-slate-900 via-slate-700 to-slate-400' : 'from-white via-slate-200 to-slate-400'} bg-clip-text text-transparent`}>
              ENTERPRISES
            </div>
            {/* White shades underline animation */}
            <span className={`block w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${headerBg ? 'from-slate-900 via-slate-700 to-slate-400' : 'from-white via-slate-200 to-slate-400'} rounded-full mt-1 transition-all duration-500`}></span>
          </button>

          <ul className="hidden lg:flex space-x-10">
            {['Home', 'About', 'Services', 'Projects', 'Gallery', 'Process', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105 relative group ${headerBg ? 'text-slate-700 hover:text-slate-900' : 'text-white hover:text-slate-200'}`}
                >
                  {item.toUpperCase()}
                  <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r ${headerBg ? 'from-slate-700 to-slate-900' : 'from-white to-slate-400'} group-hover:w-full transition-all duration-300`}></span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection('contact')}
            className={`hidden lg:flex items-center gap-2 bg-gradient-to-r ${headerBg ? 'from-slate-700 via-slate-800 to-slate-900 text-white' : 'from-white via-slate-200 to-slate-400 text-slate-900'} px-8 py-3 rounded-full font-bold text-sm tracking-wider shadow-lg hover:shadow-2xl hover:shadow-slate-500/25 hover:-translate-y-1 hover:scale-105 transition-all duration-300 group focus:outline-none ${headerBg ? 'focus:ring-2 focus:ring-slate-400/60 focus:ring-offset-2' : 'focus:ring-2 focus:ring-white/60 focus:ring-offset-2'} active:scale-95`}
            aria-label="Get a quote - Contact us"
          >
            <span className="group-hover:animate-pulse">GET IN TOUCH</span>
            <svg className={`w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ${headerBg ? 'text-white' : 'text-slate-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden transition-colors duration-300 ${headerBg ? 'text-slate-900' : 'text-white'}`}
          >
            <svg className={`w-6 h-6 ${headerBg ? 'text-slate-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[9999] min-h-screen h-screen w-screen flex flex-col bg-white/95 backdrop-blur-2xl shadow-2xl animate-slide-down border-t border-slate-200">
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full bg-white/70 hover:bg-slate-100 shadow transition"
              >
                <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center space-y-2 px-6 pb-12">
              {['Home', 'About', 'Services', 'Projects', 'Gallery', 'Process', 'Contact'].map((item, idx, arr) => (
                <React.Fragment key={item}>
                  <button
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-center py-4 text-lg font-semibold text-slate-800 hover:text-orange-600 transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400/40"
                  >
                    {item}
                  </button>
                  {idx < arr.length - 1 && <div className="w-2/3 mx-auto h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 opacity-70" />}
                </React.Fragment>
              ))}
            </div>
            <style jsx global>{`
              @keyframes slide-down {
                from { transform: translateY(-40px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
              .animate-slide-down {
                animation: slide-down 0.35s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </div>
        )}
      </header>

      {/* Lazy loaded sections with Suspense */}
      <Suspense fallback={<div className="h-screen bg-slate-900 animate-pulse" />}>
        <HeroSection
          heroSlides={heroSlides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          scrollToSection={scrollToSection}
        />
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-white animate-pulse" />}>
        <AboutSection stats={stats} isVisible={isVisible} />
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-slate-900 animate-pulse" />}>
        <MissionVisionSection />
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-white animate-pulse" />}>
        <LeadershipSection stats={stats} />
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-slate-50 animate-pulse" />}>
        <ServicesSection services={services} isVisible={isVisible} />
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-white animate-pulse" />}>
        <ProjectsSection projects={projects} isVisible={isVisible} />
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-white animate-pulse" />}>
        <GallerySection isVisible={isVisible} />
      </Suspense>

      {/* Process Section - Back to actual component */}
      <ProcessSectionDirect />

      <Suspense fallback={<div className="py-32 bg-slate-900 animate-pulse" />}>
        <FuturePlansSection />
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-slate-50 animate-pulse" />}>
        <AdvantagesSection advantages={advantages} isVisible={isVisible} />
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-slate-900 animate-pulse" />}>
        <ClientsSection />
      </Suspense>
      {/* Contact Section */}
      <Suspense fallback={<div className="py-32 bg-slate-900 animate-pulse" />}>
        <ContactSection
          isVisible={isVisible}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
          handleSubmit={handleSubmit}
        />
      </Suspense>
      {/* Footer */}
      <Suspense fallback={<div className="py-16 bg-slate-900 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
} 
