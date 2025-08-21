'use client';

import React from 'react';
import { Rocket } from 'lucide-react';

const FuturePlansSection: React.FC = () => {
    return (
        <section className="py-32 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 fade-in-element">
                    <div className="text-sm font-bold text-slate-400 tracking-wider mb-4">FUTURE PLANS</div>
                    <h2 className="text-5xl font-bold mb-6">
                        Expanding Our
                        <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent"> Capabilities</span>
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-slate-800 rounded-3xl p-12 fade-in-element">
                        <div className="text-6xl mb-8"><Rocket size={56} /></div>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Our future plans include expanding our construction capabilities with larger cranes, advanced technology,
                            and highly skilled workers to deliver top-quality projects on time. We are committed to growth while
                            maintaining our standards of excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FuturePlansSection;
