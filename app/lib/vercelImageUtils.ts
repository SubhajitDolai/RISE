'use client';

// Global image utilities for worldwide accessibility
export const GLOBAL_IMAGE_DOMAINS = [
  process.env.NEXT_PUBLIC_VERCEL_URL,
  process.env.VERCEL_URL,
  'localhost',
  ...(typeof window !== 'undefined' ? [window.location.hostname] : []),
].filter(Boolean);

// All images used in the application - verified to exist
export const ALL_IMAGES = [
  // Hero slides
  '/Complex-1 Construction.webp',
  '/Complex-2 Construction.webp',
  '/Complex-1 Construction 1.webp',
  
  // Company assets
  '/rise-logo.webp',
  
  // Service images
  '/Building A - 2.webp',
  '/Building Outside - 1.webp',
  '/Multipurpose Hall Inside - 2.webp',
  '/Road main.webp',
  '/Main Building & Parking - 2.webp',
  '/Complex-1 Main.webp',
  
  // Project images - verified to exist in public folder
  '/Podium Main.webp',
  '/Podium - 1.webp',
  '/Podium - 2.webp',
  '/Building A - 1.webp',
  '/Multipurpose Hall Main.webp',
  '/Multi-purpose Hall Main - 2.webp',
  '/Multi-purpose Hall outside - 3.webp',
  '/Multipurpose Hall outside - 1.webp',
  '/Multipurpose Hall outside - 2.webp',
  '/Multipurpose Hall Inside - 1.webp',
  '/Complex-2 Main.webp',
  '/Complex-2 Construction.webp',
  '/Complex-2 Construction 1.webp',
  '/Complex-2 Construction 2.webp',
  '/Main Building & Parking - 1.webp',
  '/Main Building & Parking - 3.webp',
  '/Main Building & Parking - 4.webp',
  '/Road - 1.webp',
  '/Road - 2.webp',
  '/Road - 3.webp'
];

// Priority images for preloading
export const PRIORITY_IMAGES = [
  '/Complex-1 Construction.webp', // Hero first slide
  '/rise-logo.webp', // Company logo
  '/Building A - 2.webp', // First service image
  '/Building Outside - 1.webp', // Second service image
];

// Enhanced fallback image - more descriptive
export const FALLBACK_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDQwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjFGNUY5Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEwOCIgcj0iMjAiIGZpbGw9IiM5Q0EzQUYiLz4KPHJlY3QgeD0iMTYwIiB5PSIxNDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0IiBmaWxsPSIjOUNBM0FGIi8+CjxyZWN0IHg9IjE3MCIgeT0iMTUwIiB3aWR0aD0iNjAiIGhlaWdodD0iNCIgZmlsbD0iIzlDQTNBRiIvPgo8dGV4dCB4PSIyMDAiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ3NDhCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SSVNFPC90ZXh0Pgo8L3N2Zz4K';

// Global cache busting parameter
const getCacheBuster = () => {
  if (typeof window !== 'undefined') {
    return `?v=${Date.now()}`;
  }
  return '';
};

// Check if image exists with better error handling
export const checkImageExists = async (src: string): Promise<boolean> => {
  if (typeof window === 'undefined') return true; // SSR fallback
  
  try {
    const response = await fetch(src, { 
      method: 'HEAD',
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    return response.ok;
  } catch {
    return false;
  }
};

// Get globally accessible image URL
export const getOptimizedImageUrl = (src: string): string => {
  if (src.startsWith('http')) return src; // External URLs
  if (src.startsWith('data:')) return src; // Data URLs
  
  // For local development and global accessibility
  if (typeof window !== 'undefined') {
    const baseUrl = window.location.origin;
    return `${baseUrl}${src}${getCacheBuster()}`;
  }
  
  // Fallback for SSR
  return src;
};

// Clear browser cache and force image reload - safer version
export const clearImageCache = (): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }
    
    try {
      // Clear browser cache
      if ('caches' in window) {
        caches.keys().then(names => {
          const promises = names.map(name => caches.delete(name));
          return Promise.all(promises);
        }).then(() => {
          console.log('🧹 Browser cache cleared');
          resolve();
        }).catch(() => {
          console.warn('Failed to clear some caches');
          resolve();
        });
      } else {
        resolve();
      }
      
      // Force reload images
      ALL_IMAGES.forEach(src => {
        const img = new Image();
        img.src = getOptimizedImageUrl(src);
      });
      
      console.log('🧹 Image cache cleared and images reloaded');
    } catch (error) {
      console.warn('Error clearing cache:', error);
      resolve();
    }
  });
};

// Simpler cache buster for individual images
export const bustImageCache = (src: string): string => {
  console.log('🔧 Busting cache for:', src);
  
  if (typeof window === 'undefined') return src;
  
  const url = getOptimizedImageUrl(src);
  const separator = url.includes('?') ? '&' : '?';
  const bustedUrl = `${url}${separator}bust=${Date.now()}`;
  
  console.log('🔧 Cache busted URL:', bustedUrl);
  return bustedUrl;
};

// Preload critical images with global accessibility
export const preloadCriticalImagesVercel = () => {
  if (typeof window === 'undefined') return;

  // Clear existing preload links
  const existingLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
  existingLinks.forEach(link => link.remove());

  PRIORITY_IMAGES.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = getOptimizedImageUrl(src);
    link.fetchPriority = 'high';
    link.crossOrigin = 'anonymous';
    
    // Add cache control
    link.setAttribute('cache-control', 'no-cache');
    
    document.head.appendChild(link);
  });
  
  console.log('🚀 Critical images preloaded with cache busting');
};

// Force reload all images globally
export const forceReloadAllImages = () => {
  if (typeof window === 'undefined') return;
  
  // Find all img elements and reload them
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    const originalSrc = img.src;
    img.src = '';
    img.src = originalSrc.includes('?') 
      ? `${originalSrc}&reload=${Date.now()}` 
      : `${originalSrc}?reload=${Date.now()}`;
  });
  
  console.log('🔄 All images force reloaded');
};

// Validate all images exist (for build time)
export const validateImages = async (): Promise<{ existing: string[], missing: string[] }> => {
  const results = await Promise.allSettled(
    ALL_IMAGES.map(async (src) => ({
      src,
      exists: await checkImageExists(getOptimizedImageUrl(src))
    }))
  );

  const existing: string[] = [];
  const missing: string[] = [];

  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      if (result.value.exists) {
        existing.push(result.value.src);
      } else {
        missing.push(result.value.src);
      }
    }
  });

  return { existing, missing };
};
