import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedMenu } from './components/FeaturedMenu';
import { AboutSection } from './components/AboutSection';
import { WhyVisit } from './components/WhyVisit';
import { FoodGallery } from './components/FoodGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 flex flex-col selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section (One high-quality pizza hero image, no overlays/cards over image) */}
        <Hero />

        {/* 2. Featured Menu (Small selection, 7 items max, small thumbnails, transparent pricing) */}
        <FeaturedMenu />

        {/* 3. About Section (Short, strictly verified information only) */}
        <AboutSection />

        {/* 4. Why Visit (Compact 4 grounded points) */}
        <WhyVisit />

        {/* 5. Food Gallery (5 distinct high-res food photos, no repetition) */}
        <FoodGallery />

        {/* 6. Contact & Google Maps Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightweight Chatbot Assistant (Verified info only) */}
      <ChatbotWidget />
    </div>
  );
}
