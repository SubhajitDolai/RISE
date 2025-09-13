'use client';

import React from 'react';
import { Landmark } from 'lucide-react';

const ClientsSection: React.FC = () => {
    return (
        <section id="clients" className="py-32 bg-slate-950 text-white border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 fade-in-element">
                    <div className="text-xs font-semibold text-slate-400 tracking-widest mb-2 uppercase">Our Clients</div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white text-left">Trusted by Many</h2>
                    <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
                    <p className="text-slate-400 text-lg max-w-2xl text-left">Building lasting relationships through excellence in construction and development.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="fade-in-element">
                        <div className="rounded-xl p-8 bg-white/10 shadow-xl backdrop-blur-md border border-slate-800 h-full flex flex-col">
                            <div className="h-1 w-10 bg-blue-500 rounded mb-6" />
                            <h3 className="text-2xl font-bold mb-6 text-white">Project Statistics</h3>
                            <div className="space-y-6 flex-1">
                                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                                    <span className="text-slate-300 text-base">Total Worked Area</span>
                                    <span className="text-2xl font-bold text-white">391,000+ sq ft</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                                    <span className="text-slate-300 text-base">Primary Location</span>
                                    <span className="text-xl font-bold text-white">Pune</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-slate-300 text-base">Specialization</span>
                                    <span className="text-xl font-bold text-white">RCC & Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fade-in-element">
                        <div className="rounded-xl p-8 bg-white/10 shadow-xl backdrop-blur-md border border-slate-800 h-full flex flex-col">
                            <div className="h-1 w-10 bg-green-500 rounded mb-6" />
                            <h3 className="text-2xl font-bold mb-6 text-white">Smart Construction Solutions</h3>
                            <p className="text-slate-300 text-base leading-relaxed mb-8 flex-1">
                                At your service with innovative construction technologies and methodologies that ensure superior project outcomes and lasting quality.
                            </p>
                            <div className="flex items-start space-x-4 bg-slate-800/50 rounded-lg p-4">
                                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 flex-shrink-0">
                                    <Landmark size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-white mb-1">Main Buildings, Parking, Podium</div>
                                    <div className="text-slate-400 text-sm">Comprehensive development projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
