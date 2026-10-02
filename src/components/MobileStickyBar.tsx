import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { INSTAGRAM_URL } from '../data/constants';
import { Sparkles, MessageCircle } from 'lucide-react';

interface MobileStickyBarProps {
  currentLang: Language;
  onOpenBriefing?: () => void;
  onOpenWhatsapp?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang];

  const handleCtaClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Ações rápidas mobile"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 border-t border-[#B88928]/35 px-3 py-2 backdrop-blur-md flex items-center justify-between gap-2 h-14 shadow-[0_-5px_20px_rgba(0,0,0,0.08)]"
    >
      <button
        onClick={handleCtaClick}
        className="h-10 px-3.5 rounded-lg bg-[#FFFFFF] border border-[#B88928]/40 text-[#8C641C] text-xs font-semibold flex items-center gap-1.5 shrink-0 active:scale-95 transition-transform shadow-xs cursor-pointer"
        aria-label="Falar no Instagram DM"
      >
        <MessageCircle className="w-4 h-4 text-[#8C641C]" />
        <span>Falar na DM</span>
      </button>

      <button
        onClick={handleCtaClick}
        className="h-10 flex-1 rounded-lg gold-gradient-button text-xs font-bold text-[#140E06] flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(184,137,40,0.3)] active:scale-95 transition-transform truncate cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#140E06] shrink-0" />
        <span className="truncate">{t.hero.ctaPrimary}</span>
      </button>
    </aside>
  );
};
