import React from 'react';
import { MapPin, Phone, ExternalLink, Navigation, Instagram, Facebook, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-2">
            <span>Location & Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Visit & Contact Pizza 1
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Direct phone numbers and verified location details for Peshawar Road, Rawalpindi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4 pb-3 border-b border-neutral-200/80">
                Restaurant Contact Details
              </h3>

              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Address
                    </span>
                    <p className="font-semibold text-neutral-900 text-base mt-0.5">
                      {RESTAURANT_INFO.address}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Peshawar Road, Rawalpindi, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3 pt-2 border-t border-neutral-200/60">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Phone Numbers (Tap to call)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5">
                      <a
                        href={RESTAURANT_INFO.primaryPhoneLink}
                        className="inline-flex items-center gap-2 p-2 rounded-lg bg-white border border-neutral-200 text-red-600 font-bold hover:border-red-500 hover:bg-red-50/50 transition-all text-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{RESTAURANT_INFO.primaryPhone}</span>
                      </a>
                      <a
                        href={RESTAURANT_INFO.secondaryPhoneLink}
                        className="inline-flex items-center gap-2 p-2 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-bold hover:border-neutral-400 hover:bg-neutral-50 transition-all text-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{RESTAURANT_INFO.secondaryPhone}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-2 border-t border-neutral-200/60">
                  <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    Social Channels
                  </span>

                  <div className="space-y-2">
                    {/* Instagram - Official */}
                    <a
                      href={RESTAURANT_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <Instagram className="w-4 h-4 text-pink-600" />
                        <span className="font-semibold text-neutral-900">Instagram:</span>
                        <span className="text-neutral-600">{RESTAURANT_INFO.instagramHandle}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Official Page
                      </span>
                    </a>

                    {/* Facebook - With Honest Attribution */}
                    <a
                      href={RESTAURANT_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <Facebook className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-neutral-900">Facebook:</span>
                        <span className="text-neutral-600">hungrys.pk</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full">
                        <AlertCircle className="w-3 h-3 text-amber-600" />
                        <span>Associated Link</span>
                      </div>
                    </a>
                  </div>

                  <p className="text-[11px] text-neutral-500 mt-2 italic">
                    Note: The Facebook link provided is registered as &apos;hungrys.pk&apos; and is listed for reference.
                  </p>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-6 pt-4 border-t border-neutral-200/80 flex flex-wrap gap-2.5">
                <a
                  href={RESTAURANT_INFO.primaryPhoneLink}
                  id="contact-call-btn"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={RESTAURANT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-get-directions-btn"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Instagram</span>
                </a>

                <a
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Lightweight Google Maps Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-neutral-200 bg-[#FAF8F5] overflow-hidden shadow-2xs">
              <div className="p-4 bg-white border-b border-neutral-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-xs font-bold text-neutral-900">
                    Location Map: Peshawar Road, Rawalpindi
                  </span>
                </div>
                <a
                  href={RESTAURANT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Fast, lightweight iframe embed */}
              <div className="relative aspect-16/10 sm:aspect-16/11 w-full bg-neutral-100">
                <iframe
                  title="Google Maps Location of Pizza 1 Rawalpindi"
                  src={RESTAURANT_INFO.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border-t border-neutral-200/60">
                <span className="text-neutral-600">
                  Located directly on Peshawar Road in Rawalpindi.
                </span>
                <a
                  href={RESTAURANT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors shrink-0"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
