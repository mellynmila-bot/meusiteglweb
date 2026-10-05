import React, { useState } from 'react';
import { Language, PortfolioItem } from '../types';
import { INSTAGRAM_URL } from '../data/constants';
import { Sparkles, ArrowRight, Instagram, Shield, X, Eye } from 'lucide-react';
import portfolioSite1 from '../assets/images/portfolio_site_1.png';
import portfolioSite2 from '../assets/images/portfolio_site_2.png';
import portfolioSite3 from '../assets/images/portfolio_site_3.png';
import portfolioSite4 from '../assets/images/portfolio_site_4.png';

interface PortfolioSectionProps {
  currentLang: Language;
  onSelectProject?: (item: PortfolioItem) => void;
}

interface RealSiteProject {
  id: string;
  niche: { pt: string; es: string };
  localImage: string;
  fallbackImage: string;
  description: { pt: string; es: string };
}

const realProjects: RealSiteProject[] = [
  {
    id: 'allura',
    niche: {
      pt: 'Clínica de Estética & Bem-Estar',
      es: 'Clínica de Estética y Bienestar',
    },
    localImage: portfolioSite1,
    fallbackImage: 'https://i.ibb.co/jK51VTC/screencapture-allurabeauty-ch-vercel-app-2026-10-02-15-29-56.png',
    description: {
      pt: 'Design refinado para estética facial e tratamentos corporais com agendamento direto.',
      es: 'Diseño refinado para estética facial y tratamientos corporales con cita directa.',
    },
  },
  {
    id: 'dr-luane',
    niche: {
      pt: 'Harmonização & Estética Médica',
      es: 'Armonización y Estética Médica',
    },
    localImage: portfolioSite2,
    fallbackImage: 'https://i.ibb.co/M5h0SxsB/screencapture-rare-draluaneavila-vercel-app-2026-10-02-15-31-30.png',
    description: {
      pt: 'Presença digital de alta autoridade com foco em conversão e diferenciação médica.',
      es: 'Presencia digital de alta autoridad con enfoque en conversión y diferenciación.',
    },
  },
  {
    id: 'la-french',
    niche: {
      pt: 'Atelier de Manicura Russa & Gel',
      es: 'Atelier de Manicura Rusa y Gel',
    },
    localImage: portfolioSite3,
    fallbackImage: 'https://i.ibb.co/sv9mSW9T/screencapture-lafrench-nail-vercel-app-2026-10-02-15-32-49.png',
    description: {
      pt: 'Galeria editorial, tabela de serviços e localização para captação de clientes locais.',
      es: 'Galería editorial, tabla de servicios y ubicación para captación de clientas.',
    },
  },
  {
    id: 'elodie-nails',
    niche: {
      pt: 'Nail Designer & Formadora',
      es: 'Nail Designer y Formadora',
    },
    localImage: portfolioSite4,
    fallbackImage: 'https://i.ibb.co/twJS8sfG/screencapture-elodienailsdesigner-vercel-app-2026-10-02-15-35-24.png',
    description: {
      pt: 'Apresentação luxuosa de nail art, cuidados e direcionamento direto para reservas.',
      es: 'Presentación lujosa de nail art, cuidados y enlace directo a reservas.',
    },
  },
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  currentLang,
}) => {
  const [selectedZoomProject, setSelectedZoomProject] = useState<RealSiteProject | null>(null);

  const handleOpenInstagram = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  // Duplicate items for seamless continuous infinite marquee
  const marqueeItems = [...realProjects, ...realProjects, ...realProjects];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-[#F2E0B5] via-[#EBD297] to-[#E3C580] relative border-y border-[#B88928]/35 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FAF0DC]/50 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FAF0DC]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#785412] uppercase">
            <span className="w-6 h-px bg-[#785412]" />
            <span>PORTFÓLIO</span>
            <span className="w-6 h-px bg-[#785412]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A140B] font-normal leading-tight [text-wrap:balance]">
            Sites que fazem a sua marca brilhar.
          </h2>

          <p className="text-base text-[#2C2011]/85 leading-relaxed font-normal [text-wrap:pretty]">
            {currentLang === 'pt'
              ? 'Projetos reais desenvolvidos para profissionais de beleza que subiram o nível da sua presença digital.'
              : 'Proyectos reales creados para profesionales de la belleza que elevaron su presencia digital al máximo nivel.'}
          </p>
        </div>

      </div>

      {/* Infinite Scrolling Carousel Container */}
      <div className="mt-14 relative w-full overflow-hidden select-none group">
        
        {/* Left & Right gradient shadows for smooth edge fading */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#EED492] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#E5C26E] to-transparent z-20 pointer-events-none" />

        {/* Continuous Marquee Track */}
        <div className="animate-marquee flex gap-6 sm:gap-8 py-4">
          {marqueeItems.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              onClick={() => setSelectedZoomProject(project)}
              className="w-[300px] sm:w-[380px] shrink-0 bg-[#FFFDF9] border border-[#B88928]/45 hover:border-[#8C641C] rounded-2xl shadow-[0_10px_30px_rgba(90,60,10,0.12)] hover:shadow-[0_20px_45px_rgba(90,60,10,0.2)] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Browser Window Chrome Top Header (Without site domain) */}
              <div className="px-4 py-3 bg-[#FAF2E1] border-b border-[#B88928]/30 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]/80 inline-block" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFFDF9] border border-[#B88928]/25 text-[11px] font-mono text-[#8C641C]">
                  <Shield className="w-3 h-3 text-[#8C641C]" />
                  <span className="font-medium">glowsite.pro/preview</span>
                </div>

                <div className="w-4 h-4 flex items-center justify-center text-[#8C641C]/60 hover:text-[#8C641C]">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Website Capture Viewport with smooth scroll effect on hover */}
              <div className="relative h-[380px] sm:h-[440px] overflow-hidden bg-[#FAF7F2] group/screen">
                <img
                  src={project.localImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = project.fallbackImage;
                  }}
                  alt={project.niche[currentLang]}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full object-cover object-top transition-transform duration-[6000ms] ease-in-out group-hover/screen:-translate-y-[60%]"
                />
                
                {/* Subtle shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="px-4 py-2 rounded-xl bg-[#FFFDF9]/95 text-[#140E06] text-xs font-semibold shadow-lg backdrop-blur-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Sparkles className="w-3.5 h-3.5 text-[#8C641C]" />
                    <span>Toque para ver projeto completo</span>
                  </span>
                </div>
              </div>

              {/* Card Bottom Details (Without specific site names) */}
              <div className="p-4 sm:p-5 bg-[#FFFDF9] border-t border-[#B88928]/25 flex items-center justify-between text-left">
                <div>
                  <h4 className="text-base font-serif font-bold text-[#1A140B]">
                    {project.niche[currentLang]}
                  </h4>
                  <span className="text-xs text-[#8C641C] font-medium block">
                    Presença Digital Exclusiva
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C641C] bg-[#FAF0DC] px-2.5 py-1 rounded-lg border border-[#B88928]/30">
                  <span>Ver</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Micro Guide */}
        <div className="text-center pt-2 text-xs text-[#785412]/85 font-medium flex items-center justify-center gap-2">
          <span>✨ Passe o rato ou o dedo para pausar e inspecionar os detalhes</span>
        </div>
      </div>

      {/* Prominent Instagram Invitation Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 relative z-10">
        <div className="rounded-3xl p-8 sm:p-10 bg-[#FFFDF9] border-2 border-[#B88928]/60 shadow-[0_15px_40px_rgba(90,60,10,0.15)] text-center relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FAF0DC] rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0DC] border border-[#B88928]/40 text-xs font-bold text-[#8C641C] uppercase tracking-wider mb-4">
            <Instagram className="w-4 h-4 text-[#8C641C]" />
            <span>Mais Projetos no Instagram</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A140B] leading-tight [text-wrap:balance]">
            {currentLang === 'pt'
              ? 'Quer ver mais sites criados pela GlowSite?'
              : '¿Quieres ver más webs creadas por GlowSite?'}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-[#2C2011]/85 max-w-2xl mx-auto font-normal leading-relaxed">
            {currentLang === 'pt'
              ? 'Sempre temos novos projetos reais, lançamentos de clientes e bastidores publicados no nosso perfil do Instagram. Acompanhe as transformações que entregamos semanalmente!'
              : 'Siempre tenemos nuevos proyectos reales, lanzamientos y bastidores publicados en nuestro perfil de Instagram. ¡Sigue las transformaciones que entregamos cada semana!'}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleOpenInstagram}
              className="gold-gradient-button px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-[#140E06] flex items-center justify-center gap-2.5 shadow-[0_10px_25px_rgba(184,137,40,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer w-full sm:w-auto"
            >
              <Instagram className="w-5 h-5 text-[#140E06]" />
              <span>Ver mais sites no perfil do Instagram (@glowsites.pt)</span>
              <ArrowRight className="w-4 h-4 text-[#140E06]" />
            </button>
          </div>

          <div className="mt-4 text-xs text-[#8C641C] font-semibold">
            ✨ Publicações regulares • Feed com sites reais • Destaques de clientes satisfeitas
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal for Full Page Capture Inspection */}
      {selectedZoomProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[92vh] rounded-3xl bg-[#FAF7F2] border-2 border-[#B88928] shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header without specific site names */}
            <div className="px-5 py-3.5 bg-[#FFFDF9] border-b border-[#B88928]/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <div>
                  <h4 className="text-sm font-bold text-[#1A140B]">
                    {selectedZoomProject.niche[currentLang]}
                  </h4>
                  <span className="text-[11px] text-[#8C641C] font-mono">
                    glowsite.pro/preview
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenInstagram}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF0DC] border border-[#B88928]/40 text-xs font-semibold text-[#8C641C] hover:bg-[#F3E5C2] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ver no Instagram</span>
                </button>

                <button
                  onClick={() => setSelectedZoomProject(null)}
                  className="p-1.5 rounded-full bg-[#1A140B]/10 hover:bg-[#1A140B]/20 text-[#1A140B] transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable High-Res Webpage Screenshot */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF1DF]">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#B88928]/30 bg-white">
                <img
                  src={selectedZoomProject.localImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = selectedZoomProject.fallbackImage;
                  }}
                  alt={selectedZoomProject.niche[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FFFDF9] border-t border-[#B88928]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="text-xs text-[#2C2011]/85">
                <span className="font-bold text-[#1A140B]">{selectedZoomProject.niche[currentLang]}</span> — {selectedZoomProject.description[currentLang]}
              </div>

              <button
                onClick={handleOpenInstagram}
                className="gold-gradient-button px-5 py-2.5 rounded-xl text-xs font-bold text-[#140E06] flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#140E06]" />
                <span>Quero um site como este</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
