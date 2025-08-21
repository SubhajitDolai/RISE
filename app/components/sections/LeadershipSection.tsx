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
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 fade-in-element">
                    <div className="text-sm font-bold text-slate-600 tracking-wider mb-4">LEADERSHIP</div>
                    <h2 className="text-5xl font-bold mb-6 text-slate-900">
                        Head of
                        <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent"> Organisation</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 fade-in-element border border-slate-200">
                        <div className="grid md:grid-cols-3 gap-12 items-center">
                            <div className="text-center">
                                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                                    SM
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    {stats.slice(2).map((stat, index) => (
                                        <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md">
                                            <div className="text-2xl mb-1">{stat.icon}</div>
                                            <div className="text-xl font-bold text-slate-800">{stat.number}</div>
                                            <div className="text-xs text-slate-600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-3xl font-bold text-slate-900 mb-3">Mr. Satish Shrihari Munde</h3>
                                <div className="text-slate-600 font-semibold mb-6 text-lg">Head of Organisation</div>
                                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                                    With an MBA degree from Pune University and a remarkable 10 years of experience in civil works,
                                    Mr. Munde has consistently delivered complete client satisfaction.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    As a seasoned professional, he now leads the charge in pursuing his dream of forming and
                                    running a top-tier contracting organization with unwavering commitment to excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
