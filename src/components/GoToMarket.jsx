import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle, Target } from 'lucide-react';
import { gtmPhases } from '../data/metrics';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function GoToMarket() {
  return (
    <section className="gtm-section section-padding" id="traccion">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">
            <Rocket size={14} />
            Go-to-Market
          </span>
          <h2 className="section-title">
            Plan de Tracción: de curiosidad a comunidad.
          </h2>
          <p className="section-subtitle">
            Tres fases diseñadas para construir audiencia, convertir leads en
            clientes y crear un sistema de retención sostenible.
          </p>
        </motion.div>

        <motion.div
          className="gtm-timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {gtmPhases.map((phase) => (
            <motion.div className="gtm-phase" key={phase.phase} variants={fadeUp}>
              <div className="gtm-phase-dot" aria-hidden="true" />

              <div className="gtm-phase-header">
                <span className="gtm-phase-number">{phase.phase}</span>
                <h3 className="gtm-phase-title">{phase.title}</h3>
              </div>

              <p className="gtm-phase-objective">
                Objetivo: {phase.objective}
              </p>

              <div className="gtm-phase-content">
                <div className="gtm-actions">
                  <h4>Acciones</h4>
                  <ul>
                    {phase.actions.map((action) => (
                      <li key={action}>
                        <CheckCircle size={14} />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="gtm-kpis">
                  <h4>KPIs</h4>
                  <ul>
                    {phase.kpis.map((kpi) => (
                      <li key={kpi}>
                        <Target size={14} />
                        {kpi}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
