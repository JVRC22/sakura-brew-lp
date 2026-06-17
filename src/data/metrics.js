export const aaarrrData = [
  {
    stage: 'Acquisition',
    icon: 'Megaphone',
    description: 'TikTok, Instagram, microinfluencers, Google Maps y flyers QR.',
  },
  {
    stage: 'Activation',
    icon: 'Sparkles',
    description: 'Formulario VIP, cupón de primera visita y encuesta de sabores.',
  },
  {
    stage: 'Retention',
    icon: 'Heart',
    description: 'Lealtad digital, sabores de temporada y comunidad.',
  },
  {
    stage: 'Referral',
    icon: 'Users',
    description: 'Código trae-a-un-amigo, UGC y spot sakura.',
  },
  {
    stage: 'Revenue',
    icon: 'TrendingUp',
    description: 'Ticket promedio, combos, upsell de mochi + bebida.',
  },
];

export const cacMetrics = [
  { value: '$5,000', label: 'Inversión Inicial', suffix: 'MXN' },
  { value: '500', label: 'Leads Esperados', suffix: '' },
  { value: '$10', label: 'CPL Estimado', suffix: 'MXN' },
  { value: '125', label: 'Clientes Nuevos', suffix: '(25% conv.)' },
  { value: '$40', label: 'CAC Estimado', suffix: 'MXN' },
  { value: '$110', label: 'Ticket Promedio', suffix: 'MXN' },
  { value: '$13,750', label: 'Ingreso Inicial Est.', suffix: 'MXN' },
  { value: '2.75x', label: 'ROI Estimado', suffix: '' },
];

export const gtmPhases = [
  {
    phase: 'Fase 1',
    title: 'Pre-lanzamiento',
    objective: 'Crear lista VIP y validar sabores favoritos con el mercado local.',
    actions: [
      'Landing page con formulario de captación',
      'Reels y TikToks del local y bebidas',
      'Encuesta de sabores favoritos',
      'Microinfluencers locales de lifestyle',
      'Giveaway "Primeros 100 Sakura Pass"',
    ],
    kpis: [
      '500 leads captados',
      'CPL menor a $15 MXN',
      '100 respuestas de encuesta',
    ],
  },
  {
    phase: 'Fase 2',
    title: 'Lanzamiento',
    objective: 'Convertir leads en primeras visitas y generar tracción orgánica.',
    actions: [
      'Soft opening exclusivo para lista VIP',
      'Código QR en redes para primer combo',
      'Combo bebida + mochi de bienvenida',
      'Google Maps + primeras reseñas verificadas',
    ],
    kpis: [
      '150 primeras visitas',
      '50 reseñas en Google Maps',
      'Conversión lead a visita: 20%-30%',
    ],
  },
  {
    phase: 'Fase 3',
    title: 'Retención',
    objective: 'Aumentar recompra, referidos y lifetime value del cliente.',
    actions: [
      'Tarjeta digital de lealtad',
      'Sabores de temporada exclusivos',
      'Sakura Drops mensuales (ediciones limitadas)',
      'Programa de referidos con recompensas',
    ],
    kpis: [
      '30% recompra mensual',
      'Rating ≥ 4.7 en Google Maps',
      'CAC recuperado en 1ra o 2da visita',
    ],
  },
];
