import React from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone, Sparkles, Heart, Users, TrendingUp,
  Calculator, AlertCircle, BarChart3,
} from 'lucide-react';
import { aaarrrData, cacMetrics } from '../data/metrics';

const iconMap = {
  Megaphone,
  Sparkles,
  Heart,
  Users,
  TrendingUp,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function AARRRFunnel() {
  return (
    <section className="aarrr-section section-padding" id="metricas">
      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">
            <BarChart3 size={14} />
            Métricas & Modelo
          </span>
          <h2 className="section-title">Embudo AARRR + CAC</h2>
          <p className="section-subtitle">
            Pirate metrics para medir cada etapa del ciclo de vida del cliente,
            desde la adquisición hasta el revenue. Diseñado como herramienta de
            validación y planificación de lanzamiento.
          </p>
        </motion.div>

        {/* Funnel cards */}
        <motion.div
          className="aarrr-funnel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {aaarrrData.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div className="aarrr-card" key={item.stage} variants={fadeUp}>
                <div className="aarrr-card-icon">
                  <IconComponent size={22} />
                </div>
                <h3>{item.stage}</h3>
                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CAC Section */}
        <motion.div
          className="cac-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <div className="cac-header">
            <h3>Simulación de CAC</h3>
            <p>Costo de Adquisición de Cliente — Proyección inicial</p>
          </div>

          {/* Formula */}
          <div className="cac-formula">
            <div className="cac-formula-text">
              <Calculator size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
              CAC = inversión de marketing ÷ clientes nuevos
            </div>
            <div className="cac-formula-label">
              Métrica clave para validar viabilidad comercial del modelo
            </div>
          </div>

          {/* Metrics grid */}
          <motion.div
            className="cac-metrics"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {cacMetrics.map((metric) => (
              <motion.div className="cac-metric" key={metric.label} variants={fadeUp}>
                <div className="cac-metric-value">{metric.value}</div>
                <div className="cac-metric-label">
                  {metric.label}
                  {metric.suffix && (
                    <span style={{ opacity: 0.5, marginLeft: 4, fontSize: '10px' }}>{metric.suffix}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Disclaimer */}
          <div className="cac-disclaimer">
            <AlertCircle size={14} />
            Simulación inicial para validación escolar y planificación de lanzamiento.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
