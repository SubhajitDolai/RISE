'use client';

import React from 'react';
import { Target, Eye, Gem } from 'lucide-react';

const MissionVisionSection: React.FC = () => {
    return (
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
                            <Target size={40} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">MISSION</h3>
                        <p className="text-slate-300 leading-relaxed">
                            Innovating ways and means for better performance of men & machinery. We continuously explore innovative approaches to
                            improve the performance of both our skilled workforce and state-of-the-art machinery, ensuring exceptional results.
                        </p>
                    </div>
                    <div className="bg-slate-800 rounded-3xl p-8 hover:bg-slate-700 transition-colors duration-500">
                        <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                            <Eye size={40} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">VISION</h3>
                        <p className="text-slate-300 leading-relaxed">
                            Becoming a Premier Contracting Firm, expanding beyond Pune, serving values. We aim to establish ourselves as the
                            leading construction company while maintaining our core values and principles.
                        </p>
                    </div>
                    <div className="bg-slate-800 rounded-3xl p-8 hover:bg-slate-700 transition-colors duration-500">
                        <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                            <Gem size={40} />
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
    );
};

export default MissionVisionSection;
