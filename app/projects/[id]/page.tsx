'use client';

import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Building, Users, CheckCircle2, Maximize } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../lib/data/projects';

// Performance optimized project details component
export default function ProjectDetails() {
    const params = useParams();
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    // Memoize project data to prevent unnecessary recalculations
    const project = useMemo(() => 
        projectsData.find(p => p.id === params.id),
        [params.id]
    );

    // Optimized navigation handlers
    const handleBackToProjects = useCallback(() => {
        router.push('/');
        setTimeout(() => {
            const element = document.getElementById('projects');
            element?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }, 100);
    }, [router]);

    const openLightbox = useCallback((image: string) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    }, []);

    const handleContactClick = useCallback(() => {
        router.push('/');
        setTimeout(() => {
            const element = document.getElementById('contact');
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }, [router]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (selectedImage && event.key === 'Escape') {
                closeLightbox();
            }
        };

        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedImage, closeLightbox]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-8"
                >
                    <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Building className="w-12 h-12 text-slate-400" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
                    <p className="text-slate-600 mb-8 max-w-md">The project you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                    <button 
                        onClick={handleBackToProjects}
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Return to Projects
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <>
            {/* Optimized Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
                        onClick={closeLightbox}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl max-h-[90vh] w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Project detail"
                                fill
                                className="object-contain rounded-xl"
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 90vw"
                                priority
                            />
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
                {/* Optimized Hero Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-96 overflow-hidden"
                >
                    <Image
                        src={project.mainImage}
                        alt={project.name}
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                    
                    {/* Back Button */}
                    <button
                        onClick={handleBackToProjects}
                        className="absolute top-8 left-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </button>
                    
                    {/* Project Title Overlay */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute bottom-8 left-8 right-8"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            {project.name}
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-7xl mx-auto px-6 py-16"
                >
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Images */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Project Gallery */}
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="h-1 w-12 bg-slate-700 rounded" />
                                    <h2 className="text-2xl font-bold text-slate-900">Project Gallery</h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {project.images.map((img, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                                            className="group relative h-48 rounded-xl overflow-hidden cursor-pointer bg-slate-100 hover:shadow-xl transition-all duration-300"
                                            onClick={() => openLightbox(img)}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.name} view ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 50vw, 33vw"
                                                quality={80}
                                                loading={index > 2 ? 'lazy' : 'eager'}
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <Maximize className="w-6 h-6 text-white" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Project Description */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="h-1 w-12 bg-slate-700 rounded" />
                                    <h2 className="text-2xl font-bold text-slate-900">About This Project</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {project.fullDescription}
                                </p>
                            </motion.div>

                            {/* Features */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="h-1 w-12 bg-slate-700 rounded" />
                                    <h2 className="text-2xl font-bold text-slate-900">Key Features</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                                            className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column - Specifications */}
                        <div className="space-y-8">
                            {/* Quick Stats */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 sticky top-8"
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="h-1 w-12 bg-slate-700 rounded" />
                                    <h2 className="text-2xl font-bold text-slate-900">Project Details</h2>
                                </div>
                                <div className="space-y-6">
                                    {Object.entries(project.specifications).map(([key, value]) => (
                                        <div key={key} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-start gap-3">
                                                    {key === 'location' && <MapPin className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />}
                                                    {key === 'completionDate' && <Calendar className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />}
                                                    {(key === 'area' || key === 'capacity') && <Building className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />}
                                                    {!['location', 'completionDate', 'area', 'capacity'].includes(key) && <Users className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />}
                                                    <div>
                                                        <div className="text-sm text-slate-500 font-medium capitalize">
                                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                                        </div>
                                                        <div className="text-slate-900 font-semibold mt-1">{value}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating CTA Section */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                                className="fixed bottom-6 right-6 z-40 hidden md:block"
                            >
                                <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 text-slate-900 shadow-2xl max-w-sm">
                                    <h3 className="text-lg font-bold mb-3 text-slate-800">Interested in Similar Projects?</h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                                        Get in touch with our team to discuss your construction and development needs.
                                    </p>
                                    <button
                                        onClick={handleContactClick}
                                        className="w-full bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/25 transition-all duration-300 hover:scale-105"
                                    >
                                        Get In Touch
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
