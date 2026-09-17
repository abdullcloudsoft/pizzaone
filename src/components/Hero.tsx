import React from 'react';
import { Phone, ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import heroPizzaImage from '../assets/images/pizza1_hero_artisan_1789627251161.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-[#FAF8F5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clean, Compact Typography & Direct Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Subtle Pill Tag */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-red-50 border border-red-200/60 text-red-700 text-xs font-semibold mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Pizza & Fast Food Restaurant</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-3"
            >
              Fresh Pizza.{' '}
              <span className="text-red-600">Great Taste.</span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg font-medium text-neutral-700 mb-2 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-red-600 shrink-0 inline" />
              <span>Pizza 1 — Peshawar Road, Rawalpindi</span>
            </p>

            {/* Concise descriptor */}
            <p className="text-sm text-neutral-600 leading-relaxed max-w-lg mb-6">
              Quality pizzas and delicious fast food favorites prepared fresh to order. Visit our location at 1, Peshawar Road or call for instant inquiries.
            </p>

            {/* Two Compact Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                id="hero-explore-menu-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 active:scale-98 transition-all shadow-xs"
              >
                <span>Explore Menu</span>
                <ArrowDown className="w-4 h-4 text-neutral-400" />
              </a>

              <a
                href={RESTAURANT_INFO.primaryPhoneLink}
                id="hero-call-now-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 active:scale-98 transition-all shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {RESTAURANT_INFO.primaryPhone}</span>
              </a>
            </div>

            {/* Quick Phone Contacts Bar */}
            <div className="mt-6 pt-4 border-t border-neutral-200/80 flex flex-wrap items-center gap-4 text-xs text-neutral-600">
              <span className="font-semibold text-neutral-800">Direct Phone Order Lines:</span>
              <a
                href={RESTAURANT_INFO.primaryPhoneLink}
                className="hover:text-red-600 font-medium underline underline-offset-2 transition-colors"
              >
                {RESTAURANT_INFO.primaryPhone}
              </a>
              <span className="text-neutral-300">•</span>
              <a
                href={RESTAURANT_INFO.secondaryPhoneLink}
                className="hover:text-red-600 font-medium underline underline-offset-2 transition-colors"
              >
                {RESTAURANT_INFO.secondaryPhone}
              </a>
            </div>
          </div>

          {/* Right Column: High Resolution Pizza Hero Image - Pure, Sharp, Unobscured */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-neutral-200/80 bg-white">
              <img
                src={heroPizzaImage}
                alt="Freshly baked artisan pizza from Pizza 1 on Peshawar Road, Rawalpindi"
                className="w-full h-auto max-h-[440px] object-cover block transform hover:scale-[1.01] transition-transform duration-300"
                width={800}
                height={500}
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle caption beneath image, no overlay */}
            <p className="text-[12px] text-neutral-500 mt-2 text-center lg:text-right">
              Freshly baked artisanal pizzas at 1, Peshawar Road, Rawalpindi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
