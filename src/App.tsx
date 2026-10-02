import React, { useState, useEffect } from 'react';
import { Language, PortfolioItem } from './types';
import { INSTAGRAM_URL } from './data/constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { GoogleAiSection } from './components/GoogleAiSection';
import { BookingFrictionSection } from './components/BookingFrictionSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { DemoSiteModal } from './components/DemoSiteModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [selectedDemoProject, setSelectedDemoProject] = useState<PortfolioItem | null>(null);

  // Sync document title and meta tag based on chosen language (PT or ES)
  useEffect(() => {
    const titles: Record<Language, string> = {
      pt: 'GlowSite — Sites Premium para Profissionais da Beleza (24h)',
      es: 'GlowSite — Webs Premium para Profesionales de la Belleza (24h)',
    };
    document.title = titles[currentLang] || titles.pt;
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleOpenInstagram = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A140B] font-sans antialiased selection:bg-[#B88928]/25 selection:text-[#8C641C]">
      
      {/* Top Bar with Language Selector (PT & ES) and Instagram CTA */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBriefing={handleOpenInstagram}
      />

      <main>
        {/* 1. Hero Section (Fundo Bege Claro - Lash Studio única prévia) */}
        <Hero
          currentLang={currentLang}
          onOpenBriefing={handleOpenInstagram}
          onExplorePortfolio={() => {
            const target = document.querySelector('#portfolio');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. The Problem Section (Fundo Dourado) */}
        <ProblemSection currentLang={currentLang} />

        {/* 3. The Solution Section (Fundo Bege Claro - Imagem de luxo atualizada) */}
        <SolutionSection
          currentLang={currentLang}
          onOpenBriefing={handleOpenInstagram}
        />

        {/* 4. Deliverables Section (Fundo Dourado - "E muito mais!") */}
        <DeliverablesSection currentLang={currentLang} />

        {/* 5. Google + AI Discovery Interactive Simulator (Fundo Bege Claro) */}
        <GoogleAiSection currentLang={currentLang} />

        {/* 6. Booking Friction & Elimination (Fundo Dourado) */}
        <BookingFrictionSection
          currentLang={currentLang}
          onOpenBriefing={handleOpenInstagram}
        />

        {/* 7. Before & After Interactive Comparison (Fundo Bege Claro) */}
        <BeforeAfterSection
          currentLang={currentLang}
          onOpenBriefing={handleOpenInstagram}
        />

        {/* 8. Interactive Portfolio with Live Mobile Previews (Fundo Dourado) */}
        <PortfolioSection
          currentLang={currentLang}
          onSelectProject={(project) => setSelectedDemoProject(project)}
        />

        {/* 9. Process in 24h (Fundo Bege Claro) */}
        <ProcessSection
          currentLang={currentLang}
          onOpenBriefing={handleOpenInstagram}
        />

        {/* 10. Authentic Testimonials (Fundo Dourado) */}
        <TestimonialsSection currentLang={currentLang} />

        {/* 11. Main Offer: GLOWSITE PREMIUM (Fundo Bege Claro) */}
        <OfferSection
          currentLang={currentLang}
          onOpenBriefing={handleOpenInstagram}
          onOpenWhatsapp={handleOpenInstagram}
        />

        {/* 12. Interactive FAQ Accordion (Fundo Dourado) */}
        <FaqSection currentLang={currentLang} />

        {/* 13. Final High-Impact CTA (Fundo Bege Claro) */}
        <CtaFinal
          currentLang={currentLang}
          onOpenBriefing={handleOpenInstagram}
        />
      </main>

      {/* Footer (Luxury Dark Bronze Anchor) */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBriefing={handleOpenInstagram}
      />

      {/* Mobile Bottom Quick Action Bar (<= 15% viewport height) */}
      <MobileStickyBar
        currentLang={currentLang}
        onOpenBriefing={handleOpenInstagram}
        onOpenWhatsapp={handleOpenInstagram}
      />

      {/* Interactive Mobile Demo Website Modal */}
      <DemoSiteModal
        item={selectedDemoProject}
        onClose={() => setSelectedDemoProject(null)}
        currentLang={currentLang}
        onOpenBriefing={() => {
          setSelectedDemoProject(null);
          handleOpenInstagram();
        }}
      />

    </div>
  );
}
