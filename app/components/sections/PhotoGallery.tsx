'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { projectsData } from '../../lib/data/projects';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoGalleryProps {
  isVisible?: { [key: string]: boolean };
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ isVisible }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  // Collect featured images from projects (first 12)
  const getFeaturedImages = () => {
    const allImages: string[] = [];
    
    projectsData.forEach((project) => {
      // Add main image
      if (project.mainImage && !allImages.includes(project.mainImage)) {
        allImages.push(project.mainImage);
      }
      // Add project images
      project.images.forEach((image: string) => {
        if (!allImages.includes(image) && allImages.length < 12) {
          allImages.push(image);
        }
      });
    });
    
    return allImages.slice(0, 12);
  };

  const featuredImages = getFeaturedImages();

  const openLightbox = (image: string) => {
    const imageIndex = featuredImages.findIndex(img => img === image);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    const nextIndex = (currentImageIndex + 1) % featuredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(featuredImages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = currentImageIndex === 0 ? featuredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(featuredImages[prevIndex]);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <div className="text-xs font-semibold text-slate-500 tracking-widest mb-2 uppercase">
              Photo Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Our Work Gallery
            </h2>
            <div className="h-1 w-20 bg-slate-700 rounded mx-auto mb-6" />
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A showcase of our finest construction projects and architectural achievements
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image}
                id={`gallery-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isVisible?.[`gallery-${index}`] ? 1 : 0,
                  y: isVisible?.[`gallery-${index}`] ? 0 : 20 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image)}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  quality={85}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Subtle Border on Hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/10 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* View More Photos Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => router.push('/gallery')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View More Photos
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            {featuredImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt=""
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} of {featuredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;