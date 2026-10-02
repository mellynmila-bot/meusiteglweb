import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBriefing: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBriefing,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/92 backdrop-blur-md border-b border-[#D4AF37]/35 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark strictly adhering to Top Bar Contract */}
        <a
          href="#"
          className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-[#1A140B] hover:text-[#8C641C] transition-colors flex items-center gap-1.5"
        >
          <span>GlowSite</span>
          <span className="w-2 h-2 rounded-full bg-[#B88928] inline-block shadow-[0_0_8px_#D4AF37]" />
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1A140B]/80">
          <a
            href="#problema"
            onClick={(e) => { e.preventDefault(); handleNavClick('#problema'); }}
            className="hover:text-[#8C641C] transition-colors hover:underline underline-offset-4 decoration-[#D4AF37]/60"
          >
            {t.nav.problem}
          </a>
          <a
            href="#solucao"
            onClick={(e) => { e.preventDefault(); handleNavClick('#solucao'); }}
            className="hover:text-[#8C641C] transition-colors hover:underline underline-offset-4 decoration-[#D4AF37]/60"
          >
            {t.nav.solution}
          </a>
          <a
            href="#entregas"
            onClick={(e) => { e.preventDefault(); handleNavClick('#entregas'); }}
            className="hover:text-[#8C641C] transition-colors hover:underline underline-offset-4 decoration-[#D4AF37]/60"
          >
            {t.nav.features}
          </a>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#portfolio'); }}
            className="hover:text-[#8C641C] transition-colors hover:underline underline-offset-4 decoration-[#D4AF37]/60"
          >
            {t.nav.portfolio}
          </a>
          <a
            href="#processo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#processo'); }}
            className="hover:text-[#8C641C] transition-colors hover:underline underline-offset-4 decoration-[#D4AF37]/60"
          >
            {t.nav.process}
          </a>
          <a
            href="#faq"
            onClick={(e) => { e.preventDefault(); handleNavClick('#faq'); }}
            className="hover:text-[#8C641C] transition-colors hover:underline underline-offset-4 decoration-[#D4AF37]/60"
          >
            {t.nav.faq}
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions (Language Selector + CTA) */}
        <div className="flex items-center gap-3">
          {/* Language Switcher: PT & ES only */}
          <div className="flex items-center bg-[#EFE9DD] border border-[#D4AF37]/40 rounded-lg p-0.5 text-xs font-medium shadow-xs">
            <button
              onClick={() => onLanguageChange('pt')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap flex items-center gap-1 ${
                currentLang === 'pt'
                  ? 'bg-[#B88928] text-white font-semibold shadow-xs'
                  : 'text-[#1A140B]/70 hover:text-[#1A140B]'
              }`}
              title="Português de Portugal"
            >
              🇵🇹 PT
            </button>
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap flex items-center gap-1 ${
                currentLang === 'es'
                  ? 'bg-[#B88928] text-white font-semibold shadow-xs'
                  : 'text-[#1A140B]/70 hover:text-[#1A140B]'
              }`}
              title="Español"
            >
              🇪🇸 ES
            </button>
          </div>

          {/* Primary CTA directing to Instagram */}
          <button
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold rounded-lg gold-gradient-button shadow-[0_4px_15px_rgba(184,137,40,0.3)] hover:brightness-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#140E06]" />
            <span>{t.nav.cta}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A140B]/80 hover:text-[#8C641C] transition-colors focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#D4AF37]/35 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base text-[#1A140B]">
            <a
              href="#problema"
              onClick={(e) => { e.preventDefault(); handleNavClick('#problema'); }}
              className="py-1.5 border-b border-[#1A140B]/10 hover:text-[#8C641C]"
            >
              {t.nav.problem}
            </a>
            <a
              href="#solucao"
              onClick={(e) => { e.preventDefault(); handleNavClick('#solucao'); }}
              className="py-1.5 border-b border-[#1A140B]/10 hover:text-[#8C641C]"
            >
              {t.nav.solution}
            </a>
            <a
              href="#entregas"
              onClick={(e) => { e.preventDefault(); handleNavClick('#entregas'); }}
              className="py-1.5 border-b border-[#1A140B]/10 hover:text-[#8C641C]"
            >
              {t.nav.features}
            </a>
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); handleNavClick('#portfolio'); }}
              className="py-1.5 border-b border-[#1A140B]/10 hover:text-[#8C641C]"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="#processo"
              onClick={(e) => { e.preventDefault(); handleNavClick('#processo'); }}
              className="py-1.5 border-b border-[#1A140B]/10 hover:text-[#8C641C]"
            >
              {t.nav.process}
            </a>
            <a
              href="#faq"
              onClick={(e) => { e.preventDefault(); handleNavClick('#faq'); }}
              className="py-1.5 border-b border-[#1A140B]/10 hover:text-[#8C641C]"
            >
              {t.nav.faq}
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full py-3 px-4 rounded-lg gold-gradient-button text-sm font-semibold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#140E06]" />
              <span>{t.nav.cta}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

