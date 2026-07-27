import React, { useState } from 'react';
import { UserCheck, Zap, Terminal, Key, Check, Code } from 'lucide-react';
import { playClick, playHover } from '../utils/soundEngine';

export default function SessionModes() {
  const [selectedMode, setSelectedMode] = useState(0);

  const modes = [
    {
      id: "RESTRICTED",
      title: "1. RESTRICTED MODE",
      tag: "HUMAN APPROVAL REQUIRED",
      icon: UserCheck,
      desc: "Requires human confirmation on mobile or YubiKey for every swap or external API mutation.",
      features: [
        "Push notification payload preview",
        "30-second auto-expiration timeout",
        "Zero autonomous signing"
      ],
      code: `failsafe.enforceMode({
  mode: "RESTRICTED",
  requireHumanApproval: true,
  timeoutMs: 30000
});`
    },
    {
      id: "MISSION",
      title: "2. MISSION MODE",
      tag: "HARD-CAPPED BUDGET",
      icon: Zap,
      desc: "Unattended 24/7 autonomous execution with hard-capped session budgets and contract address whitelists.",
      features: [
        "Hard spend limit ($10,000 USD)",
        "Max velocity: 5 tx per minute",
        "Strict DEX contract verification"
      ],
      code: `failsafe.setSessionBudget({
  maxUsdValue: 10000,
  maxVelocityPerMin: 5,
  allowedContracts: ["0xUniswapV3..."]
});`
    },
    {
      id: "SANDBOXED",
      title: "3. SANDBOXED RUNTIME",
      tag: "SYSTEM ISOLATION",
      icon: Terminal,
      desc: "Isolated virtual container preventing AI agents from accessing root system files or unauthorized network sockets.",
      features: [
        "Read-only root disk filesystem",
        "Blocked outbound shell commands",
        "Isolated process memory space"
      ],
      code: `failsafe.spawnJail({
  readOnlyFilesystem: true,
  blockRootSyscalls: true
});`
    },
    {
      id: "HARDWARE",
      title: "4. HARDWARE TETHER",
      tag: "TPM & MULTI-SIG",
      icon: Key,
      desc: "Multi-sig and Apple Secure Enclave / TPM hardware verification required for transactions over $50,000.",
      features: [
        "TPM 2.0 & YubiKey hardware lock",
        "Threshold 2-of-3 signature check",
        "Immutable enclave proof"
      ],
      code: `failsafe.requireHardwareEnclave({
  threshold: "2-of-3",
  hardwareModules: ["TPM_2.0"]
});`
    }
  ];

  return (
    <section className="section section-inner max-w-5xl">
      
      <div className="section-header">
        <div className="section-badge bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66]">
          <Terminal className="w-4 h-4" />
          <span>SECURITY CONFIGURATION</span>
        </div>

        <h2 className="section-title">
          THE 4 SESSION MODES. <br />
          <span className="gradient-text-green">TAILORED TO YOUR AGENT'S AUTONOMY.</span>
        </h2>
        
        <p className="section-subtitle">
          Switch execution modes dynamically based on transaction value and human supervision level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full text-center">
        {modes.map((mode, idx) => {
          const IconComponent = mode.icon;
          const isSelected = selectedMode === idx;

          return (
            <div
              key={mode.id}
              onClick={() => { playClick(); setSelectedMode(idx); }}
              onMouseEnter={playHover}
              className={`glass-panel rounded-3xl p-8 sm:p-10 cursor-pointer transition-all duration-200 flex flex-col items-center space-y-5 ${
                isSelected
                  ? 'border-[#00FF66] bg-[#090A0B]'
                  : 'border-[#1A1E1B] hover:border-[#00FF66]/40'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`p-3 rounded-2xl border transition-colors ${
                  isSelected ? 'bg-[#00FF66]/15 border-[#00FF66] text-[#00FF66]' : 'bg-[#090A0B] border-[#1A1E1B] text-gray-400'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-mono text-base font-bold text-white">
                    {mode.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[#00FF66] font-semibold">
                    {mode.tag}
                  </span>
                </div>
                <span className={`w-3 h-3 rounded-full border ${
                  isSelected ? 'bg-[#00FF66] border-[#00FF66]' : 'border-gray-600'
                }`}></span>
              </div>

              <p className="text-gray-300 text-sm font-sans leading-relaxed">
                {mode.desc}
              </p>

              <div className="space-y-2 w-full">
                {mode.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center justify-center gap-2 text-xs font-mono text-gray-400">
                    <Check className="w-4 h-4 text-[#00FF66] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#050607] border border-[#1A1E1B] font-mono text-xs text-gray-300 overflow-x-auto w-full text-left">
                <div className="flex items-center justify-between text-[10px] text-gray-400 mb-2 pb-2 border-b border-[#1A1E1B]">
                  <span>FAILSAFE_GATE.CPP</span>
                  <Code className="w-3.5 h-3.5 text-[#00FF66]" />
                </div>
                <pre className="text-[#00FF66]/90 text-[11px]">{mode.code}</pre>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
