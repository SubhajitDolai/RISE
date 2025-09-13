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
    <section id="services" className="py-32 bg-gradient-to-br from-slate-950 to-black text-white relative overflow-hidden px-0 md:px-10">
      <div className="max-w-7xl mx-auto relative px-6">
        <div className="mb-20 fade-in-element text-left">
          <div className="text-xs font-semibold text-slate-400 tracking-widest mb-2 uppercase">Our Services</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">What We Build</h2>
          <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
          <p className="text-slate-400 text-lg max-w-2xl">Comprehensive construction solutions tailored to meet your every need.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`fade-in-element group ${isVisible[`element-${index + 2}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-xl p-0 bg-white/10 shadow-xl backdrop-blur-md flex flex-col h-full relative group-hover:shadow-2xl transition-all duration-500">
                <div className="relative h-44 overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={192}
                    priority={index < 4}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-xl text-slate-800 shadow">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-7">
                  <div className="h-1 w-10 bg-slate-400/60 rounded-full mb-5 mx-auto" />
                  <h3 className="text-xl font-bold mb-2 text-white text-center group-hover:text-slate-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-base mb-3 text-center">{service.description}</p>
                  <div className="text-slate-400 text-xs italic text-center mt-auto">{service.details}</div>
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
