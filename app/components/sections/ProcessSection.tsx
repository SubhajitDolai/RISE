'use client';

import React from 'react';
import { ClipboardList, Landmark, Zap } from 'lucide-react';

const ProcessSection: React.FC = () => {
    return (
        <section id="process" className="py-32 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 fade-in-element">
                    <div className="text-xs font-semibold text-slate-500 tracking-widest mb-2 uppercase">Our Process</div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-slate-900 text-left">How We Work</h2>
                    <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
                    <p className="text-slate-500 text-lg max-w-2xl text-left">Our streamlined approach ensures quality delivery from planning to execution.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-start border border-slate-200 bg-white/80 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 fade-in-element">
                        <div className="h-1 w-10 bg-blue-500 rounded mb-6 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-300" />
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-2xl text-slate-700">
                            <ClipboardList size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">PROJECT PLAN</h3>
                        <p className="text-slate-600 leading-relaxed text-base">
                            Our construction process starts with a detailed project plan, ensuring every aspect is carefully considered and planned.
                        </p>
                    </div>
                    <div className="flex flex-col items-start border border-slate-200 bg-white/80 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 fade-in-element">
                        <div className="h-1 w-10 bg-green-500 rounded mb-6 group-hover:w-16 group-hover:bg-green-400 transition-all duration-300" />
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-2xl text-slate-700">
                            <Landmark size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">SITE PREPARATION</h3>
                        <p className="text-slate-600 leading-relaxed text-base">
                            Process of getting a piece of land ready for construction with proper surveying and ground preparation.
                        </p>
                    </div>
                    <div className="flex flex-col items-start border border-slate-200 bg-white/80 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 fade-in-element">
                        <div className="h-1 w-10 bg-yellow-400 rounded mb-6 group-hover:w-16 group-hover:bg-yellow-300 transition-all duration-300" />
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-2xl text-slate-700">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900">EXECUTION</h3>
                        <p className="text-slate-600 leading-relaxed text-base">
                            Construction activities that take place on a project site with precision, quality control, and timely delivery.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
