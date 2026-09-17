import React from 'react';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-3">
          <span>About Our Restaurant</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-4">
          Pizza 1 in Rawalpindi
        </h2>

        {/* Grounded & Honest Description */}
        <div className="text-sm sm:text-base text-neutral-700 leading-relaxed space-y-3 max-w-2xl mx-auto">
          <p>
            <strong>Pizza 1</strong> is a local pizza and fast food restaurant situated at{' '}
            <strong>1, Peshawar Road, Rawalpindi, Pakistan</strong>.
          </p>
          <p>
            We focus on preparing freshly baked pizzas with melted cheeses and savory toppings, alongside classic fast food favorites. Whether you are in the neighborhood or passing through Peshawar Road, our kitchen is dedicated to quality ingredients, warm food, and quick service.
          </p>
        </div>

        {/* Compact Key Details Card */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-1">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>Location</span>
            </div>
            <p className="text-xs text-neutral-600">
              1, Peshawar Road, Rawalpindi, Pakistan
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-1">
              <Phone className="w-4 h-4 text-red-600" />
              <span>Contact Lines</span>
            </div>
            <p className="text-xs text-neutral-600">
              0336 7111124<br />0314 5169922
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-1">
              <CheckCircle2 className="w-4 h-4 text-red-600" />
              <span>Cuisine</span>
            </div>
            <p className="text-xs text-neutral-600">
              Fresh Baked Pizzas & Fast Food
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
