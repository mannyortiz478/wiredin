// components/GallerySection.tsx

import React from 'react';
import dynamic from 'next/dynamic';

const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });

const ImageGallery: React.FC = () => {
  const isClient = typeof window !== 'undefined';

  // Array of imported image files
  const images: string[] = [
    // Add more image imports here
  ];

  return (
    <section id="gallery" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Image Gallery</h2>
        {isClient && (
          <AliceCarousel
            mouseTracking
            items={images.map((index) => (
              <div key={index} className="w-64 h-64 mr-4">
                <div className="bg-gray-200 rounded-md overflow-hidden shadow-lg">
                </div>
              </div>
            ))}
          />
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
