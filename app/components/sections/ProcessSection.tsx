'use client';

import React from 'react';
import { ClipboardList, Landmark, Zap } from 'lucide-react';

const ProcessSection: React.FC = () => {
    return (
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
    );
};

export default ProcessSection;
