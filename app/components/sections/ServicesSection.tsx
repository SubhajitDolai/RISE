import React from 'react';
import Image from 'next/image';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  details: string;
}

interface ServicesSectionProps {
  services: Service[];
  isVisible: { [key: string]: boolean };
}

function ServicesSection({ services, isVisible }: ServicesSectionProps) {
  return (
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
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    width={400}
                    height={192}
                    style={{ objectFit: 'cover', width: '100%', height: '192px' }}
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
  );
}

export default ServicesSection;
