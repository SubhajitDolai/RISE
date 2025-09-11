'use client';

import { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ProcessSectionDirect from './components/sections/ProcessSection';
import { projectsListData } from './lib/data/projects';
import { preloadCriticalImages } from './lib/imagePreloader';
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
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  // Fast hydration and loading optimization
  useEffect(() => {
    setIsHydrated(true);
    setIsLoading(false);
    
    // Preload critical images for faster loading
    preloadCriticalImages();
  }, []);

  // Memoized data with optimized smaller images for fast loading
  const heroSlides = useMemo(() => [
    {
      image: "/Complex-1 Construction.webp",
      title: "BUILDING THE FUTURE",
      subtitle: "Premier civil construction and development services in Pune since 2022",
      overlay: "from-slate-900/80 via-slate-800/60 to-transparent"
    },
    {
      image: "/Complex-2 Construction.webp",
      title: "CONTRACTOR & DEVELOPERS",
      subtitle: "Excellence in RCC construction with 391,000+ sq ft completed",
      overlay: "from-gray-900/80 via-gray-800/60 to-transparent"
    },
    {
      image: "/Complex-1 Construction 1.webp",
      title: "TRUSTED EXCELLENCE",
      subtitle: "Quality infrastructure projects with innovative solutions",
      overlay: "from-slate-800/80 via-slate-700/60 to-transparent"
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
      image: "/Complex-1 Main.webp",
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
    { number: "391,000+", label: "Sq. Ft. Completed", icon: <Ruler size={28} /> },
    { number: "50+", label: "Projects Delivered", icon: <Landmark size={28} /> },
    { number: "10+", label: "Years Experience", icon: <Star size={28} /> },
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
          const windowHeight = window.innerHeight;

          elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = elementTop < windowHeight - 80;

            setIsVisible(prev => ({
              ...prev,
              [`element-${index}`]: elementVisible
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
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200'
          : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-3xl font-bold transition-all duration-300 ${headerBg ? 'text-slate-900' : 'text-white'
            }`}>
            <span className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent">
              RISE
            </span>
            <div className="text-xs font-semibold tracking-widest mt-1 opacity-80">ENTERPRISES</div>
          </div>

          <ul className="hidden lg:flex space-x-10">
            {['Home', 'About', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105 relative group ${headerBg ? 'text-slate-700 hover:text-slate-900' : 'text-white hover:text-slate-200'
                    }`}
                >
                  {item.toUpperCase()}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block bg-gradient-to-r from-slate-700 to-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider hover:shadow-2xl hover:shadow-slate-500/25 hover:-translate-y-1 transition-all duration-300"
          >
            GET QUOTE
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden transition-colors duration-300 ${headerBg ? 'text-slate-900' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-6 py-6">
              {['Home', 'About', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 text-slate-700 hover:text-slate-900 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
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