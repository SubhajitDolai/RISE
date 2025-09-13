'use client';

import React from 'react';

interface Advantage {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

interface AdvantagesSectionProps {
    advantages: Advantage[];
    isVisible: { [key: string]: boolean };
}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ advantages, isVisible }) => {
    return (
        <section id="advantages" className="py-32 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 fade-in-element">
                    <div className="text-xs font-semibold text-slate-500 tracking-widest mb-2 uppercase">Why Choose Us</div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-slate-900 text-left">Our Advantages</h2>
                    <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
                    <p className="text-slate-500 text-lg max-w-2xl text-left">
                        Discover what makes RISE Enterprises the preferred choice for construction projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className={`fade-in-element flex flex-col items-start border border-slate-200 bg-white/80 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${isVisible[`element-${index + 16}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={`h-1 w-10 bg-gradient-to-r ${advantage.color} rounded mb-6`} />
                            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-2xl text-slate-700">
                                {advantage.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{advantage.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-base">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
