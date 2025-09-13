'use client';

import React from 'react';
import { Rocket } from 'lucide-react';

const FuturePlansSection: React.FC = () => {
    return (
        <section id="future-plans" className="py-32 bg-slate-950 text-white border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 fade-in-element">
                    <div className="text-xs font-semibold text-slate-400 tracking-widest mb-2 uppercase">Future Plans</div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white text-left">Expanding Our Capabilities</h2>
                    <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
                    <p className="text-slate-400 text-lg max-w-2xl text-left">Our vision for growth and technological advancement in construction excellence.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="fade-in-element">
                        <div className="rounded-xl p-8 bg-white/10 shadow-lg backdrop-blur-md border border-slate-800 h-full flex flex-col">
                            <div className="h-1 w-10 bg-blue-500 rounded mb-6" />
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-slate-400">
                                <Rocket size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Advanced Technology</h3>
                            <p className="text-slate-300 leading-relaxed text-base flex-1">
                                Implementing state-of-the-art construction technology, including larger cranes, automated systems, and precision equipment to enhance project efficiency and quality.
                            </p>
                        </div>
                    </div>
                    <div className="fade-in-element">
                        <div className="rounded-xl p-8 bg-white/10 shadow-lg backdrop-blur-md border border-slate-800 h-full flex flex-col">
                            <div className="h-1 w-10 bg-green-500 rounded mb-6" />
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-slate-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Skilled Workforce</h3>
                            <p className="text-slate-300 leading-relaxed text-base flex-1">
                                Expanding our team with highly skilled professionals and providing continuous training to ensure expertise in modern construction methodologies.
                            </p>
                        </div>
                    </div>
                    <div className="fade-in-element">
                        <div className="rounded-xl p-8 bg-white/10 shadow-lg backdrop-blur-md border border-slate-800 h-full flex flex-col">
                            <div className="h-1 w-10 bg-yellow-400 rounded mb-6" />
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-slate-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Operational Excellence</h3>
                            <p className="text-slate-300 leading-relaxed text-base flex-1">
                                Streamlining processes for faster project delivery while maintaining our unwavering commitment to quality and safety standards.
                            </p>
                        </div>
                    </div>
                    <div className="fade-in-element">
                        <div className="rounded-xl p-8 bg-white/10 shadow-lg backdrop-blur-md border border-slate-800 h-full flex flex-col">
                            <div className="h-1 w-10 bg-purple-500 rounded mb-6" />
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-slate-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Market Expansion</h3>
                            <p className="text-slate-300 leading-relaxed text-base flex-1">
                                Growing our presence beyond Pune to serve clients across Maharashtra while establishing ourselves as a premier regional contractor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FuturePlansSection;
