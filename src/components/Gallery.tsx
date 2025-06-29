'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface GalleryItem {
  category: string;
  title: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    category: 'school',
    title: 'P.E.C Achievement',
    image: '/gallery/pec.jpg',
    description: 'Proudly receiving the P.E.C certificate'
  },
  {
    category: 'tech',
    title: 'Linux Workspace',
    image: '/gallery/linux.jpg',
    description: 'My customized Linux development environment'
  },
  {
    category: 'tech',
    title: 'FydeOS Setup',
    image: '/gallery/fydeos.jpg',
    description: 'FydeOS running smoothly with custom configurations'
  },
  {
    category: 'tech',
    title: 'Custom ROM Development',
    image: '/gallery/custom-rom.jpg',
    description: 'Working on custom ROM development'
  },
  {
    category: 'places',
    title: 'Sarishabari Streets',
    image: '/gallery/sarishabari.jpg',
    description: 'The beautiful streets of my hometown'
  }
];

const categories = ['all', 'school', 'tech', 'places'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section id="gallery" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-16"
        >
          Frames of My Life
        </motion.h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${
                selectedCategory === category
                  ? 'bg-accent text-primary'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative">
                <div className="w-full h-full bg-gray-200 animate-pulse absolute" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full aspect-w-16 aspect-h-9"
              >
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-semibold text-xl mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-200">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
