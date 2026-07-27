import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, ArrowRight, Zap } from 'lucide-react';
import { playClick, playHover, playSuccess } from '../utils/soundEngine';

export default function Hero({ onOpenWaitlist, onOpenBuy }) {
  const [copied, setCopied] = useState(false);
  const CONTRACT_ADDRESS = '0x7a39e81b4c910293d84f93012849204859d04f2a';

  const handleCopyContract = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section section-hero max-w-4xl mx-auto text-center flex flex-col items-center">
      
      {/* Top Center Pill Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#090A0B] border border-[#1A1E1B] backdrop-blur-md mb-10 hover:border-[#00FF66]/40 transition-colors cursor-pointer mx-auto">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0"></span>
        <div className="font-mono text-xs font-medium text-gray-300 flex items-center gap-2.5 whitespace-nowrap">
          <span className="text-[#FF2E54] font-semibold">🔴 FAIL-CLOSED RUNTIME V1.0</span>
          <span className="text-gray-600">•</span>
          <span className="text-[#00FF66]">UNBREAKABLE AGENT FIREWALL</span>
        </div>
      </div>

      {/* Main Headline (Centered with clear line height & bottom margin) */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase max-w-4xl mx-auto leading-[1.12] mb-8">
        THE FIREWALL FOR <br />
        <span className="gradient-text-green">AUTONOMOUS AI AGENTS.</span>
      </h1>

      {/* Subheadline (Centered & Wide with relaxed line-height) */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed mb-12">
        FAILSAFE blocks rogue AI transactions, unauthorized API calls, and wallet drains <strong className="text-white font-semibold">before</strong> they execute. Hard-coded rules, sub-millisecond enforcement, and hardware tethering.
      </p>

      {/* Main CTAs (Centered with 24px gap) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto w-full sm:w-auto mb-14">
        
        {/* JOIN WAITLIST CTA */}
        <button
          onClick={() => { playClick(); onOpenWaitlist(); }}
          onMouseEnter={playHover}
          className="w-full sm:w-auto px-9 py-4 rounded-2xl font-mono text-xs sm:text-sm font-bold text-black bg-[#00FF66] hover:bg-[#33FF85] transition-all shadow-[0_0_25px_rgba(0,255,102,0.35)] flex items-center justify-center gap-3 group whitespace-nowrap"
        >
          <ShieldCheck className="w-5 h-5 text-black group-hover:rotate-12 transition-transform" />
          <span>JOIN EARLY ACCESS WAITLIST</span>
          <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
        </button>

        {/* GET $SAFE TOKEN button with copy icon */}
        <div className="w-full sm:w-auto flex items-center justify-between gap-3 bg-[#090A0B] border border-[#1A1E1B] hover:border-[#00FF66]/50 rounded-2xl p-2 transition-colors">
          <button
            onClick={() => { playClick(); onOpenBuy(); }}
            onMouseEnter={playHover}
            className="px-5 py-3 font-mono text-xs font-semibold text-white hover:text-[#00FF66] flex items-center gap-2 transition-colors whitespace-nowrap"
          >
            <Zap className="w-4 h-4 text-[#00FF66]" />
            <span>GET $SAFE TOKEN</span>
          </button>
          
          <button
            onClick={handleCopyContract}
            onMouseEnter={playHover}
            title="Copy Token Contract Address"
            className="px-4 py-3 border-l border-[#1A1E1B] text-gray-400 hover:text-[#00FF66] transition-colors flex items-center gap-2 font-mono text-[11px] whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#00FF66]" />
                <span className="text-[#00FF66] text-[10px]">COPIED</span>
              </>
            ) : (
              <>
                <span className="text-gray-400 font-mono text-[11px]">0x7a39...4f2a</span>
                <Copy className="w-4 h-4 text-gray-400" />
              </>
            )}
          </button>
        </div>

      </div>

      {/* Feature Badges (Centered with 24px gap) */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-gray-400">
        <span className="flex items-center gap-2.5 bg-[#090A0B] px-5 py-2.5 rounded-full border border-[#1A1E1B] whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#00FF66]"></span>
          <span>Zero-Trust C++ Gate</span>
        </span>
        <span className="flex items-center gap-2.5 bg-[#090A0B] px-5 py-2.5 rounded-full border border-[#1A1E1B] whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#00FF66]"></span>
          <span>Sub-1ms Latency</span>
        </span>
        <span className="flex items-center gap-2.5 bg-[#090A0B] px-5 py-2.5 rounded-full border border-[#1A1E1B] whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#00FF66]"></span>
          <span>Hardware Enclave Lock</span>
        </span>
      </div>

    </section>
  );
}
