import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhyNowSection from './components/WhyNowSection';
import ValueSection from './components/ValueSection';
import MenuShowcase from './components/MenuShowcase';
import ExperienceSection from './components/ExperienceSection';
import LeadForm from './components/LeadForm';
import GoToMarket from './components/GoToMarket';
import AARRRFunnel from './components/AARRRFunnel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <ProblemSection />
        <div className="section-divider" />
        <WhyNowSection />
        <div className="section-divider" />
        <ValueSection />
        <div className="section-divider" />
        <MenuShowcase />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <LeadForm />
        <div className="section-divider" />
        <GoToMarket />
        <div className="section-divider" />
        <AARRRFunnel />
        <div className="section-divider" />
      </main>
      <Footer />
    </>
  );
}

export default App;
