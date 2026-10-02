import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { Sparkles, ArrowRight, Award, Compass, MousePointerClick } from 'lucide-react';

interface SolutionSectionProps {
  currentLang: Language;
  onOpenBriefing?: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang].solution;

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  const pillarIcons = [
    <Award className="w-5 h-5 text-[#8C641C]" key="award" />,
    <Compass className="w-5 h-5 text-[#8C641C]" key="compass" />,
    <MousePointerClick className="w-5 h-5 text-[#8C641C]" key="click" />,
  ];

  return (
    <section id="solucao" className="py-24 bg-[#FAF7F2] relative border-t border-[#B88928]/25">
      {/* Soft warm glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#EED7A1]/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Editorial with user's requested image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#B88928]/40 shadow-[0_20px_50px_rgba(90,60,10,0.15)] group bg-[#FAF1DF]">
              <img
                src="/src/assets/images/transformation_brand_image.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://i.ibb.co/JFSYDQ5K/Recreate-logo-in-higher-quality-2-K-20260924122331.jpg';
                }}
                alt="Apresente o seu negócio como uma marca de luxo"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover object-center filter brightness-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* In-image editorial quote badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#B88928]/40 shadow-lg">
                <span className="text-[10px] text-[#8C641C] uppercase tracking-widest font-bold block mb-1">
                  Posicionamento de Alto Padrão
                </span>
                <p className="text-sm font-serif italic text-[#1A140B] font-medium">
                  “Seu trabalho já é luxuoso nos detalhes. A sua presença na internet agora fala a mesma língua.”
                </p>
              </div>
            </div>

            {/* Floating Luxury Seal */}
            <div className="absolute -top-4 -left-4 bg-[#FFFFFF] border-2 border-[#B88928] rounded-full p-4 shadow-xl flex items-center justify-center text-center">
              <div>
                <Sparkles className="w-5 h-5 text-[#8C641C] mx-auto mb-0.5" />
                <span className="text-[10px] font-bold text-[#1A140B] uppercase tracking-wider block">
                  Couture Web
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Solution Copy & 3 Pillars */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#785412] uppercase">
              <span className="w-6 h-px bg-[#785412]" />
              <span>{t.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A140B] font-normal leading-tight [text-wrap:balance]">
              {t.title}
            </h2>

            <p className="text-base text-[#1A140B]/80 leading-relaxed font-light [text-wrap:pretty]">
              {t.description}
            </p>

            {/* 3 Core Transformation Pillars */}
            <div className="space-y-4 pt-2">
              {t.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FFFFFF] border border-[#B88928]/30 flex items-start gap-4 hover:border-[#8C641C] shadow-xs transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAF1DF] border border-[#B88928]/40 flex items-center justify-center shrink-0">
                    {pillarIcons[idx]}
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-[#1A140B]">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#2C2011]/80 leading-relaxed font-normal mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={handleCtaClick}
                className="gold-gradient-button px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#140E06] inline-flex items-center gap-2 shadow-[0_10px_25px_rgba(184,137,40,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#140E06]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

