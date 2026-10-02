import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { testimonials } from '../data/portfolioData';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].testimonials;

  return (
    <section className="py-24 bg-gradient-to-b from-[#F2E0B5] via-[#EBD297] to-[#E3C580] relative border-y border-[#B88928]/35">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[350px] bg-[#FAF0DC]/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#785412] uppercase">
            <span className="w-6 h-px bg-[#785412]" />
            <span>{t.tag}</span>
            <span className="w-6 h-px bg-[#785412]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A140B] font-normal leading-tight [text-wrap:balance]">
            {t.title}
          </h2>

          <p className="text-base text-[#2C2011]/85 leading-relaxed font-normal [text-wrap:pretty]">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-[#FFFDF9] border border-[#B88928]/35 hover:border-[#8C641C] rounded-3xl p-8 flex flex-col justify-between space-y-6 relative group shadow-[0_4px_20px_rgba(90,60,10,0.06)] hover:shadow-[0_12px_30px_rgba(90,60,10,0.12)] transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5 Golden Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#B88928]">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B88928] text-[#B88928]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C641C] bg-[#FAF0DC] px-2.5 py-0.5 rounded-full border border-[#B88928]/35 flex items-center gap-1 font-semibold">
                    <CheckCircle className="w-3 h-3 text-[#8C641C]" />
                    Cliente GlowSite
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#B88928]/30 group-hover:text-[#B88928]/60 transition-colors" />

                <p className="text-base font-serif italic text-[#1A140B] font-medium leading-relaxed">
                  “{testi.quote[currentLang] || testi.quote.pt}”
                </p>

                <div className="inline-block px-3 py-1 rounded-md bg-[#FAF1DF] border border-[#B88928]/25 text-xs text-[#8C641C] font-semibold">
                  {testi.highlight[currentLang] || testi.highlight.pt}
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#B88928]/20 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#1A140B]">
                    {testi.name}
                  </div>
                  <div className="text-xs text-[#2C2011]/75">
                    {testi.role[currentLang] || testi.role.pt}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#8C641C] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#8C641C]" />
                  <span>{testi.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
