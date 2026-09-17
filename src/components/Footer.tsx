import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Identity */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-base">
                P1
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Pizza 1</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Pizza & fast food restaurant located on Peshawar Road in Rawalpindi, Pakistan.
            </p>
          </div>

          {/* Col 2: Location */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Address
            </h4>
            <div className="flex items-start gap-2 text-xs text-neutral-400">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-neutral-200 font-medium">1, Peshawar Road</p>
                <p>Rawalpindi, Pakistan</p>
                <a
                  href={RESTAURANT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-[11px] text-red-400 hover:text-red-300 underline"
                >
                  Get Directions on Maps
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Contact Phones */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Direct Phone Lines
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <a
                  href={RESTAURANT_INFO.primaryPhoneLink}
                  className="text-neutral-200 hover:text-white transition-colors"
                >
                  {RESTAURANT_INFO.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <a
                  href={RESTAURANT_INFO.secondaryPhoneLink}
                  className="text-neutral-200 hover:text-white transition-colors"
                >
                  {RESTAURANT_INFO.secondaryPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Socials */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Online Channels
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>Instagram: {RESTAURANT_INFO.instagramHandle}</span>
              </a>
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-500" />
                <span>Facebook (hungrys.pk)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <p>© {currentYear} Pizza 1. 1, Peshawar Road, Rawalpindi, Pakistan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-neutral-300 transition-colors">Back to Top</a>
            <a href="#menu" className="hover:text-neutral-300 transition-colors">Menu</a>
            <a href="#contact" className="hover:text-neutral-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
