import React from 'react';
import { XCircle, CheckCircle2, ShieldAlert, Lock, AlertTriangle } from 'lucide-react';

export default function ProblemVsGate() {
  const flawedFeatures = [
    { title: "Soft Prompt Boundaries", desc: "LLMs ignore system prompts when jailbroken or given complex instructions." },
    { title: "Uncontrolled Wallet Access", desc: "Private keys stored in environment variables allow single-click full wallet drains." },
    { title: "Fail-Open Architecture", desc: "If the AI model hallucinates or fails, the transaction executes anyway." }
  ];

  const failsafeFeatures = [
    { title: "Local C++ Execution Gate", desc: "Hard security boundary evaluated outside the LLM context window at kernel level." },
    { title: "Hardware-Tethered Approvals", desc: "Requires YubiKey or TPM enclave key signature before high-value swaps execute." },
    { title: "Fail-Closed System", desc: "If a rule or session budget is violated, process receives immediate SIGKILL." }
  ];

  return (
    <section className="section section-inner max-w-5xl">
      
      <div className="section-header">
        <div className="section-badge bg-[#FF2E54]/10 border border-[#FF2E54]/30 text-[#FF2E54]">
          <AlertTriangle className="w-4 h-4" />
          <span>THE SECURITY PROBLEM</span>
        </div>

        <h2 className="section-title">
          PROMPT SAFETY IS A LIE. <br />
          <span className="gradient-text-green">FAILSAFE IS HARD-CODED CODE.</span>
        </h2>
        
        <p className="section-subtitle">
          AI agents cannot protect themselves using system prompts alone. Security enforcement must exist independently in hardware and code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full text-center">
        
        {/* CARD 1: Traditional Prompt Safety */}
        <div className="glass-panel-red rounded-3xl p-8 sm:p-10 flex flex-col items-center space-y-8">
          <div className="w-full">
            <div className="flex flex-col items-center gap-4 pb-6 border-b border-[#FF2E54]/30 mb-8">
              <div className="p-3 rounded-2xl bg-[#FF2E54]/20 border border-[#FF2E54]/40">
                <ShieldAlert className="w-6 h-6 text-[#FF2E54]" />
              </div>
              <div>
                <h3 className="font-mono text-lg font-bold text-white">
                  PROMPT SAFETY
                </h3>
                <span className="text-xs font-mono text-[#FF2E54] uppercase tracking-wider">
                  FLAWED & FAIL-OPEN
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[#FF2E54] bg-[#FF2E54]/20 px-3 py-1.5 rounded-xl border border-[#FF2E54]/30">
                HIGH RISK
              </span>
            </div>

            <div className="space-y-4">
              {flawedFeatures.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#090A0B]/80 border border-[#FF2E54]/20">
                  <XCircle className="w-5 h-5 text-[#FF2E54]" />
                  <span className="font-mono text-xs font-bold text-gray-200">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-400 font-sans leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#FF2E54]/20 font-mono text-[10px] text-[#FF2E54] w-full flex flex-col sm:flex-row justify-center items-center gap-2">
            <span>SECURITY LEVEL: CRITICAL</span>
            <span className="hidden sm:inline text-[#FF2E54]/40">•</span>
            <span>PROMPT INJECTION VULNERABLE</span>
          </div>
        </div>

        {/* CARD 2: FAILSAFE Runtime */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 flex flex-col items-center space-y-8 border border-[#00FF66]/30">
          <div className="w-full">
            <div className="flex flex-col items-center gap-4 pb-6 border-b border-[#00FF66]/30 mb-8">
              <div className="p-3 rounded-2xl bg-[#00FF66]/10 border border-[#00FF66]/40">
                <Lock className="w-6 h-6 text-[#00FF66]" />
              </div>
              <div>
                <h3 className="font-mono text-lg font-bold text-white">
                  FAILSAFE RUNTIME
                </h3>
                <span className="text-xs font-mono text-[#00FF66] uppercase tracking-wider">
                  UNBREAKABLE FAIL-CLOSED
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-black bg-[#00FF66] px-3 py-1.5 rounded-xl">
                100% SECURE
              </span>
            </div>

            <div className="space-y-4">
              {failsafeFeatures.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#090A0B] border border-[#00FF66]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#00FF66]" />
                  <span className="font-mono text-xs font-bold text-gray-200">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-400 font-sans leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#00FF66]/20 font-mono text-[10px] text-[#00FF66] w-full flex flex-col sm:flex-row justify-center items-center gap-2">
            <span>SECURITY LEVEL: IMMUTABLE</span>
            <span className="hidden sm:inline text-[#00FF66]/40">•</span>
            <span>KERNEL LEVEL FIREWALL</span>
          </div>
        </div>

      </div>

    </section>
  );
}
