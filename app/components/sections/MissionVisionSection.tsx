'use client';

import React from 'react';
// import { Target, Eye, Gem } from 'lucide-react';

const MissionVisionSection: React.FC = () => {
    return (
        <section id="mission-vision" className="py-28 bg-slate-950 text-white border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 fade-in-element">
                    <div className="text-xs font-semibold text-slate-400 tracking-widest mb-2 uppercase">Our Foundation</div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">Mission, Vision & Values</h2>
                    <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
                    <p className="text-slate-400 text-lg max-w-2xl">The principles that drive our company forward and define our commitment to excellence.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Mission Card */}
                    <div className="group flex flex-col items-start border border-slate-800 bg-slate-900/80 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="h-1 w-10 bg-blue-500 rounded mb-6 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-300" />
                        <h3 className="text-xl font-bold mb-3 text-white">MISSION</h3>
                        <p className="text-slate-300 leading-relaxed text-base">
                            We innovate relentlessly to enhance the performance of our people and technology, ensuring exceptional results for every project.
                        </p>
                    </div>
                    {/* Vision Card */}
                    <div className="group flex flex-col items-start border border-slate-800 bg-slate-900/80 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="h-1 w-10 bg-green-500 rounded mb-6 group-hover:w-16 group-hover:bg-green-400 transition-all duration-300" />
                        <h3 className="text-xl font-bold mb-3 text-white">VISION</h3>
                        <p className="text-slate-300 leading-relaxed text-base">
                            To be the premier contracting firm, expanding beyond Pune, while upholding our core values and delivering excellence everywhere we go.
                        </p>
                    </div>
                    {/* Values Card */}
                    <div className="group flex flex-col items-start border border-slate-800 bg-slate-900/80 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="h-1 w-10 bg-yellow-400 rounded mb-6 group-hover:w-16 group-hover:bg-yellow-300 transition-all duration-300" />
                        <h3 className="text-xl font-bold mb-3 text-white">VALUES</h3>
                        <p className="text-slate-300 leading-relaxed text-base">
                            Integrity, quality, and unwavering dedication are the bedrock of our organization—guiding us to new heights while keeping us grounded.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
