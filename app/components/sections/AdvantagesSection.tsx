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
    );
};

export default AdvantagesSection;
