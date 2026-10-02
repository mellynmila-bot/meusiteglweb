import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { faqItems } from '../data/portfolioData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].faq;
  const [openId, setOpenId] = useState<string | null>('coding');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#F2E0B5] via-[#EBD297] to-[#E3C580] relative border-y border-[#B88928]/35">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FAF0DC]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
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

        {/* Accordion List */}
        <div className="mt-14 space-y-3.5">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#FFFDF9] border border-[#B88928]/35 hover:border-[#8C641C] rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_15px_rgba(90,60,10,0.05)]"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-bold text-[#1A140B] hover:text-[#8C641C] transition-colors">
                    {item.question[currentLang] || item.question.pt}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF1DF] border border-[#B88928]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#EED7A1]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#8C641C]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#2C2011]/85 leading-relaxed border-t border-[#B88928]/20 animate-in fade-in duration-200">
                    <p className="font-normal">{item.answer[currentLang] || item.answer.pt}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#2C2011]/75 inline-flex items-center gap-1.5 font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-[#8C641C]" />
            <span>Ficou com alguma dúvida específica? Fale connosco pelo Instagram DM.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
