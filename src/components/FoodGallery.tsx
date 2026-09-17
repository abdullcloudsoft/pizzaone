import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { FOOD_GALLERY } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const FoodGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-2">
            <span>Visual Glimpse</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Food Gallery
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            A visual preview of our fresh oven-baked pizzas and crispy sides.
          </p>
        </div>

        {/* Compact 5-item Food Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {FOOD_GALLERY.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${index + 1}`}
              onClick={() => setActiveItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-200 border border-neutral-200/80 aspect-4/3 sm:aspect-square shadow-2xs hover:shadow-md transition-all"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveItem(item);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={400}
                height={400}
                referrerPolicy="no-referrer"
              />

              {/* Minimal Hover Detail */}
              <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-white">
                <div className="text-center">
                  <Maximize2 className="w-5 h-5 mx-auto mb-1 text-white" />
                  <span className="text-[11px] font-semibold block truncate px-1">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-neutral-500 mt-4">
          Click any photo to view in high resolution
        </p>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-neutral-900">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.alt}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neutral-900/70 hover:bg-neutral-900 text-white flex items-center justify-center transition-colors focus:outline-hidden"
                aria-label="Close photo preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 bg-white border-t border-neutral-100">
              <h4 className="text-base font-bold text-neutral-900">{activeItem.title}</h4>
              <p className="text-xs text-neutral-600 mt-1">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
