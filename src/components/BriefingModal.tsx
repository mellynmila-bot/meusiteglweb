import React, { useState } from 'react';
import { Language, BriefingFormData } from '../types';
import { translations } from '../data/translations';
import { X, Sparkles, Send, CheckCircle2, MessageCircle } from 'lucide-react';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  preselectedNiche?: string;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  preselectedNiche,
}) => {
  const t = translations[currentLang].modal;

  const [formData, setFormData] = useState<BriefingFormData>({
    fullName: '',
    businessName: '',
    niche: preselectedNiche || 'nails',
    country: 'Espanha',
    city: '',
    currentPresence: 'Só Instagram',
    whatsapp: '',
    email: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Olá GlowSite! Meu nome é ${formData.fullName || 'Profissional da Beleza'} e gostaria de criar a minha presença digital para o meu negócio "${formData.businessName || 'Meu Espaço'}" (${formData.niche}) em ${formData.city || 'Europa'}. Pode me passar os detalhes para começar em até 24h?`
    );
    return `https://wa.me/34600000000?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#120E09] border border-[#D4AF37]/40 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.2)] text-[#FFF9ED] max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1F1910] text-[#FFF9ED]/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-1.5 text-left mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#F4D98A] font-semibold">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>⚡ Presença Digital em 24h</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FFF9ED]">
                {t.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF9ED]/70 font-light">
                {t.subtitle}
              </p>
            </div>

            {/* Briefing Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#FFF9ED]/80 mb-1">
                    {t.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ex: Carolina Costa"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A140B] border border-[#D4AF37]/30 text-sm text-[#FFF9ED] placeholder:text-[#FFF9ED]/30 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#FFF9ED]/80 mb-1">
                    {t.businessName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Ex: Glow Nail Studio"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A140B] border border-[#D4AF37]/30 text-sm text-[#FFF9ED] placeholder:text-[#FFF9ED]/30 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#FFF9ED]/80 mb-1">
                    {t.niche} *
                  </label>
                  <select
                    value={formData.niche}
                    onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A140B] border border-[#D4AF37]/30 text-sm text-[#FFF9ED] focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Nail Designer">💅 Nail Designer</option>
                    <option value="Lash Artist">👁️ Lash Artist</option>
                    <option value="Brow Artist">🤎 Brow Artist (Sobrancelhas)</option>
                    <option value="Esteticista & Spa">✨ Esteticista & Skincare</option>
                    <option value="Maquiadora / Noivas">💄 Maquiadora / Noivas</option>
                    <option value="Clínica Estética">🧖 Clínica & Estética Avançada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#FFF9ED]/80 mb-1">
                    {t.city} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ex: Madrid, Lisboa, Paris..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A140B] border border-[#D4AF37]/30 text-sm text-[#FFF9ED] placeholder:text-[#FFF9ED]/30 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#FFF9ED]/80 mb-1">
                    {t.whatsapp} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+34 600 000 000 / +351 91..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A140B] border border-[#D4AF37]/30 text-sm text-[#FFF9ED] placeholder:text-[#FFF9ED]/30 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#FFF9ED]/80 mb-1">
                    {t.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A140B] border border-[#D4AF37]/30 text-sm text-[#FFF9ED] placeholder:text-[#FFF9ED]/30 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#FFF9ED]/80 mb-1">
                  {t.presence}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Só Instagram', 'Site Antigo', 'A Começar Agora'].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, currentPresence: opt })}
                      className={`p-2 rounded-lg border text-center transition-colors ${
                        formData.currentPresence === opt
                          ? 'bg-[#D4AF37] text-[#0B0907] font-semibold border-[#D4AF37]'
                          : 'bg-[#1A140B] border-[#D4AF37]/20 text-[#FFF9ED]/80'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#FFF9ED]/80 mb-1">
                  {t.notes}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Alguma cor preferida, link do Instagram atual ou detalhe do seu negócio..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#1A140B] border border-[#D4AF37]/30 text-xs sm:text-sm text-[#FFF9ED] placeholder:text-[#FFF9ED]/30 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl gold-gradient-button text-sm font-semibold text-[#0B0907] flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(212,175,55,0.3)] hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#0B0907]" />
                  <span>{t.submit}</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#F4D98A]">
              <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-[#FFF9ED]">
                {t.successTitle}
              </h3>
              <p className="text-sm text-[#FFF9ED]/80 max-w-md mx-auto font-light leading-relaxed">
                {t.successDesc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A140B] border border-[#D4AF37]/30 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="text-[#F4D98A] font-semibold">Resumo do Pedido:</div>
              <div>Profissional: {formData.fullName} ({formData.businessName})</div>
              <div>Nicho: {formData.niche} • Cidade: {formData.city}</div>
              <div>Prazo estimado de lançamento: Em até 24h úteis</div>
            </div>

            <div className="pt-2 flex flex-col gap-3 max-w-sm mx-auto">
              <a
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.openWhatsapp}</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="py-2.5 px-4 rounded-xl border border-[#D4AF37]/30 text-xs text-[#FFF9ED]/70 hover:text-white hover:bg-white/5 transition-all"
              >
                {t.close}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
