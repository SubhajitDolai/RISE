'use client';

import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { projectsData } from '../../lib/data/projects';

export default function ProjectDetails() {
    const params = useParams();
    const router = useRouter();
    const project = projectsData.find(p => p.id === params.id);

    const handleBackToProjects = () => {
        // First navigate to home page
        router.push('/');
        
        // Wait for navigation to complete, then scroll to projects section
        setTimeout(() => {
            const element = document.getElementById('projects');
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            } else {
                // Fallback: try again after a longer delay
                setTimeout(() => {
                    const projectsElement = document.getElementById('projects');
                    if (projectsElement) {
                        projectsElement.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 500);
            }
        }, 200);
    };

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
                    <button 
                        onClick={handleBackToProjects}
                        className="text-slate-600 hover:text-slate-800"
                    >
                        Return to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <button
                    onClick={handleBackToProjects}
                    className="inline-block mb-8 text-slate-600 hover:text-slate-800 transition-colors"
                >
                    ← Back to Projects
                </button>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left column - Images */}
                    <div className="space-y-6">
                        <div className="relative h-96 rounded-3xl overflow-hidden">
                            <Image
                                src={project.mainImage}
                                alt={project.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {project.images.map((img, index) => (
                                <div key={index} className="relative h-48 rounded-2xl overflow-hidden">
                                    <Image
                                        src={img}
                                        alt={`${project.name} view ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column - Details */}
                    <div>
                        <div className="mb-6">
                            <span className="inline-block bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                {project.category}
                            </span>
                            <h1 className="text-4xl font-bold text-slate-900 mb-4">{project.name}</h1>
                            <p className="text-xl text-slate-600">{project.fullDescription}</p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Features</h2>
                            <ul className="grid grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-slate-600">
                                        <span className="mr-2">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Specifications</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(project.specifications).map(([key, value]) => (
                                    <div key={key} className="bg-slate-50 p-4 rounded-xl">
                                        <div className="text-sm text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                        <div className="text-slate-900 font-semibold">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
