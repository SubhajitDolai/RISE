'use client';

import React from 'react';
import { Landmark } from 'lucide-react';

const ClientsSection: React.FC = () => {
    return (
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
    );
};

export default ClientsSection;
