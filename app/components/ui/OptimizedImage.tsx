'use client';

import Image from 'next/image';
import { useState, memo, useEffect } from 'react';
import { getOptimizedImageUrl, FALLBACK_IMAGE, bustImageCache } from '@/app/lib/vercelImageUtils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const OptimizedImage = memo(({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  fill = false,
  sizes,
  placeholder = 'empty',
  blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhEDEQA/AKrmeQ8mQx81TxM0M8PdBNy5cQ'
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retryCount, setRetryCount] = useState(0);

  // Handle global image URL optimization with cache busting
  useEffect(() => {
    const optimizedSrc = getOptimizedImageUrl(src);
    setCurrentSrc(optimizedSrc);
    setError(false);
    setRetryCount(0);
  }, [src]);

  const handleLoadComplete = () => {
    setIsLoading(false);
    setError(false);
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${currentSrc} (Attempt ${retryCount + 1})`);
    
    // Retry logic with cache busting
    if (retryCount < 2) {
      setTimeout(() => {
        if (retryCount === 0) {
          // First retry: use cache busting
          setCurrentSrc(bustImageCache(src));
        } else {
          // Second retry: try with different cache buster
          setCurrentSrc(bustImageCache(src));
        }
        setRetryCount(prev => prev + 1);
        setError(false);
      }, 1000 * (retryCount + 1)); // Progressive delay
    } else {
      // Final fallback
      if (currentSrc !== FALLBACK_IMAGE && !currentSrc.includes('data:image')) {
        setCurrentSrc(FALLBACK_IMAGE);
        setError(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    }
  };

  if (error) {
    return (
      <div className={`bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center ${fill ? 'absolute inset-0' : 'w-full h-full'} ${className}`}>
        <div className="text-center p-4">
          <div className="text-slate-500 text-lg mb-2">🏗️</div>
          <span className="text-slate-600 text-xs">RISE Image Loading...</span>
          <br />
          <button 
            onClick={() => window.location.reload()} 
            className="text-slate-500 text-xs mt-1 hover:text-slate-700 underline"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      {isLoading && !priority && (
        <div className={`absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse ${fill ? '' : 'aspect-video'}`} />
      )}
      <Image
        src={currentSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={`transition-opacity duration-500 ${isLoading && !priority ? 'opacity-0' : 'opacity-100'} ${className}`}
        placeholder={placeholder}
        blurDataURL={placeholder === 'blur' ? blurDataURL : undefined}
        onLoad={handleLoadComplete}
        onError={handleError}
        unoptimized={process.env.NODE_ENV === 'development'}
        crossOrigin="anonymous"
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
export { OptimizedImage };
