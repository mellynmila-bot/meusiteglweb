import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { Sparkles, Search, MapPin, Calendar, PenTool, Smartphone, Star, Globe, ArrowRight } from 'lucide-react';

interface DeliverablesSectionProps {
  currentLang: Language;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].deliverables;

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-[#8C641C]" />,
    Search: <Search className="w-6 h-6 text-[#8C641C]" />,
    MapPin: <MapPin className="w-6 h-6 text-[#8C641C]" />,
    Calendar: <Calendar className="w-6 h-6 text-[#8C641C]" />,
    PenTool: <PenTool className="w-6 h-6 text-[#8C641C]" />,
    Smartphone: <Smartphone className="w-6 h-6 text-[#8C641C]" />,
    Star: <Star className="w-6 h-6 text-[#8C641C]" />,
    Globe: <Globe className="w-6 h-6 text-[#8C641C]" />,
  };

  return (
    <section id="entregas" className="py-24 bg-gradient-to-b from-[#F2E0B5] via-[#EBD297] to-[#E3C580] relative border-y border-[#B88928]/35">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FAF0DC]/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#785412] uppercase">
            <span className="w-6 h-px bg-[#785412]" />
            <span>{t.tag}</span>
            <span className="w-6 h-px bg-[#785412]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A140B] font-normal leading-tight [text-wrap:balance]">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base text-[#2C2011]/85 leading-relaxed font-normal [text-wrap:pretty]">
            {t.subtitle}
          </p>
        </div>

        {/* 8 Deliverables Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] border border-[#B88928]/35 hover:border-[#8C641C] rounded-2xl p-7 flex flex-col justify-between space-y-4 relative group shadow-[0_4px_20px_rgba(90,60,10,0.06)] hover:shadow-[0_12px_30px_rgba(90,60,10,0.12)] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF1DF] border border-[#B88928]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-[#8C641C]" />}
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-[#8C641C] font-semibold tracking-widest block">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1A140B] group-hover:text-[#8C641C] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#2C2011]/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#B88928]/20 flex items-center justify-between text-[11px] text-[#8C641C] font-semibold">
                <span>Incluso no GlowSite</span>
                <span className="text-[#8C641C]">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* User requested: "coloque no final: E muito mais!" */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl p-8 bg-[#FFFDF9] border-2 border-[#B88928]/50 shadow-lg text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0DC] text-xs font-bold text-[#8C641C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B88928]" />
            <span>Ecossistema Completo</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A140B]">
            {t.andMuchMore || 'E muito mais! ✨'}
          </h3>

          <p className="text-sm sm:text-base text-[#2C2011]/85 max-w-2xl mx-auto font-normal">
            Domínio personalizado conectado, certificado de segurança SSL, botão direto para falar no WhatsApp ou Instagram, galeria de trabalhos em alta definição, velocidade de carregamento instantânea e suporte dedicado.
          </p>

          <div className="pt-2">
            <button
              onClick={handleCtaClick}
              className="gold-gradient-button px-8 py-3.5 rounded-xl text-sm font-semibold text-[#140E06] inline-flex items-center gap-2 shadow-[0_10px_25px_rgba(184,137,40,0.25)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Quero o meu site completo</span>
              <ArrowRight className="w-4 h-4 text-[#140E06]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

