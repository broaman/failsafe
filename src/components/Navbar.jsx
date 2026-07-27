import React, { useState } from 'react';
import { Shield, Volume2, VolumeX, ArrowUpRight, Zap, Menu, X } from 'lucide-react';
import { playClick, playHover, toggleMute } from '../utils/soundEngine';

export default function Navbar({ onOpenWaitlist, onOpenBuy }) {
  const [muted, setMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleSound = () => {
    const isNowMuted = toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) playClick();
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-[#1A1E1B] backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-24 flex items-center justify-between gap-8">
        
        {/* LOGO */}
        <div 
          className="flex items-center gap-4 shrink-0 cursor-pointer group" 
          onClick={() => { playClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-black border border-[#00FF66]/40 group-hover:border-[#00FF66] transition-colors shrink-0 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
            <Shield className="w-5 h-5 text-[#00FF66]" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-mono font-extrabold text-lg tracking-wider text-white flex items-center gap-2 whitespace-nowrap">
              FAILSAFE <span className="text-[#00FF66] font-normal text-sm">// RUNTIME</span>
            </div>
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap mt-0.5">
              HARD-GATED AI FIREWALL
            </div>
          </div>
        </div>

        {/* CENTER STATUS INDICATOR */}
        <div className="hidden lg:flex items-center gap-3 px-5 py-2 rounded-full bg-[#090A0B] border border-[#1A1E1B] shrink-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF66]"></span>
          </span>
          <span className="font-mono text-xs font-medium tracking-wide text-gray-300 whitespace-nowrap">
            PROTOCOL STATUS: <span className="text-[#00FF66] font-semibold">FAIL-CLOSED OPERATIONAL</span>
          </span>
        </div>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden sm:flex items-center gap-5 shrink-0">
          {/* Sound Toggle Button */}
          <button
            onClick={handleToggleSound}
            onMouseEnter={playHover}
            title={muted ? "Unmute Audio Feedback" : "Mute Audio Feedback"}
            className="p-3 rounded-2xl bg-[#090A0B] border border-[#1A1E1B] hover:border-[#00FF66]/50 text-gray-400 hover:text-[#00FF66] transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4 text-gray-600" /> : <Volume2 className="w-4 h-4 text-[#00FF66]" />}
          </button>

          {/* BUY $SAFE TOKEN Button */}
          <button
            onClick={() => { playClick(); onOpenBuy(); }}
            onMouseEnter={playHover}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-mono text-xs font-semibold text-[#00FF66] bg-[#090A0B] border border-[#00FF66]/40 hover:border-[#00FF66] hover:bg-[#00FF66]/10 transition-all whitespace-nowrap"
          >
            <Zap className="w-4 h-4 text-[#00FF66]" />
            <span>BUY $SAFE TOKEN</span>
          </button>

          {/* JOIN WAITLIST Button */}
          <button
            onClick={() => { playClick(); onOpenWaitlist(); }}
            onMouseEnter={playHover}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-mono text-xs font-bold text-black bg-[#00FF66] hover:bg-[#33FF85] transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] active:scale-95 whitespace-nowrap"
          >
            <span>JOIN WAITLIST</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={handleToggleSound}
            className="p-3 rounded-2xl bg-[#090A0B] border border-[#1A1E1B] text-gray-400"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#00FF66]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-2xl bg-[#090A0B] border border-[#1A1E1B] text-gray-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#1A1E1B] bg-[#090A0B] px-6 py-6 flex flex-col gap-4 font-mono">
          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#030303] border border-[#1A1E1B] text-xs text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66]"></span>
            <span>STATUS: FAIL-CLOSED OPERATIONAL</span>
          </div>

          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(false);
              onOpenWaitlist();
            }}
            className="w-full py-4 rounded-2xl bg-[#00FF66] text-black font-bold text-xs flex items-center justify-center gap-2"
          >
            <span>JOIN WAITLIST</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(false);
              onOpenBuy();
            }}
            className="w-full py-4 rounded-2xl bg-[#090A0B] border border-[#00FF66]/50 text-[#00FF66] font-bold text-xs flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            <span>BUY $SAFE TOKEN</span>
          </button>
        </div>
      )}
    </header>
  );
}
