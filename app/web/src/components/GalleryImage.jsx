import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

function GalleryImage({ src, alt, title, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group relative overflow-hidden rounded-xl cursor-pointer"
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-medium">{title}</p>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default GalleryImage;