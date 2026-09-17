import React from 'react';
import { Phone, Info } from 'lucide-react';
import { FEATURED_MENU, RESTAURANT_INFO } from '../data/restaurantData';

export const FeaturedMenu: React.FC = () => {
  return (
    <section id="menu" className="py-12 sm:py-16 bg-white border-y border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-2">
            <span>Featured Selection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Popular Pizzas & Fast Food
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            A small curated selection of customer favorites prepared fresh.
          </p>

          {/* Pricing Transparency Note */}
          <div className="mt-4 p-3 bg-neutral-50 rounded-lg border border-neutral-200/80 text-left sm:text-center text-xs text-neutral-600 flex items-start sm:items-center justify-center gap-2">
            <Info className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Note on Pricing:</strong> Counter rates and daily deals are confirmed by phone. Call{' '}
              <a href={RESTAURANT_INFO.primaryPhoneLink} className="text-red-600 font-semibold underline">
                {RESTAURANT_INFO.primaryPhone}
              </a>{' '}
              for today&apos;s current menu prices and deals.
            </span>
          </div>
        </div>

        {/* Compact Grid: 2 Columns on Desktop, 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {FEATURED_MENU.map((item, index) => (
            <div
              key={item.id}
              id={`menu-card-${index + 1}`}
              className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl border border-neutral-200 bg-[#FAF8F5] hover:bg-white hover:border-neutral-300 hover:shadow-xs transition-all"
            >
              {/* SMALL Food Image: Strictly compact (76px x 76px) */}
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-neutral-200 border border-neutral-200/80">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={160}
                  height={160}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Item Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 truncate">
                    {item.name}
                  </h3>
                  <span className="shrink-0 text-[11px] font-semibold text-neutral-500 bg-neutral-200/60 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-2">
                  {item.description}
                </p>

                {/* Direct Call / Inquiry Link */}
                <div className="flex items-center justify-between pt-1 border-t border-neutral-200/60 text-xs">
                  <span className="text-[11px] font-medium text-neutral-500 italic">
                    Call for pricing & deals
                  </span>
                  <a
                    href={RESTAURANT_INFO.primaryPhoneLink}
                    className="inline-flex items-center gap-1 font-semibold text-red-600 hover:text-red-700 transition-colors text-xs"
                    title={`Call to order ${item.name}`}
                  >
                    <Phone className="w-3 h-3" />
                    <span>Inquire / Order</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500">
            Have questions about flavor choices, sizes, or special order requests?
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={RESTAURANT_INFO.primaryPhoneLink}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-lg border border-neutral-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Direct Line 1: {RESTAURANT_INFO.primaryPhone}</span>
            </a>
            <a
              href={RESTAURANT_INFO.secondaryPhoneLink}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-lg border border-neutral-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Direct Line 2: {RESTAURANT_INFO.secondaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
