import React, { useState } from 'react';
import { Flame, Coins, Copy, Check, Lock, Zap } from 'lucide-react';
import { playClick, playHover, playSuccess } from '../utils/soundEngine';

export default function TokenomicsRoadmap({ onOpenBuy }) {
  const [copied, setCopied] = useState(false);
  const CONTRACT_ADDRESS = '0x7a39e81b4c910293d84f93012849204859d04f2a';

  const handleCopyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const utilities = [
    {
      icon: Coins,
      title: "Validator Staking",
      tag: "STAKING",
      desc: "Node operators stake $SAFE tokens to run low-latency C++ firewall nodes and earn gas verification fees.",
      stat: "12.5% Staking Yield"
    },
    {
      icon: Lock,
      title: "Security Module Bonds",
      tag: "DEVELOPER REGISTRY",
      desc: "AI developers bond $SAFE to register custom security rule modules in the decentralized FAILSAFE registry.",
      stat: "$4.8M Total Value Bonded"
    },
    {
      icon: Flame,
      title: "Automated Token Burn",
      tag: "DEFLATIONARY",
      desc: "Every intercepted rogue transaction triggers an automated micro-burn of $SAFE tokens from execution fees.",
      stat: "1.42M Tokens Burned"
    }
  ];

  return (
    <section className="section section-inner max-w-6xl">
      
      <div className="section-header">
        <div className="section-badge bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66]">
          <Coins className="w-3.5 h-3.5" />
          <span>TOKEN ECONOMICS</span>
        </div>

        <h2 className="section-title">
          $SAFE TOKENOMICS. <br />
          <span className="gradient-text-green">POWERING THE AGENTIC SECURITY LAYER.</span>
        </h2>
        
        <p className="section-subtitle">
          $SAFE secures the validator node network, bonds custom developer safety modules, and burns on every thwarted exploit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center">
        {utilities.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-7 sm:p-8 flex flex-col items-center border border-[#1F2421]"
            >
              <div className="p-3 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/30 mb-4">
                <IconComp className="w-5 h-5 text-[#00FF66]" />
              </div>

              <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-[#0C0D0E] border border-[#1F2421] text-gray-400 mb-4">
                {item.tag}
              </span>

              <h3 className="font-mono text-lg font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="pt-4 border-t border-[#1F2421] font-mono text-xs font-bold text-[#00FF66] w-full">
                {item.stat}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 w-full max-w-2xl flex flex-col items-center gap-6 text-center">
        <div>
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-2">
            Token Contract
          </span>
          <button
            onClick={handleCopyContract}
            onMouseEnter={playHover}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/60 border border-[#1F2421] hover:border-[#00FF66]/30 font-mono text-xs text-gray-200 transition-colors"
          >
            <code className="truncate max-w-[220px] sm:max-w-none">{CONTRACT_ADDRESS}</code>
            {copied ? <Check className="w-4 h-4 text-[#00FF66] shrink-0" /> : <Copy className="w-4 h-4 text-gray-400 shrink-0" />}
          </button>
        </div>

        <div className="font-mono text-xs text-gray-400">
          Total Supply: <span className="text-white font-bold">100,000,000 $SAFE</span>
        </div>

        <button
          onClick={() => { playClick(); onOpenBuy(); }}
          onMouseEnter={playHover}
          className="px-7 py-3.5 rounded-xl bg-[#00FF66] hover:bg-[#33FF85] font-mono text-xs font-bold text-black transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)] flex items-center gap-2"
        >
          <Zap className="w-4 h-4" />
          <span>BUY $SAFE TOKEN</span>
        </button>
      </div>

    </section>
  );
}
