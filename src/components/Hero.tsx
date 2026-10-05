import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { Sparkles, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import lashMockupImage from '../assets/images/mockup_lash_artist_portfolio_1790959451650.jpg';

interface HeroProps {
  currentLang: Language;
  onOpenBriefing: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang];

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-20 overflow-hidden flex items-center bg-[#FAF7F2]">
      {/* Ambient Warm Golden & Champagne Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[#EED7A1]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#E5C784]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#D4AF37]/25 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle luxury geometric grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B8892812_1px,transparent_1px),linear-gradient(to_bottom,#B8892812_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & High Impact Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* 24h Delivery Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0DC] border border-[#B88928]/40 text-xs font-semibold text-[#8C641C] shadow-[0_2px_10px_rgba(184,137,40,0.15)] animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#B88928] inline-block animate-ping" />
              <span>{t.badge}</span>
            </div>

            {/* Main Headline with Serif Elegance & Golden Gradient */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-normal tracking-tight text-[#1A140B] leading-[1.08] [text-wrap:balance]">
              <span>{t.hero.titleLine1}</span>{' '}
              <span className="gold-gradient-text italic font-medium">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-[#1A140B]/80 font-light leading-relaxed max-w-2xl [text-wrap:pretty]">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleCtaClick}
                className="gold-gradient-button px-7 py-4 rounded-xl text-base font-semibold text-[#140E06] flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(184,137,40,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-[#140E06]" />
                <span>{t.hero.ctaPrimary}</span>
              </button>

              <button
                onClick={() => {
                  const target = document.querySelector('#processo');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-4 rounded-xl text-sm font-medium text-[#1A140B] border border-[#B88928]/40 bg-[#FFFFFF] hover:bg-[#F8F2E6] hover:border-[#B88928] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xs"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 text-[#8C641C] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Microcopy & Guarantee Points */}
            <div className="pt-2 text-xs sm:text-sm text-[#1A140B]/70 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-[#B88928]/20 pt-4 font-medium">
              <span className="flex items-center gap-1.5 text-[#8C641C]">
                <CheckCircle2 className="w-4 h-4 text-[#B88928]" />
                Site Premium
              </span>
              <span className="text-[#B88928]/50">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B88928]" />
                SEO no Google
              </span>
              <span className="text-[#B88928]/50">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B88928]" />
                Google Maps
              </span>
              <span className="text-[#B88928]/50">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B88928]" />
                Reservas Diretas
              </span>
            </div>

            {/* Market Trust Strip */}
            <div className="pt-1 flex items-center gap-4 text-xs text-[#1A140B]/60">
              <span className="text-[#8C641C] font-semibold">Mercados principais:</span>
              <span>🇪🇸 Espanha</span>
              <span>🇵🇹 Portugal</span>
              <span>🇪🇺 Europa</span>
            </div>

          </div>

          {/* Right Column: Hero Visual - Realistic Luxury Smartphone Mockup with Lash Artist only */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Behind Phone Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EED7A1]/50 to-transparent rounded-[3rem] blur-2xl transform scale-95 -z-10" />

            {/* Smartphone Frame Container */}
            <div className="relative w-[300px] sm:w-[325px] rounded-[42px] p-3.5 bg-gradient-to-b from-[#2E2413] via-[#141009] to-[#0A0805] shadow-[0_25px_60px_rgba(0,0,0,0.35),0_0_35px_rgba(212,175,55,0.25)] border-2 border-[#D4AF37]/50 transition-transform duration-500 hover:scale-[1.01]">
              
              {/* Dynamic Island / Speaker notch */}
              <div className="w-24 h-4 bg-[#0B0907] rounded-full mx-auto mb-2 border border-white/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>

              {/* Phone Screen Simulated Web Content (Lashes only) */}
              <div className="rounded-[32px] overflow-hidden bg-[#0D0A08] border border-[#D4AF37]/20 text-[#FFF9ED] text-left">
                
                {/* Simulated Web Header inside Phone */}
                <div className="px-4 py-3 bg-[#130E08]/90 border-b border-[#D4AF37]/20 flex items-center justify-between">
                  <div>
                    <span className="font-serif text-sm font-semibold text-[#F4D98A]">
                      Aura Lash Atelier
                    </span>
                    <span className="block text-[9px] text-[#FFF9ED]/50 tracking-wider">
                      MADRID • SALAMANCA
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F4D98A] border border-[#D4AF37]/30">
                    Aberto
                  </span>
                </div>

                {/* Simulated Hero Banner inside Phone */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={lashMockupImage}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('mockup_lash_artist_portfolio')) {
                        target.src = '/images/mockup_lash_artist_portfolio_1790959451650.jpg';
                      } else {
                        target.src = 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                    alt="Luxury Lash Studio Preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A08] via-transparent to-black/30" />
                  <div className="absolute bottom-2 left-3 right-3">
                    <span className="text-[10px] font-medium text-[#F4D98A] uppercase tracking-wider block">
                      Extensões de Luxo
                    </span>
                    <h4 className="text-sm font-serif font-semibold text-[#FFF9ED]">
                      Volume Russo & Lifting
                    </h4>
                  </div>
                </div>

                {/* Simulated Services & Direct Action inside Phone */}
                <div className="p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-[#FFF9ED]/70 pb-1 border-b border-white/5">
                    <span>⭐ 5.0 (128 avaliações)</span>
                    <span className="text-[#F4D98A]">📍 Ver no Mapa</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center bg-[#17120C] p-2 rounded-lg border border-[#D4AF37]/15">
                      <div>
                        <div className="text-[11px] font-medium text-[#FFF9ED]">
                          Mega Volume Couture
                        </div>
                        <div className="text-[9px] text-[#FFF9ED]/50">Duração: 90 min</div>
                      </div>
                      <span className="text-xs font-semibold text-[#F4D98A]">
                        85€
                      </span>
                    </div>

                    <div className="flex justify-between items-center bg-[#17120C] p-2 rounded-lg border border-[#D4AF37]/15">
                      <div>
                        <div className="text-[11px] font-medium text-[#FFF9ED]">
                          Lash Lifting com Queratina
                        </div>
                        <div className="text-[9px] text-[#FFF9ED]/50">Duração: 45 min</div>
                      </div>
                      <span className="text-xs font-semibold text-[#F4D98A]">
                        50€
                      </span>
                    </div>
                  </div>

                  {/* Simulated Mobile CTA */}
                  <button
                    onClick={handleCtaClick}
                    className="w-full py-2 px-3 rounded-lg gold-gradient-button text-[11px] font-semibold text-[#140E06] flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-transform cursor-pointer"
                  >
                    <Calendar className="w-3 h-3 text-[#140E06]" />
                    <span>Agendar Horário Online</span>
                  </button>

                  <div className="text-center text-[9px] text-[#FFF9ED]/40 pt-1">
                    Powered by GlowSite • Presença de Luxo
                  </div>
                </div>

              </div>

            </div>

            {/* Floating Badge 1: New Booking */}
            <div className="absolute -top-3 -right-2 sm:-right-8 bg-[#FFFFFF] border border-[#B88928]/45 rounded-xl px-3.5 py-2 shadow-[0_10px_25px_rgba(184,137,40,0.18)] flex items-center gap-2 animate-bounce [animation-duration:4s]">
              <span className="w-6 h-6 rounded-full bg-[#EED7A1] flex items-center justify-center text-[#8C641C] text-xs">
                ✨
              </span>
              <div>
                <span className="text-xs font-semibold text-[#1A140B] block">
                  {t.hero.floatingBadges.booking}
                </span>
                <span className="text-[10px] text-[#8C641C]">Há 2 minutos • Confirmado</span>
              </div>
            </div>

            {/* Floating Badge 2: Found on Google */}
            <div className="absolute top-1/2 -left-4 sm:-left-10 -translate-y-1/2 bg-[#FFFFFF] border border-[#B88928]/45 rounded-xl px-3.5 py-2 shadow-[0_10px_25px_rgba(184,137,40,0.18)] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-600 text-xs font-bold">
                📍
              </span>
              <div>
                <span className="text-xs font-semibold text-[#1A140B] block">
                  {t.hero.floatingBadges.google}
                </span>
                <span className="text-[10px] text-[#1A140B]/60">Google Maps + SEO Local</span>
              </div>
            </div>

            {/* Floating Badge 3: 5.0 Rating */}
            <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-[#FFFFFF] border border-[#B88928]/45 rounded-xl px-3.5 py-2 shadow-[0_10px_25px_rgba(184,137,40,0.18)] flex items-center gap-2">
              <div className="flex text-amber-500 text-xs">
                {'★★★★★'}
              </div>
              <span className="text-xs font-semibold text-[#1A140B]">
                5.0 (128 avaliações)
              </span>
            </div>

            {/* Floating Badge 4: Mobile First */}
            <div className="absolute bottom-12 -right-4 sm:-right-8 bg-[#FFFFFF] border border-[#B88928]/45 rounded-xl px-3 py-1.5 shadow-[0_10px_25px_rgba(184,137,40,0.18)] flex items-center gap-1.5">
              <span className="text-xs">⚡</span>
              <span className="text-xs font-semibold text-[#8C641C]">
                {t.hero.floatingBadges.mobile}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

