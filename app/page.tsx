'use client';

import { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { usePerformance } from './hooks/usePerformance';
import { 
  Building2, Building, Sparkles, Home, Landmark, TreePine, Wrench, ShieldCheck, Lock, Users, Phone, Ruler, Star, Smile, ClipboardList, Target, AlarmClock, DollarSign, Eye, Gem, Rocket, Zap 
} from 'lucide-react';

// Lazy load components for better performance
const HeroSection = dynamic(() => import('./components/HeroSection'), {
  loading: () => <div className="h-screen bg-slate-900 animate-pulse" />
});

const AboutSection = dynamic(() => import('./components/AboutSection'), {
  loading: () => <div className="py-32 bg-white animate-pulse" />
});

const ServicesSection = dynamic(() => import('./components/ServicesSection'), {
  loading: () => <div className="py-32 bg-slate-50 animate-pulse" />
});

const ProjectsSection = dynamic(() => import('./components/ProjectsSection'), {
  loading: () => <div className="py-32 bg-white animate-pulse" />
});

const ContactSection = dynamic(() => import('./components/ContactSection'), {
  loading: () => <div className="py-32 bg-slate-900 animate-pulse" />
});

const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div className="py-16 bg-slate-900 animate-pulse" />
});

export default function RiseEnterprisesPage() {
  // Performance optimization hook
  usePerformance();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerBg, setHeaderBg] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Memoized data to prevent unnecessary re-renders
  const heroSlides = useMemo(() => [
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&auto=format&fit=crop",
      title: "BUILDING THE FUTURE",
      subtitle: "Premier civil construction and development services in Pune since 2022",
      overlay: "from-slate-900/80 via-slate-800/60 to-transparent"
    },
    {
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=1920&q=80&auto=format&fit=crop",
      title: "CONTRACTOR & DEVELOPERS",
      subtitle: "Excellence in RCC construction with 391,000+ sq ft completed",
      overlay: "from-gray-900/80 via-gray-800/60 to-transparent"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80&auto=format&fit=crop",
      details: "Specialized in large-scale infrastructure development projects"
    },
    {
      icon: <Building2 size={32} />,
      title: "Civil Construction (RCC)",
      description: "Meticulous construction of reinforced concrete structures, ensuring durability and reliability in every project we undertake.",
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=400&q=80&auto=format&fit=crop",
      details: "Expert RCC construction with advanced engineering techniques"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Development & Finishing",
      description: "Crafting spaces that reflect quality and sophistication, paying attention to every detail from conceptualization to completion.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80&auto=format&fit=crop",
      details: "Premium finishing work with attention to finest details"
    },
    {
      icon: <Home size={32} />,
      title: "Luxury Bungalows",
      description: "Bringing luxury and sophistication to life with our bungalow projects, offering comfortable and elegant living spaces.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80&auto=format&fit=crop",
      details: "Custom luxury residential construction solutions"
    },
    {
      icon: <Building size={32} />,
      title: "Commercial Buildings",
      description: "Our commercial projects are testament to our commitment to quality and efficiency, creating spaces that enhance business operations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop",
      details: "Modern commercial spaces designed for business success"
    },
    {
      icon: <Landmark size={32} />,
      title: "Road Projects (PQC/Bitumen/WBM)",
      description: "Contributing to infrastructure development with road projects, ensuring safe and efficient transportation networks.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop",
      details: "Advanced road construction with modern materials and techniques"
    },
    {
      icon: <TreePine size={32} />,
      title: "Publication Park & Garden Projects",
      description: "Our expertise extends to creating beautiful, serene parks and gardens for the community to enjoy and connect with nature.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80&auto=format&fit=crop",
      details: "Landscape architecture and environmental construction"
    },
    {
      icon: <Wrench size={32} />,
      title: "Development Projects",
      description: "We undertake diverse development projects including retaining walls, clubhouses, podiums, STP, and UGWT systems.",
      image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400&q=80&auto=format&fit=crop",
      details: "Comprehensive development solutions for modern infrastructure"
    }
  ], []);

  const projects = useMemo(() => [
    {
      name: "Podium Construction",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=400&q=80&auto=format&fit=crop",
      description: "Advanced podium construction with modern architectural design"
    },
    {
      name: '"A" Building',
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop",
      description: "State-of-the-art commercial building with premium amenities"
    },
    {
      name: "Multipurpose Hall",
      category: "Community",
      image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400&q=80&auto=format&fit=crop",
      description: "Versatile community space designed for multiple functions"
    },
    {
      name: 'Sports Complex "A"',
      category: "Recreation",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80&auto=format&fit=crop",
      description: "Modern sports facility with advanced equipment and design"
    },
    {
      name: 'Sports Complex "B"',
      category: "Recreation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
      description: "Secondary sports complex with comprehensive facilities"
    },
    {
      name: "Main Buildings & Parking",
      category: "Development",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80&auto=format&fit=crop",
      description: "Integrated development with main structures and parking solutions"
    }
  ], []);

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

  // Faster loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800); // Reduced from 1500ms
    return () => clearTimeout(timer);
  }, []);

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

  // Memoized scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        email: formData.get('email') as string,
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

  if (isLoading) {
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
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          headerBg 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-3xl font-bold transition-all duration-300 ${
            headerBg ? 'text-slate-900' : 'text-white'
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
                  className={`font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105 relative group ${
                    headerBg ? 'text-slate-700 hover:text-slate-900' : 'text-white hover:text-slate-200'
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

      {/* Mission, Vision, Values Section */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-element">
            <div className="text-sm font-bold text-slate-400 tracking-wider mb-4">OUR FOUNDATION</div>
            <h2 className="text-5xl font-bold mb-6">
              Mission, Vision & 
              <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent"> Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-800 rounded-3xl p-8 hover:bg-slate-700 transition-colors duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">MISSION</h3>
              <p className="text-slate-300 leading-relaxed">
                Innovating ways and means for better performance of men & machinery. We continuously explore innovative approaches to 
                improve the performance of both our skilled workforce and state-of-the-art machinery, ensuring exceptional results.
              </p>
            </div>
            <div className="bg-slate-800 rounded-3xl p-8 hover:bg-slate-700 transition-colors duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                <Eye size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">VISION</h3>
              <p className="text-slate-300 leading-relaxed">
                Becoming a Premier Contracting Firm, expanding beyond Pune, serving values. We aim to establish ourselves as the 
                leading construction company while maintaining our core values and principles.
              </p>
            </div>
            <div className="bg-slate-800 rounded-3xl p-8 hover:bg-slate-700 transition-colors duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                <Gem size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">VALUES</h3>
              <p className="text-slate-300 leading-relaxed">
                Our values are the bedrock of our organization, keeping us firmly grounded while inspiring us to reach new heights. 
                At the heart of our values is commitment to integrity, quality, and unwavering dedication.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-element">
            <div className="text-sm font-bold text-slate-600 tracking-wider mb-4">LEADERSHIP</div>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Head of 
              <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent"> Organisation</span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 fade-in-element border border-slate-200">
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    SM
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {stats.slice(2).map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md">
                        <div className="text-2xl mb-1">{stat.icon}</div>
                        <div className="text-xl font-bold text-slate-800">{stat.number}</div>
                        <div className="text-xs text-slate-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Mr. Satish Shrihari Munde</h3>
                  <div className="text-slate-600 font-semibold mb-6 text-lg">Head of Organisation</div>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    With an MBA degree from Pune University and a remarkable 10 years of experience in civil works, 
                    Mr. Munde has consistently delivered complete client satisfaction.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    As a seasoned professional, he now leads the charge in pursuing his dream of forming and 
                    running a top-tier contracting organization with unwavering commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Services Section */}
      <Suspense fallback={<div className="py-32 bg-slate-50 animate-pulse" />}>
        <ServicesSection services={services} isVisible={isVisible} />
      </Suspense>
      {/* Enhanced Projects Section */}
      <Suspense fallback={<div className="py-32 bg-white animate-pulse" />}>
        <ProjectsSection projects={projects} isVisible={isVisible} />
      </Suspense>
      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-element">
            <div className="text-sm font-bold text-slate-600 tracking-wider mb-4">OUR PROCESS</div>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              How We 
              <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent"> Work</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center fade-in-element">
              <div className="w-24 h-24 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center mb-6 text-3xl text-white mx-auto shadow-2xl">
                <ClipboardList size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">PROJECT PLAN</h3>
              <p className="text-slate-600 leading-relaxed">
                Our construction process starts with a detailed project plan, ensuring every aspect is carefully considered and planned.
              </p>
            </div>
            <div className="text-center fade-in-element">
              <div className="w-24 h-24 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center mb-6 text-3xl text-white mx-auto shadow-2xl">
                <Landmark size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">SITE PREPARATION</h3>
              <p className="text-slate-600 leading-relaxed">
                Process of getting a piece of land ready for construction with proper surveying and ground preparation.
              </p>
            </div>
            <div className="text-center fade-in-element">
              <div className="w-24 h-24 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center mb-6 text-3xl text-white mx-auto shadow-2xl">
                <Zap size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">EXECUTION</h3>
              <p className="text-slate-600 leading-relaxed">
                Construction activities that take place on a project site with precision, quality control, and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Future Plans Section */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-element">
            <div className="text-sm font-bold text-slate-400 tracking-wider mb-4">FUTURE PLANS</div>
            <h2 className="text-5xl font-bold mb-6">
              Expanding Our 
              <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent"> Capabilities</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800 rounded-3xl p-12 fade-in-element">
              <div className="text-6xl mb-8"><Rocket size={56} /></div>
              <p className="text-xl text-slate-300 leading-relaxed">
                Our future plans include expanding our construction capabilities with larger cranes, advanced technology, 
                and highly skilled workers to deliver top-quality projects on time. We are committed to growth while 
                maintaining our standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-element">
            <div className="text-sm font-bold text-slate-600 tracking-wider mb-4">WHY CHOOSE US</div>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Our 
              <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent"> Advantages</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover what makes RISE Enterprises the preferred choice for construction projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`fade-in-element bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible[`element-${index + 16}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{advantage.title}</h3>
                <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Client Section */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-element">
            <div className="text-sm font-bold text-slate-400 tracking-wider mb-4">OUR CLIENTS</div>
            <h2 className="text-5xl font-bold mb-6">
              Trusted by 
              <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent"> Many</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-element">
              <div className="bg-slate-800 rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-6">Project Statistics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Total Worked Area</span>
                    <span className="text-2xl font-bold text-slate-100">391,000+ sq ft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Primary Location</span>
                    <span className="text-xl font-bold text-slate-100">Pune</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Specialization</span>
                    <span className="text-xl font-bold text-slate-100">RCC & Development</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-element">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Smart Construction Solutions</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  At your service with innovative construction technologies and methodologies that ensure superior project outcomes.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-xl">
                    <Landmark size={28} />
                  </div>
                  <div>
                    <div className="font-bold">Main Buildings, Parking, Podium etc.</div>
                    <div className="text-slate-400 text-sm">Comprehensive development projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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