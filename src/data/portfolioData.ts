import { PortfolioItem, Testimonial, FaqItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'lash-madrid',
    title: 'Aura Lash Studio',
    subtitle: 'Lash Couture & Russian Volume',
    category: 'lashes',
    categoryLabel: {
      pt: 'Extensão de Pestanas',
      es: 'Extensiones de Pestañas',
    },
    location: 'Madrid, Barrio de Salamanca',
    imageUrl: '/src/assets/images/mockup_lash_artist_portfolio_1790959451650.jpg',
    description: {
      pt: 'Página exclusiva para atelier de pestanas com catálogo de curvaturas, cuidados e direcionamento direto para reservas WhatsApp.',
      es: 'Web exclusiva para estudio de pestañas con catálogo de curvaturas, cuidados y enlace directo a citas por WhatsApp.',
    },
    features: ['Catálogo de Técnicas', 'Google Maps Salamanca', 'Cuidados Pós-Aplicação', 'WhatsApp Instantâneo'],
    metrics: '+85% reservas diretas',
    clientName: 'Valeria Cruz',
    clientServices: [
      { name: 'Volume Russo Premium', price: '75€', duration: '120 min' },
      { name: 'Mega Volume Couture', price: '95€', duration: '150 min' },
      { name: 'Lash Lifting & Queratina', price: '50€', duration: '60 min' },
      { name: 'Manutenção 3 Semanas', price: '45€', duration: '75 min' },
    ],
  },
  {
    id: 'nails-lisboa',
    title: "L'Or Atelier Nails",
    subtitle: 'Haute Manicure & Nail Art',
    category: 'nails',
    categoryLabel: {
      pt: 'Nail Designer',
      es: 'Diseño de Uñas',
    },
    location: 'Lisboa, Avenida da Liberdade',
    imageUrl: '/src/assets/images/mockup_nail_art_haute_1790959460771.jpg',
    description: {
      pt: 'Apresentação refinada de manicura russa, blindagem em gel e nail art personalizada com galeria de alta definição.',
      es: 'Presentación refinada de manicura rusa, nivelación y nail art personalizado con galería en alta resolución.',
    },
    features: ['Galeria Editorial', 'Tabela de Manutenção', 'Google Maps Chiado', 'Sistema de Marcação'],
    metrics: 'Top 3 pesquisas locais',
    clientName: 'Inês Valente',
    clientServices: [
      { name: 'Manicura Russa Completa', price: '40€', duration: '60 min' },
      { name: 'Extensão em Gel Sculpting', price: '65€', duration: '90 min' },
      { name: 'Nail Art Minimalista Dourada', price: '20€', duration: '30 min' },
      { name: 'Manutenção Mensal Gel', price: '42€', duration: '75 min' },
    ],
  },
  {
    id: 'estetica-barcelona',
    title: 'Maison Éclat Esthétique',
    subtitle: 'Advanced Facial & Body Clinic',
    category: 'estetica',
    categoryLabel: {
      pt: 'Estética Facial & Corporal',
      es: 'Estética Médica y Facial',
    },
    location: 'Barcelona, Eixample',
    imageUrl: '/src/assets/images/mockup_spa_clinic_1790959474747.jpg',
    description: {
      pt: 'Montra digital para clínica estética, tratamentos faciais e protocolos de rejuvenescimento com esclarecimento de etapas e contacto direto.',
      es: 'Escaparate digital para clínica estética, tratamientos faciales y protocolos antiedad con resolución de dudas y contacto directo.',
    },
    features: ['Protocolos Faciais', 'Protocolos Corporais', 'Google Maps Eixample', 'Agendamento Direto'],
    metrics: 'Triplicou contactos qualificados',
    clientName: 'Dra. Camille Moreau',
    clientServices: [
      { name: 'Protocolo Glow Hidrafacial', price: '120€', duration: '75 min' },
      { name: 'Peeling Iluminador Dourado', price: '95€', duration: '60 min' },
      { name: 'Radiofrequência Facial Lift', price: '110€', duration: '60 min' },
      { name: 'Consulta Diagnóstica de Pele', price: '40€', duration: '45 min' },
    ],
  },
  {
    id: 'brows-porto',
    title: 'Velvet Brows & Beauty',
    subtitle: 'Eyebrow Architecture & Micropigmentation',
    category: 'brows',
    categoryLabel: {
      pt: 'Design de Sobrancelhas',
      es: 'Diseño de Cejas y Mirada',
    },
    location: 'Porto, Foz do Douro',
    imageUrl: '/src/assets/images/hero_luxury_beauty_aesthetic_1790959440584.jpg',
    description: {
      pt: 'Página de prestígio para nanoblading, brow lamination e maquilhagem noiva com exibição impecável de antes/depois.',
      es: 'Página de prestigio para nanoblading, laminado de cejas y novias con exhibición impecable de antes y después.',
    },
    features: ['Galeria Antes/Depois', 'Tabela de Procedimentos', 'Google Maps Foz', 'Reservas Online'],
    metrics: '+90% confiança na marcação',
    clientName: 'Sofia Albuquerque',
    clientServices: [
      { name: 'Nanoblading Fio a Fio', price: '210€', duration: '120 min' },
      { name: 'Brow Lamination & Nutrição', price: '45€', duration: '45 min' },
      { name: 'Design com Henna Orgânica', price: '28€', duration: '40 min' },
      { name: 'Retoque Semestral Velvet', price: '90€', duration: '60 min' },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Carolina Mendes',
    role: {
      pt: 'Nail Designer & Formadora',
      es: 'Nail Designer y Formadora',
    },
    location: 'Lisboa, Portugal',
    quote: {
      pt: 'O site mudou totalmente a perceção do meu atelier. Quando envio o link a uma cliente, ela já sabe que está a lidar com uma profissional de alto nível. Valeu cada cêntimo.',
      es: 'La web cambió totalmente la percepción de mi salón. Cuando envío el enlace a una clienta, ya sabe que está tratando con una profesional de alto nivel.',
    },
    highlight: {
      pt: 'Perceção imediata de valor e aumento de agendamentos diretos.',
      es: 'Percepción inmediata de valor y aumento de reservas directas.',
    },
    rating: 5,
  },
  {
    id: 't2',
    name: 'Elena Morales',
    role: {
      pt: 'Lash Artist & Criadora do Studio Aura',
      es: 'Lash Artist y Fundadora de Studio Aura',
    },
    location: 'Madrid, Espanha',
    quote: {
      pt: 'Poupou-me horas de mensagens no WhatsApp a explicar preços e localização. Agora as clientes chegam já decididas e com data marcada.',
      es: 'Me ahorró horas de mensajes en WhatsApp explicando precios y ubicación. Ahora las clientas llegan decididas y listas para reservar.',
    },
    highlight: {
      pt: 'Fim das dúvidas repetitivas em mensagens privadas.',
      es: 'Fin de las dudas repetitivas por mensajes privados.',
    },
    rating: 5,
  },
  {
    id: 't3',
    name: 'Beatriz Fonseca',
    role: {
      pt: 'Especialista em Estética Facial & Spa',
      es: 'Especialista en Estética Facial y Spa',
    },
    location: 'Porto, Portugal',
    quote: {
      pt: 'Com o SEO e o Google Maps bem configurados, comecei a receber marcações de pessoas que pesquisaram no Google e nunca tinham visto o meu Instagram.',
      es: 'Con el SEO y Google Maps bien configurados, empecé a recibir reservas de personas que buscaron en Google y no me conocían en Instagram.',
    },
    highlight: {
      pt: 'Descoberta ativa pelo Google Maps e pesquisas locais.',
      es: 'Descubrimiento activo por Google Maps y búsquedas locales.',
    },
    rating: 5,
  },
  {
    id: 't4',
    name: 'Lucía Navarro',
    role: {
      pt: 'Micropigmentadora & Brow Artist',
      es: 'Micropigmentadora y Brow Artist',
    },
    location: 'Barcelona, Espanha',
    quote: {
      pt: 'Em 24 horas depois de enviar os meus dados o site estava no ar com uma elegância que eu não achava possível tão rápido.',
      es: 'En 24 horas tras enviar mis datos la web estaba online con una elegancia que no creía posible tan rápido.',
    },
    highlight: {
      pt: 'Rapidez de entrega e elegância impecável.',
      es: 'Rapidez de entrega y elegancia impecable.',
    },
    rating: 5,
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'coding',
    question: {
      pt: 'Preciso de saber programar ou mexer em ferramentas complicadas?',
      es: '¿Necesito saber programar o usar herramientas complejas?',
    },
    answer: {
      pt: 'Não. Nós cuidamos de tudo: design, estrutura, configuração e publicação. Você apenas nos envia as suas informações básicas (serviços, valores e fotos) e nós entregamos o site 100% pronto.',
      es: 'No. Nos encargamos de absolutamente todo: diseño, estructura, configuración y puesta online. Solo nos facilitas tus servicios, precios y fotos.',
    },
  },
  {
    id: 'mobile',
    question: {
      pt: 'O site funciona bem no telemóvel?',
      es: '¿La web se ve bien en el teléfono móvil?',
    },
    answer: {
      pt: 'Sim, é pensado prioritariamente para o telemóvel (Mobile First). Mais de 90% das suas clientes irão aceder pelo smartphone, por isso a velocidade e a facilidade de navegação são perfeitas.',
      es: 'Sí, está diseñada prioritariamente para smartphone (Mobile First). Más del 90% de tus clientas navegarán desde el móvil.',
    },
  },
  {
    id: 'seo',
    question: {
      pt: 'O site tem otimização de SEO?',
      es: '¿La página incluye optimización SEO?',
    },
    answer: {
      pt: 'Sim. Criamos o site com as boas práticas de SEO on-page: títulos, meta descrições, dados estruturados para negócios locais e integração do Google Maps.',
      es: 'Sí. Diseñamos la web con las mejores prácticas de SEO on-page: títulos, meta descripciones, datos estructurados para negocios locales e integración de Google Maps.',
    },
  },
  {
    id: 'google-guarantee',
    question: {
      pt: 'Vocês garantem a primeira posição no Google?',
      es: '¿Garantizáis la primera posición en Google?',
    },
    answer: {
      pt: 'Não prometemos posições garantidas (desconfie sempre de quem prometer isso, pois os algoritmos dependem de múltiplos fatores externos). O que garantimos é a melhor estrutura técnica e estratégica para que o seu negócio seja encontrado com máxima clareza.',
      es: 'No prometemos posiciones garantizadas (desconfía de quien lo haga). Lo que garantizamos es la mejor estructura técnica y estratégica para que tu negocio sea encontrado y comprendido con máxima claridad.',
    },
  },
  {
    id: 'booking-system',
    question: {
      pt: 'Posso ligar o meu sistema de agendamento atual?',
      es: '¿Puedo conectar mi sistema de citas actual?',
    },
    answer: {
      pt: 'Sim. Podemos direcionar os botões de agendamento para o seu WhatsApp (com mensagem personalizada pronta), Calendly, Fresha, Treatwell ou qualquer outra ferramenta que já utilize.',
      es: 'Sí. Conectamos los botones de reserva directamente con tu WhatsApp (con mensaje personalizado), Calendly, Fresha, Treatwell o la plataforma que utilices.',
    },
  },
  {
    id: 'multilingual',
    question: {
      pt: 'O site pode ser preparado em vários idiomas?',
      es: '¿La web puede estar en varios idiomas?',
    },
    answer: {
      pt: 'Sim. A GlowSite foi pensada para o mercado de Espanha e Europa. O seu site pode ser estruturado em Português e Espanhol.',
      es: 'Sí. GlowSite está diseñada para el mercado de España y Europa. Tu web puede estar estructurada en Español y Portugués.',
    },
  },
  {
    id: 'delivery-time',
    question: {
      pt: 'Quanto tempo demora para o site ficar online?',
      es: '¿Cuánto tiempo tarda en estar online la web?',
    },
    answer: {
      pt: 'O compromisso GlowSite é entregar o seu site pronto e funcional em até 24 horas úteis após o envio completo das informações e fotos.',
      es: 'El compromiso GlowSite es entregarte tu web lista y funcional en hasta 24 horas hábiles tras recibir tus datos y fotos.',
    },
  },
  {
    id: 'ai-discovery',
    question: {
      pt: 'O que significa estar otimizado para sistemas de IA?',
      es: '¿Qué significa estar optimizada para sistemas de Inteligencia Artificial?',
    },
    answer: {
      pt: 'Ferramentas como ChatGPT, Gemini e assistentes de voz utilizam dados públicos e estruturados para responder perguntas como "onde fazer unhas perto de mim". Ter um site com semântica clara e dados organizados (Schema.org) aumenta consideravelmente a probabilidade de ser recomendada.',
      es: 'Herramientas como ChatGPT, Gemini y asistentes virtuales utilizan datos estructurados para recomendar profesionales. Tener una web con datos organizados (Schema.org) aumenta considerablemente la capacidad de ser recomendada.',
    },
  },
];
