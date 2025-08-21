'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// This would typically come from your data source
const projectsData = [
    {
        id: '4',
        name: 'Sports Complex "A"',
        category: 'Recreation',
        mainImage: '/complex-1.webp',
        images: ['/complex-1.webp', '/complex-2.webp', '/pool view 1.webp', '/pool view 2.webp'],
        description: 'A comprehensive sports facility featuring a state-of-the-art akhada and Olympic-standard swimming complex.',
        fullDescription: 'Our Sports Complex A is a modern integrated sports facility that combines traditional wrestling culture with modern aquatics facilities. The complex includes an akhada section with specialized wrestling and fitness facilities, and a swimming section with Olympic-standard pools. This integrated facility caters to both combat sports and aquatics enthusiasts.',
        features: [
            'Professional wrestling arena',
            'Modern fitness equipment',
            'Specialized training zones',
            'Olympic-size swimming pool',
            'Training pool',
            'Kids pool',
            'Advanced filtration system',
            'Temperature-controlled water',
            'Locker rooms and shower facilities',
            'Spectator seating areas'
        ],
        specifications: {
            area: '40,000 sq ft',
            capacity: '500 people',
            completionDate: '2024',
            location: 'Pune, Maharashtra'
        }
    },
    // Add more projects as needed
];

export default function ProjectDetails() {
    const params = useParams();
    const project = projectsData.find(p => p.id === params.id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
                    <Link href="/#projects" className="text-slate-600 hover:text-slate-800">
                        Return to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <Link
                    href="/#projects"
                    className="inline-block mb-8 text-slate-600 hover:text-slate-800"
                >
                    ← Back to Projects
                </Link>

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
