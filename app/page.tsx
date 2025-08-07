'use client';

import { useState, useEffect } from 'react';

export default function RiseEnterprisesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerBg, setHeaderBg] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Premium hero slides with construction imagery
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
      title: "BUILDING THE FUTURE",
      subtitle: "Premier civil construction and development services in Pune since 2022",
      overlay: "from-slate-900/80 via-slate-800/60 to-transparent"
    },
    {
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=1920&q=80",
      title: "CONTRACTOR & DEVELOPERS",
      subtitle: "Excellence in RCC construction with 391,000+ sq ft completed",
      overlay: "from-gray-900/80 via-gray-800/60 to-transparent"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
      title: "TRUSTED EXCELLENCE",
      subtitle: "Quality infrastructure projects with innovative solutions",
      overlay: "from-slate-800/80 via-slate-700/60 to-transparent"
    }
  ];

  const services = [
    {
      icon: "🏗️",
      title: "Infrastructure Work",
      description: "Complex infrastructure projects contributing to community growth with passion for building a better future through quality construction.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
      details: "Specialized in large-scale infrastructure development projects"
    },
    {
      icon: "🏢",
      title: "Civil Construction (RCC)",
      description: "Meticulous construction of reinforced concrete structures, ensuring durability and reliability in every project we undertake.",
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=400&q=80",
      details: "Expert RCC construction with advanced engineering techniques"
    },
    {
      icon: "✨",
      title: "Development & Finishing",
      description: "Crafting spaces that reflect quality and sophistication, paying attention to every detail from conceptualization to completion.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
      details: "Premium finishing work with attention to finest details"
    },
    {
      icon: "🏠",
      title: "Luxury Bungalows",
      description: "Bringing luxury and sophistication to life with our bungalow projects, offering comfortable and elegant living spaces.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80",
      details: "Custom luxury residential construction solutions"
    },
    {
      icon: "🏢",
      title: "Commercial Buildings",
      description: "Our commercial projects are testament to our commitment to quality and efficiency, creating spaces that enhance business operations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
      details: "Modern commercial spaces designed for business success"
    },
    {
      icon: "🛣️",
      title: "Road Projects (PQC/Bitumen/WBM)",
      description: "Contributing to infrastructure development with road projects, ensuring safe and efficient transportation networks.",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b24d?w=400&q=80",
      details: "Advanced road construction with modern materials and techniques"
    },
    {
      icon: "🌳",
      title: "Publication Park & Garden Projects",
      description: "Our expertise extends to creating beautiful, serene parks and gardens for the community to enjoy and connect with nature.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
      details: "Landscape architecture and environmental construction"
    },
    {
      icon: "🏗️",
      title: "Development Projects",
      description: "We undertake diverse development projects including retaining walls, clubhouses, podiums, STP, and UGWT systems.",
      image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400&q=80",
      details: "Comprehensive development solutions for modern infrastructure"
    }
  ];

  const projects = [
    {
      name: "Podium Construction",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=400&q=80",
      description: "Advanced podium construction with modern architectural design"
    },
    {
      name: '"A" Building',
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
      description: "State-of-the-art commercial building with premium amenities"
    },
    {
      name: "Multipurpose Hall",
      category: "Community",
      image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400&q=80",
      description: "Versatile community space designed for multiple functions"
    },
    {
      name: 'Sports Complex "A"',
      category: "Recreation",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
      description: "Modern sports facility with advanced equipment and design"
    },
    {
      name: 'Sports Complex "B"',
      category: "Recreation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      description: "Secondary sports complex with comprehensive facilities"
    },
    {
      name: "Main Buildings & Parking",
      category: "Development",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
      description: "Integrated development with main structures and parking solutions"
    }
  ];

  const advantages = [
    {
      icon: "💰",
      title: "Best Price in Market",
      description: "We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: "🎯",
      title: "Experience & Track Record",
      description: "With experienced civil engineers and a track record of successful projects, we offer expertise you can trust.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "⏰",
      title: "Timely Project Delivery",
      description: "Our track record speaks for itself, with a history of punctual project delivery, giving you peace of mind.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: "🛡️",
      title: "Strong Risk Management",
      description: "We manage risks proactively, ensuring smooth project execution and minimizing potential issues.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: "🔧",
      title: "Modern Equipment & Technology",
      description: "We invest in cutting-edge equipment and technology to deliver projects with utmost precision and efficiency.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: "🔒",
      title: "Unwavering Safety Commitment",
      description: "Your safety is our priority. We execute projects with the highest safety standards in the industry.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "👥",
      title: "Sound Management Team",
      description: "Our management team is equipped with skills and knowledge to navigate complex projects efficiently.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: "📞",
      title: "Single Point of Contact",
      description: "We provide a single point of contact for clients, simplifying communication and ensuring seamless experience.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: "🏗️",
      title: "Work with Quality Materials",
      description: "We build with materials according to your plans and specifications, ensuring lasting quality.",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "391,000+", label: "Sq. Ft. Completed", icon: "📏" },
    { number: "50+", label: "Projects Delivered", icon: "🏗️" },
    { number: "10+", label: "Years Experience", icon: "⭐" },
    { number: "100%", label: "Client Satisfaction", icon: "😊" }
  ];

  // Auto-slide functionality with improved timing
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced scroll effects
  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const formObject = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        budget: formData.get('budget') as string,
        project: formData.get('project') as string,
        message: formData.get('message') as string,
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
          message: result.message || 'Thank you for your inquiry! We will contact you within 24 hours.'
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
  };

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
        className={`fixed w-full top-0 z-50 transition-all duration-700 ${
          headerBg 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-3xl font-bold transition-all duration-500 ${
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
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 group-hover:w-full transition-all duration-500"></span>
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      {/* Premium Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-20000 ease-linear"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: index === currentSlide ? 'scale(1.02)' : 'scale(1)'
                }}
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
                  className="bg-gradient-to-r from-slate-700 to-slate-900 px-12 py-5 rounded-full font-bold text-lg hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-slate-500/30 min-w-[220px] border border-slate-600"
                >
                  VIEW PROJECTS
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-500 min-w-[220px] backdrop-blur-sm"
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-white rounded-full scale-110' 
                  : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section with Premium Design */}
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
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80"
                  alt="Construction Excellence"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200">
                  <div className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">Since 2022</div>
                  <div className="text-sm text-slate-600">Building Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4">MISSION</h3>
              <p className="text-slate-300 leading-relaxed">
                Innovating ways and means for better performance of men & machinery. We continuously explore innovative approaches to 
                improve the performance of both our skilled workforce and state-of-the-art machinery, ensuring exceptional results.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-3xl p-8 hover:bg-slate-700 transition-colors duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                👁️
              </div>
              <h3 className="text-2xl font-bold mb-4">VISION</h3>
              <p className="text-slate-300 leading-relaxed">
                Becoming a Premier Contracting Firm, expanding beyond Pune, serving values. We aim to establish ourselves as the 
                leading construction company while maintaining our core values and principles.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-3xl p-8 hover:bg-slate-700 transition-colors duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                💎
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
      <section id="services" className="py-32 bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-600/20 to-slate-800/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20 fade-in-element">
            <div className="text-sm font-bold text-slate-400 tracking-wider mb-4">OUR SERVICES</div>
            <h2 className="text-5xl font-bold mb-6">
              What We 
              <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent"> Build</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`fade-in-element group ${isVisible[`element-${index + 2}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-slate-500/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-slate-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm mb-3">{service.description}</p>
                    <div className="text-slate-500 text-xs italic">{service.details}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-in-element">
            <div className="text-sm font-bold text-slate-600 tracking-wider mb-4">OUR PORTFOLIO</div>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Completed 
              <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent"> Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing our expertise through successful project deliveries across Pune
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`fade-in-element group ${isVisible[`element-${index + 10}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-xl font-bold mb-2">{project.name}</div>
                      <div className="text-sm opacity-90">{project.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-gradient-to-br from-slate-50 to-white">
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
                📋
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">PROJECT PLAN</h3>
              <p className="text-slate-600 leading-relaxed">
                Our construction process starts with a detailed project plan, ensuring every aspect is carefully considered and planned.
              </p>
            </div>
            
            <div className="text-center fade-in-element">
              <div className="w-24 h-24 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center mb-6 text-3xl text-white mx-auto shadow-2xl">
                🏗️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">SITE PREPARATION</h3>
              <p className="text-slate-600 leading-relaxed">
                Process of getting a piece of land ready for construction with proper surveying and ground preparation.
              </p>
            </div>
            
            <div className="text-center fade-in-element">
              <div className="w-24 h-24 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center mb-6 text-3xl text-white mx-auto shadow-2xl">
                ⚡
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
              <div className="text-6xl mb-8">🚀</div>
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
                    🏗️
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
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20 fade-in-element">
            <div className="text-sm font-bold text-slate-400 tracking-wider mb-4">GET IN TOUCH</div>
            <h2 className="text-5xl font-bold mb-6">
              Start Your 
              <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent"> Dream Project</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to build something extraordinary? Let&apos;s discuss your vision and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className={`fade-in-element bg-slate-800 rounded-3xl shadow-2xl p-10 ${isVisible['element-25'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000`}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div className={`p-4 rounded-xl ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                        : 'bg-red-500/20 border border-red-500/30 text-red-300'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-slate-300">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 border-2 border-slate-600 bg-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-white placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 border-2 border-slate-600 bg-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-white placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-300">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 border-2 border-slate-600 bg-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-white placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="block text-sm font-bold text-slate-300">Project Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 border-2 border-slate-600 bg-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50l">Under ₹50 Lakhs</option>
                        <option value="50l-1cr">₹50L - 1 Crore</option>
                        <option value="1-5cr">₹1 - 5 Crores</option>
                        <option value="5cr+">₹5+ Crores</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project" className="block text-sm font-bold text-slate-300">Project Type *</label>
                    <select
                      id="project"
                      name="project"
                      required
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 border-2 border-slate-600 bg-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select project type</option>
                      <option value="infrastructure">Infrastructure Development</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="residential">Luxury Bungalow</option>
                      <option value="rcc">RCC Construction</option>
                      <option value="road">Road Projects (PQC/Bitumen/WBM)</option>
                      <option value="finishing">Development &amp; Finishing</option>
                      <option value="parks">Publication Park &amp; Garden Projects</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-slate-300">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      disabled={isSubmitting}
                      placeholder="Tell us about your project requirements, timeline, location, and any specific needs..."
                      className="w-full px-6 py-4 border-2 border-slate-600 bg-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-white placeholder-slate-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    ></textarea>
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
                      'SUBMIT PROJECT INQUIRY'
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className={`fade-in-element bg-slate-800 rounded-3xl shadow-2xl p-8 ${isVisible['element-26'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000 delay-300`}>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      📍
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Head Office</h4>
                      <p className="text-slate-300">
                        A-1 Flat no. 01, Karishma Co.Op Society<br />
                        Appartment Servy no. 17/2<br />
                        Near Sangam Press, Kothrud<br />
                        Pune-38, Maharashtra
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      📞
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a href="tel:+919823662277" className="text-slate-300 hover:text-slate-100 transition-colors duration-300 block">
                          +91 98236 62277
                        </a>
                        <a href="tel:+919823712099" className="text-slate-300 hover:text-slate-100 transition-colors duration-300 block">
                          +91 98237 12099
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Email Addresses</h4>
                      <div className="space-y-1">
                        <a href="mailto:riseenterprises2277@gmail.com" className="text-slate-300 hover:text-slate-100 transition-colors duration-300 block">
                          riseenterprises2277@gmail.com
                        </a>
                        <a href="mailto:satish2munde@gmail.com" className="text-slate-300 hover:text-slate-100 transition-colors duration-300 block">
                          satish2munde@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      🕒
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Business Hours</h4>
                      <p className="text-slate-300">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`fade-in-element bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl shadow-2xl p-8 text-white ${isVisible['element-27'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000 delay-500`}>
                <h3 className="text-xl font-bold mb-4">24/7 Project Support</h3>
                <p className="mb-6 opacity-90">For urgent construction queries and project assistance</p>
                <a 
                  href="tel:+919823662277"
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 inline-block"
                >
                  📞 Emergency Hotline
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-950 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
                  RISE
                </span>
                <div className="text-sm font-medium tracking-widest mt-1 text-slate-300">ENTERPRISES</div>
                <div className="text-xs text-slate-400 mt-2">CONTRACTOR AND DEVELOPERS</div>
              </div>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-md">
                Building Pune&apos;s future with innovation, excellence, and sustainable practices. 
                Your trusted partner for world-class construction solutions since 2022.
              </p>
              <div className="flex space-x-6">
                {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    <span className="text-sm font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  'Infrastructure Work',
                  'Civil Construction (RCC)',
                  'Development &amp; Finishing',
                  'Luxury Bungalows',
                  'Commercial Buildings',
                  'Road Projects',
                  'Park &amp; Garden Projects'
                ].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-slate-300 hover:text-slate-100 transition-colors duration-300 text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '#about' },
                  { name: 'Our Projects', href: '#projects' },
                  { name: 'Services', href: '#services' },
                  { name: 'Our Process', href: '#process' },
                  { name: 'Contact Us', href: '#contact' },
                  { name: 'Get Quote', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-300 hover:text-slate-100 transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 mb-4 md:mb-0">
                © 2025 RISE Enterprises. All rights reserved. | Building Excellence Since 2022
              </p>
              <div className="flex space-x-8">
                <a href="#" className="text-slate-400 hover:text-slate-200 transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-200 transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}