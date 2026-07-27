import React, { useState } from 'react';
import CyberGridBackground from './components/CyberGridBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveAgentTerminal from './components/LiveAgentTerminal';
import ProblemVsGate from './components/ProblemVsGate';
import SessionModes from './components/SessionModes';
import InteractivePlayground from './components/InteractivePlayground';
import TokenomicsRoadmap from './components/TokenomicsRoadmap';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import BuyTokenModal from './components/BuyTokenModal';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isThreatActive, setIsThreatActive] = useState(false);

  return (
    <div className="relative min-h-screen bg-pitch-black text-slate-100 font-sans selection:bg-[#00FF66] selection:text-black overflow-x-hidden">
      
      {/* Background Canvas FX */}
      <CyberGridBackground isThreatActive={isThreatActive} />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          onOpenBuy={() => setIsBuyOpen(true)}
        />

        <main className="flex-grow flex flex-col">
          <Hero
            onOpenWaitlist={() => setIsWaitlistOpen(true)}
            onOpenBuy={() => setIsBuyOpen(true)}
          />

          <div className="section-divider" aria-hidden="true" />

          <LiveAgentTerminal
            onThreatTrigger={(active) => setIsThreatActive(active)}
          />

          <div className="section-divider" aria-hidden="true" />

          <ProblemVsGate />

          <div className="section-divider" aria-hidden="true" />

          <SessionModes />

          <div className="section-divider" aria-hidden="true" />

          <InteractivePlayground
            onThreatTrigger={(active) => setIsThreatActive(active)}
          />

          <div className="section-divider" aria-hidden="true" />

          <TokenomicsRoadmap
            onOpenBuy={() => setIsBuyOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer />

      </div>

      {/* Modals */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      <BuyTokenModal
        isOpen={isBuyOpen}
        onClose={() => setIsBuyOpen(false)}
      />

    </div>
  );
}
