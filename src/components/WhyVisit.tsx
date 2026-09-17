import React from 'react';
import { Pizza, MapPin, PhoneCall, Globe2 } from 'lucide-react';

export const WhyVisit: React.FC = () => {
  const points = [
    {
      title: "Pizza & Fast Food",
      description: "Made-to-order baked pizzas and hot fast food selections prepared with quality ingredients.",
      icon: Pizza,
    },
    {
      title: "Peshawar Road Location",
      description: "Centrally positioned at 1, Peshawar Road, Rawalpindi for straightforward accessibility.",
      icon: MapPin,
    },
    {
      title: "Easy Phone Contact",
      description: "Direct mobile lines (0336 7111124 and 0314 5169922) available for fast inquiries.",
      icon: PhoneCall,
    },
    {
      title: "Convenient Online Info",
      description: "Verified address, instant map directions, and direct social links for quick reference.",
      icon: Globe2,
    },
  ];

  return (
    <section id="why-visit" className="py-12 sm:py-16 bg-white border-y border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-2">
            <span>Highlights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Why Visit Pizza 1
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Straightforward service, convenient location, and fresh flavors in Rawalpindi.
          </p>
        </div>

        {/* 4 Compact Modern Feature Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FAF8F5] border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col items-start text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600/10 text-red-600 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">
                  {pt.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
