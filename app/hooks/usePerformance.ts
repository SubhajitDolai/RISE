import { useEffect, useCallback } from 'react';

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Element;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export const usePerformance = () => {
  // Monitor Core Web Vitals
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as FirstInputEntry;
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Preload critical images
      const criticalImages = [
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=1920&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop'
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }
  }, []);

  // Optimize scroll performance
  const optimizeScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Scroll handling logic here
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    const cleanup = optimizeScroll();
    return cleanup;
  }, [preloadCriticalResources, optimizeScroll]);

  return {
    preloadCriticalResources,
    optimizeScroll
  };
};
