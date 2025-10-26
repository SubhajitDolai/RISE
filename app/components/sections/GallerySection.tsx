'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import PhotoThumbnail from '../PhotoThumbnail';

// Gallery images array
const galleryImages = [
  '/Building A - 1.webp',
  '/Building A - 2.webp',
  '/Building Outside - 1.webp',
  '/Complex-1 Construction 1.webp',
  '/Complex-1 Construction 2.webp',
  '/Complex-2 Construction 1.webp',
  '/Main Building & Parking - 1.webp',
  '/Main Building & Parking - 2.webp',
  '/Main Complex - 1.webp',
  '/Main Complex - 2.webp',
  '/Multipurpose Hall Inside - 1.webp',
  '/Multipurpose Hall Inside - 2.webp'
];

interface GallerySectionProps {
  id?: string;
  isVisible?: { [key: string]: boolean };
}

const GallerySection: React.FC<GallerySectionProps> = ({ id = 'gallery', isVisible: visibilityMap }) => {
  const router = useRouter();
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const isVisible = visibilityMap?.[id] || isGalleryVisible;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGalleryVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [id]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setSelectedImage(prev => (prev !== null ? (prev + 1) % galleryImages.length : 0));
  };

  const prevImage = () => {
    setSelectedImage(prev => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0));
  };

  return (
    <>
      <section id={id} className="py-32 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 40 
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 fade-in-element"
          >
            <div className="text-xs font-semibold text-slate-500 tracking-widest mb-2 uppercase">Our Gallery</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-slate-900 text-left">Captured Moments</h2>
            <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
            <p className="text-slate-500 text-lg max-w-2xl text-left">
              A glimpse into our premium projects and experiences.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`fade-in-element ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <PhotoThumbnail
                  src={image}
                  index={index}
                  onClick={() => openLightbox(index)}
                  size="small"
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>

          {/* View More Photos Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20 
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-left"
          >
            <button
              onClick={() => router.push('/gallery')}
              className="group relative overflow-hidden rounded-xl bg-slate-900 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                View More Photos
                <svg 
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </motion.div>
        </div>
      </section>

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
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full min-h-[60vh]">
                <Image
                  src={galleryImages[selectedImage]}
                  alt=""
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  quality={90}
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
                {selectedImage + 1} of {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;