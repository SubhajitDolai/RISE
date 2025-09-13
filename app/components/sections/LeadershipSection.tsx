'use client';

import React from 'react';

interface LeadershipSectionProps {
    stats: Array<{
        number: string;
        label: string;
        icon: React.ReactNode;
    }>;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({ stats }) => {
    return (
        <section id="leadership" className="py-28 bg-white border-t border-slate-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-14 fade-in-element">
                    <div className="text-xs font-semibold text-slate-500 tracking-widest mb-2 uppercase">Leadership</div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-slate-900 text-left">Head of Organisation</h2>
                    <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
                    <p className="text-slate-500 text-lg max-w-2xl text-left">Meet the visionary leader driving our commitment to excellence and growth.</p>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-2xl p-10 fade-in-element border border-slate-200 bg-white/90 shadow-md flex flex-col md:flex-row gap-10 items-center md:items-start">
                        {/* Profile */}
                        <div className="flex flex-col items-center md:items-start min-w-[220px]">
                            <div className="w-40 h-40 mb-6 rounded-full border-4 border-slate-200 bg-slate-100 flex items-center justify-center text-slate-700 text-5xl font-extrabold shadow-lg select-none">
                                SM
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1 text-center md:text-left">Mr. Satish Shrihari Munde</h3>
                            <div className="text-slate-500 font-semibold mb-4 text-base text-center md:text-left">Head of Organisation</div>
                        </div>
                        {/* Bio and Stats */}
                        <div className="flex-1 flex flex-col gap-8">
                            <div>
                                <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                                    With an MBA from Pune University and over 10 years of experience in civil works, Mr. Munde has consistently delivered complete client satisfaction.
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg">
                                    As a seasoned professional, he now leads the charge in building a top-tier contracting organization with unwavering commitment to excellence.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex flex-col items-center bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
                                        <div className="text-2xl mb-1 text-slate-600">{stat.icon}</div>
                                        <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                                        <div className="text-xs text-slate-500 mt-1 text-center">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
