'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Lazy load PhotoThumbnail component
const PhotoThumbnail = dynamic(() => import('../components/PhotoThumbnail'), {
  loading: () => <div className="w-full h-48 bg-slate-200 animate-pulse rounded-xl" />
});

// Optimized gallery images with lazy loading hints
const allGalleryImages = [
  '/Building A - 1.webp',
  '/Building A - 2.webp',
  '/Building Outside - 1.webp',
  '/Complex-1 Construction 1.webp',
  '/Complex-1 Construction 2.webp',
  '/Complex-1 Construction.webp',
  '/Complex-2 Construction 1.webp',
  '/Complex-2 Construction 2.webp',
  '/Complex-2 Construction.webp',
  '/Main Building & Parking - 1.webp',
  '/Main Building & Parking - 2.webp',
  '/Main Building & Parking - 3.webp',
  '/Main Building & Parking - 4.webp',
  '/Main Complex - 1 b.webp',
  '/Main Complex - 1 c.webp',
  '/Main Complex - 1.webp',
  '/Main Complex - 2.webp',
  '/Multi-purpose Hall Main - 2.webp',
  '/Multi-purpose Hall outside - 3.webp',
  '/Multipurpose Hall Inside - 1.webp',
  '/Multipurpose Hall Inside - 2.webp',
  '/Multipurpose Hall Main.webp',
  '/Multipurpose Hall outside - 1.webp',
  '/Multipurpose Hall outside - 2.webp',
  '/Podium - 1.webp',
  '/Podium - 2.webp',
  '/Podium Main.webp',
  '/Road - 1.webp',
  '/Road - 2.webp',
  '/Road - 3.webp',
  '/Road main.webp'
];

export default function GalleryPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage(prev => (prev !== null ? (prev + 1) % allGalleryImages.length : 0));
  }, []);

  const prevImage = useCallback(() => {
    setSelectedImage(prev => (prev !== null ? (prev - 1 + allGalleryImages.length) % allGalleryImages.length : 0));
  }, []);

  const handleBackToGallery = useCallback(() => {
    router.push('/#gallery');
  }, [router]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, nextImage, prevImage]);

  // Memoized gallery items for performance
  const galleryItems = useMemo(() => 
    allGalleryImages.map((image, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
        transition={{ 
          duration: 0.4, 
          delay: 0.8 + (index * 0.03)
        }}
        className="group"
      >
        <div className="relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
          <PhotoThumbnail
            src={image}
            index={index}
            onClick={() => openLightbox(index)}
            size="large"
            isVisible={isLoaded}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>
    )), [isLoaded, openLightbox]
  );

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-sm sticky top-0 z-40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBackToGallery}
                className="group relative overflow-hidden rounded-xl bg-slate-900 px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Gallery
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
              
              <button
                onClick={scrollToTop}
                className="inline-flex items-center px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-300"
              >
                <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Top
              </button>
            </div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-12 pb-8 bg-white border-t border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <div className="text-xs font-semibold text-slate-500 tracking-widest mb-3 uppercase">Our Gallery</div>
                <h1 className="text-4xl md:text-6xl font-black mb-4 text-slate-900 leading-tight">
                 <span className="text-slate-600">Gallery</span>
                </h1>
                <div className="flex justify-center mb-6">
                  <div className="h-1 w-24 bg-gradient-to-r from-slate-700 to-slate-500 rounded-full" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  Discover our complete collection of exceptional projects and architectural achievements
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Gallery Grid */}
        <section className="pt-8 pb-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
            >
              {galleryItems}
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="py-16 bg-slate-900 text-white"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let&apos;s discuss how we can bring your construction vision to life
            </p>
            <button
              onClick={() => router.push('/#contact')}
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </motion.section>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full min-h-[60vh]">
                <Image
                  src={allGalleryImages[selectedImage]}
                  alt=""
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  quality={95}
                  priority
                />
              </div>
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {selectedImage + 1} of {allGalleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}