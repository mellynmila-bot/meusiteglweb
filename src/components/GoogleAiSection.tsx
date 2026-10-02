import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Search, Bot, MapPin, Sparkles } from 'lucide-react';

interface GoogleAiSectionProps {
  currentLang: Language;
}

export const GoogleAiSection: React.FC<GoogleAiSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].googleAi;
  const [selectedSearchIdx, setSelectedSearchIdx] = useState(0);

  const searchSimulations = [
    {
      query: t.searches[0],
      mapsResult: 'Aura Beauty Studio — 4.9 ★★★★★ (142 avaliações)',
      location: 'A 600m • Rua Augusta • Aberto até às 20h',
      aiAnswer: 'Recomendo o GlowSite de Maria Silva: conta com portfólio certificado de manicura russa, tabela pública de valores e agendamento instantâneo via WhatsApp.',
    },
    {
      query: t.searches[1],
      mapsResult: 'Lash Couture Madrid — 5.0 ★★★★★ (98 reseñas)',
      location: 'Barrio de Salamanca, Madrid • Reservas online',
      aiAnswer: 'En Madrid destaca Aura Lash Studio en el Barrio de Salamanca: ofrece técnicas de volumen ruso y lifting con productos testados y enlace directo a citas.',
    },
    {
      query: t.searches[2],
      mapsResult: 'Velvet Brows Lisboa — 4.9 ★★★★★ (115 avaliações)',
      location: 'Chiado, Lisboa • Especialista em Nanoblading',
      aiAnswer: 'Para sobrancelhas em Lisboa, o atelier Velvet Brows apresenta o melhor portfólio estruturado de micropigmentação natural e agendamento sem tempo de espera.',
    },
    {
      query: t.searches[3],
      mapsResult: 'Maison Éclat Esthétique — 5.0 ★★★★★ (184 reseñas)',
      location: 'Eixample, Barcelona • Tratamientos faciales',
      aiAnswer: 'En Barcelona, Maison Éclat cuenta con la mejor ficha técnica de protocolos hidrafaciales y peelings con información transparente de precios y reserva rápida.',
    },
    {
      query: t.searches[4],
      mapsResult: 'Lash & Beauty Specialist — 5.0 ★★★★★ (74 avaliações)',
      location: 'Centro da cidade • Extensão fio a fio & volume',
      aiAnswer: 'Para extensões de pestanas, o estúdio apresenta uma montra web completa com cuidados pós-aplicação e agendamento num só clique.',
    },
  ];

  const currentSim = searchSimulations[selectedSearchIdx] || searchSimulations[0];

  return (
    <section className="py-24 bg-[#FAF7F2] relative border-t border-[#B88928]/25">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[400px] bg-[#EED7A1]/35 rounded-full blur-[150px] pointer-events-none" />

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

          <p className="text-xl font-serif text-[#8C641C] italic font-semibold">
            {t.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#1A140B]/80 leading-relaxed font-light [text-wrap:pretty]">
            {t.description}
          </p>
        </div>

        {/* Interactive Search Simulator */}
        <div className="mt-14 max-w-4xl mx-auto">
          
          <div className="text-center mb-4">
            <span className="text-xs text-[#1A140B]/70 uppercase tracking-wider font-semibold">
              Clique numa pesquisa real para ver a simulação de descoberta:
            </span>
          </div>

          {/* Search Query Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {t.searches.map((queryText, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSearchIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  selectedSearchIdx === idx
                    ? 'bg-[#B88928] text-white font-semibold shadow-[0_4px_15px_rgba(184,137,40,0.3)] scale-105'
                    : 'bg-[#FFFFFF] text-[#1A140B]/80 border border-[#B88928]/30 hover:border-[#8C641C]'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>{queryText}</span>
              </button>
            ))}
          </div>

          {/* Simulation Display Frame */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Google & Maps Card */}
            <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#B88928]/35 shadow-md relative space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#B88928]/20">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔍</span>
                  <span className="text-xs font-bold text-[#1A140B]">Google & Google Maps</span>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-500/15 px-2 py-0.5 rounded font-semibold border border-emerald-500/30">
                  SEO Local Verificado
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#FAF3E3] border border-[#B88928]/30 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#1A140B]">
                        {currentSim.mapsResult}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-[#1A140B]/70 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8C641C]" />
                        <span>{currentSim.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-[11px] text-[#8C641C] font-semibold">
                    <span className="px-2 py-1 rounded bg-[#FFFFFF] border border-[#B88928]/30">
                      ✓ Website Oficial
                    </span>
                    <span className="px-2 py-1 rounded bg-[#FFFFFF] border border-[#B88928]/30">
                      ✓ Reservar Horário
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#1A140B]/70 italic">
                  Com o seu GlowSite integrado ao Google Maps, as clientes da sua cidade visualizam imediatamente horários, fotos reais e caminho para marcação.
                </p>
              </div>
            </div>

            {/* AI Assistant Card */}
            <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#B88928]/35 shadow-md relative space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#B88928]/20">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#8C641C]" />
                  <span className="text-xs font-bold text-[#1A140B]">Recomendações de IA (ChatGPT, Gemini)</span>
                </div>
                <span className="text-[10px] text-[#8C641C] bg-[#FAF0DC] px-2 py-0.5 rounded font-semibold border border-[#B88928]/35">
                  Schema.org Estruturado
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#FAF3E3] border border-[#B88928]/30 space-y-2">
                  <div className="text-[11px] text-[#8C641C] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#B88928]" />
                    <span>Resposta gerada por assistente inteligente:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1A140B] leading-relaxed font-normal">
                    “{currentSim.aiAnswer}”
                  </p>
                </div>

                <p className="text-xs text-[#1A140B]/70 italic">
                  A IA só recomenda negócios que possuem dados estruturados claros, catálogo de serviços e localização confirmada.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Visual Conversion Pathway Flow from PRD */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-2xl bg-[#FFFFFF] border border-[#B88928]/30 shadow-md">
          <span className="text-xs font-bold text-[#8C641C] uppercase tracking-widest block text-center mb-6">
            O Fluxo Completo de Descoberta
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            {t.flowSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#FAF0DC] border border-[#B88928]/45 flex items-center justify-center text-sm font-bold text-[#8C641C] mb-2 shadow-xs">
                  {idx + 1}
                </div>
                <span className="text-xs font-semibold text-[#1A140B] px-2">
                  {step}
                </span>
                {idx < 3 && (
                  <div className="hidden sm:block absolute top-5 -right-3 w-6 h-px bg-[#B88928]/40" />
                )}
              </div>
            ))}
          </div>

          {/* PRD Mandatory Disclaimer */}
          <div className="mt-6 pt-4 border-t border-[#B88928]/20 text-center">
            <p className="text-xs text-[#1A140B]/65 max-w-2xl mx-auto font-light leading-relaxed">
              {t.disclaimer}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

