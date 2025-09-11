'use client';

import { useEffect, useState } from 'react';
import { clearImageCache, forceReloadAllImages, validateImages } from '../../lib/vercelImageUtils';

interface CacheManagerProps {
  showControls?: boolean;
}

export default function CacheManager({ showControls = false }: CacheManagerProps) {
  const [cacheCleared, setCacheCleared] = useState(false);
  const [imagesReloaded, setImagesReloaded] = useState(false);
  const [imageStatus, setImageStatus] = useState<{ existing: string[], missing: string[] } | null>(null);

  const handleClearCache = async () => {
    clearImageCache();
    setCacheCleared(true);
    setTimeout(() => setCacheCleared(false), 3000);
  };

  const handleReloadImages = () => {
    forceReloadAllImages();
    setImagesReloaded(true);
    setTimeout(() => setImagesReloaded(false), 3000);
  };

  const handleValidateImages = async () => {
    const status = await validateImages();
    setImageStatus(status);
  };

  // Auto-validate images on mount
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      handleValidateImages();
    }
  }, []);

  if (!showControls && process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-900 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <h3 className="text-sm font-bold mb-2">🛠️ Image Cache Manager</h3>
      
      <div className="flex flex-col gap-2 text-xs">
        <button
          onClick={handleClearCache}
          className={`px-3 py-1 rounded ${cacheCleared ? 'bg-green-600' : 'bg-slate-700 hover:bg-slate-600'}`}
        >
          {cacheCleared ? '✅ Cache Cleared' : '🧹 Clear Cache'}
        </button>
        
        <button
          onClick={handleReloadImages}
          className={`px-3 py-1 rounded ${imagesReloaded ? 'bg-green-600' : 'bg-slate-700 hover:bg-slate-600'}`}
        >
          {imagesReloaded ? '✅ Images Reloaded' : '🔄 Reload All Images'}
        </button>
        
        <button
          onClick={handleValidateImages}
          className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600"
        >
          🔍 Validate Images
        </button>
      </div>

      {imageStatus && (
        <div className="mt-3 text-xs">
          <div className="text-green-400">✅ {imageStatus.existing.length} images found</div>
          {imageStatus.missing.length > 0 && (
            <div className="text-red-400">❌ {imageStatus.missing.length} missing</div>
          )}
        </div>
      )}
      
      <div className="mt-2 text-xs text-slate-400">
        Global cache management for worldwide accessibility
      </div>
    </div>
  );
}
