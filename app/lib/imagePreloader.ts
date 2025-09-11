'use client';

// Critical images that should be preloaded
const CRITICAL_IMAGES = [
  '/Complex-1 Construction.webp',
  '/Complex-2 Construction.webp', 
  '/Complex-1 Construction 1.webp',
  '/rise-logo.webp',
  '/Building A - 2.webp',
  '/Building Outside - 1.webp'
];

export const preloadCriticalImages = () => {
  if (typeof window === 'undefined') return;

  CRITICAL_IMAGES.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};
