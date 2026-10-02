import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { Globe } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBriefing?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const t = translations[currentLang].footer;

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#120E08] border-t border-[#B88928]/30 pt-16 pb-12 text-[#FFF9ED]/75 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a
              href="#"
              className="text-2xl font-serif font-medium tracking-wide text-[#FFF9ED] flex items-center gap-1.5"
            >
              <span>GlowSite</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88928] inline-block shadow-[0_0_8px_#D4AF37]" />
            </a>
            <p className="text-sm text-[#FFF9ED]/75 font-light leading-relaxed max-w-sm">
              {t.desc}
            </p>
            <div className="pt-1 text-xs text-[#F4D98A] flex items-center gap-2 font-medium">
              <Globe className="w-4 h-4 text-[#B88928]" />
              <span>{t.markets}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-left">
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-[#FFF9ED] uppercase tracking-wider block">
                Navegação
              </span>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollTo('#problema')} className="hover:text-[#F4D98A] transition-colors cursor-pointer">
                    O Problema
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('#solucao')} className="hover:text-[#F4D98A] transition-colors cursor-pointer">
                    A Solução
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('#entregas')} className="hover:text-[#F4D98A] transition-colors cursor-pointer">
                    O Que Recebe
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('#portfolio')} className="hover:text-[#F4D98A] transition-colors cursor-pointer">
                    Portfólio
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-[#FFF9ED] uppercase tracking-wider block">
                Suporte & Ação
              </span>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollTo('#processo')} className="hover:text-[#F4D98A] transition-colors cursor-pointer">
                    Como Funciona (24h)
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('#faq')} className="hover:text-[#F4D98A] transition-colors cursor-pointer">
                    Perguntas Frequentes
                  </button>
                </li>
                <li>
                  <button onClick={handleCtaClick} className="hover:text-[#F4D98A] text-[#F4D98A] font-semibold transition-colors cursor-pointer">
                    ✨ Quero meu site (Instagram DM)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Languages & Regional Presence (PT and ES only) */}
          <div className="md:col-span-3 space-y-3 text-left">
            <span className="text-xs font-semibold text-[#FFF9ED] uppercase tracking-wider block">
              Idiomas
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onLanguageChange('pt')}
                className={`px-3 py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                  currentLang === 'pt'
                    ? 'bg-[#B88928] text-white font-semibold border-[#B88928]'
                    : 'bg-[#1C160E] border-[#B88928]/30 text-[#FFF9ED]/80 hover:text-white'
                }`}
              >
                🇵🇹 Português
              </button>
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                  currentLang === 'es'
                    ? 'bg-[#B88928] text-white font-semibold border-[#B88928]'
                    : 'bg-[#1C160E] border-[#B88928]/30 text-[#FFF9ED]/80 hover:text-white'
                }`}
              >
                🇪🇸 Español
              </button>
            </div>
            <p className="text-[11px] text-[#FFF9ED]/50 pt-2 font-light">
              Projetos atendidos com excelência em Espanha, Portugal e toda a Europa.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#FFF9ED]/50">
          <div>
            © {new Date().getFullYear()} GlowSite. {t.rights}
          </div>
          <div>
            {t.legal}
          </div>
        </div>

      </div>
    </footer>
  );
};
