import React, { useState } from 'react';
import { Language, PortfolioItem } from '../types';
import { X, MapPin, Star, Calendar, Sparkles, CheckCircle, Phone, Clock } from 'lucide-react';

interface DemoSiteModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  currentLang: Language;
  onOpenBriefing: () => void;
}

export const DemoSiteModal: React.FC<DemoSiteModalProps> = ({
  item,
  onClose,
  currentLang,
  onOpenBriefing,
}) => {
  const [bookingSuccessNotice, setBookingSuccessNotice] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  if (!item) return null;

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    setBookingSuccessNotice(true);
    setTimeout(() => {
      setBookingSuccessNotice(false);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="relative w-full max-w-md h-[94vh] rounded-[42px] p-3 sm:p-4 bg-gradient-to-b from-[#251D10] via-[#140F08] to-[#080604] border-2 border-[#D4AF37]/50 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.25)] flex flex-col justify-between">
        
        {/* Dynamic Island / Header Phone frame */}
        <div className="relative z-20 flex items-center justify-between px-3 pt-1 pb-2">
          <div className="flex items-center gap-1.5 text-[10px] text-[#F4D98A]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-mono">glowsite.pro/{item.id}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#1F1910] text-[#FFF9ED]/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar prévia"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Simulated Screen */}
        <div className="relative flex-1 rounded-[30px] overflow-y-auto bg-[#0B0907] border border-[#D4AF37]/20 text-[#FFF9ED] select-none">
          
          {/* Simulated Booking Toast Notice */}
          {bookingSuccessNotice && (
            <div className="sticky top-2 left-2 right-2 z-30 mx-3 p-3 rounded-xl bg-emerald-950/95 border border-emerald-500/60 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs text-white animate-in slide-in-from-top duration-200">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-semibold block">Horário Solicitado!</span>
                <span className="text-[10px] text-white/80">
                  {selectedService} direcionado para confirmação no WhatsApp da profissional.
                </span>
              </div>
            </div>
          )}

          {/* Studio Banner */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907] via-transparent to-black/40" />

            <div className="absolute bottom-3 left-4 right-4 space-y-1">
              <span className="text-[10px] uppercase font-semibold text-[#F4D98A] tracking-wider block">
                {item.categoryLabel[currentLang]}
              </span>
              <h2 className="text-xl font-serif font-bold text-[#FFF9ED]">
                {item.title}
              </h2>
              <div className="flex items-center gap-2 text-[11px] text-[#FFF9ED]/80">
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  5.0 (148 avaliações)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  {item.location}
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Intro */}
          <div className="p-4 space-y-4 text-left">
            <p className="text-xs text-[#FFF9ED]/80 font-light leading-relaxed">
              {item.description[currentLang]}
            </p>

            {/* Quick Actions Bar inside Simulated Site */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-[#161109] border border-[#D4AF37]/25">
                <div className="text-[10px] text-[#FFF9ED]/50">Atendimento</div>
                <div className="text-xs font-semibold text-[#F4D98A] flex items-center justify-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" />
                  Ter a Sáb • 09h - 19h
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#161109] border border-[#D4AF37]/25">
                <div className="text-[10px] text-[#FFF9ED]/50">Localização</div>
                <div className="text-xs font-semibold text-[#F4D98A] flex items-center justify-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  {item.location.split(',')[0]}
                </div>
              </div>
            </div>

            {/* Services & Pricing Menu */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between pb-1 border-b border-[#D4AF37]/20">
                <span className="text-xs font-serif font-semibold text-[#FFF9ED] uppercase tracking-wider">
                  Menu de Serviços & Valores
                </span>
                <span className="text-[10px] text-[#D4AF37]">
                  Toque para agendar
                </span>
              </div>

              <div className="space-y-2">
                {item.clientServices.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-[#140F0A] border border-[#D4AF37]/20 flex items-center justify-between hover:border-[#D4AF37] transition-colors"
                  >
                    <div>
                      <div className="text-xs font-medium text-[#FFF9ED]">
                        {service.name}
                      </div>
                      <div className="text-[10px] text-[#FFF9ED]/50 flex items-center gap-2 mt-0.5">
                        <span>Duração: {service.duration}</span>
                        <span>•</span>
                        <span className="text-emerald-400">Vagas esta semana</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-serif font-bold text-[#F4D98A]">
                        {service.price}
                      </span>
                      <button
                        onClick={() => handleBookService(service.name)}
                        className="px-2.5 py-1 rounded-lg gold-gradient-button text-[10px] font-semibold text-[#0B0907] cursor-pointer"
                      >
                        Marcar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials snippet inside simulated site */}
            <div className="p-3 rounded-xl bg-[#140F0A] border border-[#D4AF37]/20 space-y-1">
              <div className="flex text-amber-400 text-xs">
                {'★★★★★'}
              </div>
              <p className="text-[11px] text-[#FFF9ED]/85 italic">
                “Espaço impecável, atendimento atencioso e o resultado durou muito mais do que esperava!”
              </p>
              <div className="text-[9px] text-[#FFF9ED]/50">— Mariana R. (Cliente verificada)</div>
            </div>

            {/* Footer inside simulated site */}
            <div className="text-center pt-2 pb-4 text-[10px] text-[#FFF9ED]/40 space-y-1 border-t border-white/5">
              <div>© {item.title}. Todos os direitos reservados.</div>
              <div className="text-[#D4AF37]">Presença criada por GlowSite ✨</div>
            </div>

          </div>

        </div>

        {/* Bottom CTA to get a site like this */}
        <div className="pt-3 px-1 text-center space-y-2">
          <button
            onClick={() => {
              onClose();
              onOpenBriefing();
            }}
            className="w-full py-2.5 rounded-xl gold-gradient-button text-xs font-semibold text-[#0B0907] flex items-center justify-center gap-1.5 shadow-lg active:scale-98 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0B0907]" />
            <span>Quero um site com essa aparência</span>
          </button>
        </div>

      </div>

    </div>
  );
};
