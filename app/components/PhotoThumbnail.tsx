'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhotoThumbnailProps {
  src: string;
  index: number;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  isVisible?: boolean;
}

const PhotoThumbnail: React.FC<PhotoThumbnailProps> = ({ 
  src, 
  index, 
  onClick, 
  size = 'medium',
  isVisible = true 
}) => {
  const sizeClasses = {
    small: 'aspect-square',
    medium: 'relative h-56 overflow-hidden',
    large: 'aspect-[4/3]'
  };

  const containerClasses = {
    small: 'group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200',
    medium: 'relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200',
    large: 'rounded-2xl shadow-lg hover:shadow-2xl'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20 
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      className={containerClasses[size]}
      onClick={onClick}
      whileHover={{ 
        scale: size === 'medium' ? 1.02 : 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={size === 'medium' ? 'relative h-56 overflow-hidden' : size === 'small' ? 'relative aspect-square overflow-hidden' : sizeClasses[size]}>
        <Image
          src={src}
          alt=""
          fill
          className={`object-cover transition-transform duration-300 ${size === 'medium' ? 'group-hover:scale-105' : 'group-hover:scale-110'}`}
          sizes={
            size === 'small' 
              ? "(max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
              : size === 'medium'
              ? "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          quality={85}
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${size === 'medium' ? 'from-black/60 via-transparent to-transparent' : 'from-slate-900/40 via-transparent to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Hover Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {/* Subtle Border on Hover */}
        <div className={`absolute inset-0 ${size === 'large' ? 'rounded-2xl' : 'rounded-xl'} border-2 border-transparent group-hover:border-white/10 transition-all duration-300`} />
      </div>
    </motion.div>
  );
};

export default PhotoThumbnail;