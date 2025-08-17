'use client';

import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <React.Suspense fallback={
            <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
                <div className="text-center">
                    <div className="text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                            RISE
                        </span>
                    </div>
                    <div className="text-slate-400 text-sm tracking-wider mb-8">ENTERPRISES</div>
                    <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-400 rounded-full mx-auto animate-pulse"></div>
                </div>
            </div>
        }>
            {children}
        </React.Suspense>
    );
}
