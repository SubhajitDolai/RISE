'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// This would typically come from your data source
const projectsData = [
    {
        id: '1',
        name: 'Akhada Complex',
        category: 'Sports',
        mainImage: '/akhada.webp',
        images: ['/akhada.webp', '/akhada view 2.webp'],
        description: 'A state-of-the-art wrestling and fitness complex designed to nurture athletic excellence.',
        fullDescription: 'Our Akhada Complex represents the perfect blend of traditional wrestling culture and modern fitness facilities. The facility includes specialized training areas, modern equipment, and spaces designed for both professional athletes and fitness enthusiasts.',
        features: [
            'Professional wrestling arena',
            'Modern fitness equipment',
            'Specialized training zones',
            'Locker rooms and shower facilities',
            'Spectator seating area'
        ],
        specifications: {
            area: '15,000 sq ft',
            capacity: '200 people',
            completionDate: '2024',
            location: 'Pune, Maharashtra'
        }
    },
    {
        id: '2',
        name: 'Swimming Complex',
        category: 'Aquatics',
        mainImage: '/pool view 1.webp',
        images: ['/pool view 1.webp', '/pool view 2.webp'],
        description: 'Olympic-standard swimming facility with multiple pools and training areas.',
        fullDescription: 'Our swimming complex features state-of-the-art pools designed for both professional training and recreational swimming. The facility includes Olympic-size pools, training pools, and dedicated areas for swimming lessons.',
        features: [
            'Olympic-size swimming pool',
            'Training pool',
            'Kids pool',
            'Advanced filtration system',
            'Temperature-controlled water'
        ],
        specifications: {
            area: '25,000 sq ft',
            capacity: '300 people',
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
