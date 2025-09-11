#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vercel image validation script
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// All images that should exist
const REQUIRED_IMAGES = [
  'Complex-1 Construction.webp',
  'Complex-2 Construction.webp', 
  'Complex-1 Construction 1.webp',
  'rise-logo.webp',
  'Building A - 2.webp',
  'Building Outside - 1.webp',
  'Multipurpose Hall Inside - 2.webp',
  'Road main.webp',
  'Main Building & Parking - 2.webp',
  'Complex-1 Main.webp',
  'Podium Main.webp',
  'Podium - 1.webp',
  'Podium - 2.webp',
  'Building A - 1.webp',
  'Multipurpose Hall Main.webp',
  'Multi-purpose Hall Main - 2.webp',
  'Multi-purpose Hall outside - 3.webp',
  'Multipurpose Hall outside - 1.webp',
  'Multipurpose Hall outside - 2.webp',
  'Multipurpose Hall Inside - 1.webp',
  'Complex-2 Main.webp',
  'Complex-2 Construction.webp',
  'Complex-2 Construction 1.webp',
  'Complex-2 Construction 2.webp',
  'Main Building & Parking - 1.webp',
  'Main Building & Parking - 3.webp',
  'Main Building & Parking - 4.webp',
  'Road - 1.webp',
  'Road - 2.webp',
  'Road - 3.webp'
];

function validateImages() {
  console.log('🔍 Validating images for Vercel deployment...\n');
  
  let missingImages = [];
  let existingImages = [];
  
  REQUIRED_IMAGES.forEach(imageName => {
    const imagePath = path.join(PUBLIC_DIR, imageName);
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      existingImages.push({
        name: imageName,
        size: (stats.size / 1024).toFixed(2) + ' KB'
      });
    } else {
      missingImages.push(imageName);
    }
  });
  
  // Report results
  console.log(`✅ Found ${existingImages.length} images:`);
  existingImages.forEach(img => {
    console.log(`   • ${img.name} (${img.size})`);
  });
  
  if (missingImages.length > 0) {
    console.log(`\n❌ Missing ${missingImages.length} images:`);
    missingImages.forEach(img => {
      console.log(`   • ${img}`);
    });
    
    console.log('\n⚠️  Some images are missing from the public folder.');
    console.log('This may cause issues during Vercel deployment.');
    
    // Don't fail the build, just warn
    // process.exit(1);
  } else {
    console.log('\n🎉 All required images are present!');
  }
  
  // Check for unused images in public
  const allPublicImages = fs.readdirSync(PUBLIC_DIR)
    .filter(file => file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png'))
    .filter(file => file !== 'favicon.ico');
  
  const unusedImages = allPublicImages.filter(img => !REQUIRED_IMAGES.includes(img));
  
  if (unusedImages.length > 0) {
    console.log(`\n📋 Found ${unusedImages.length} additional images in public folder:`);
    unusedImages.forEach(img => {
      console.log(`   • ${img}`);
    });
  }
  
  console.log('\n✨ Image validation complete!\n');
}

// Run validation
validateImages();
