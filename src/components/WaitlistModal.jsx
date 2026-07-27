import React, { useState } from 'react';
import { X, ShieldCheck, Check, Sparkles, Send, Bot } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClick, playSuccess } from '../utils/soundEngine';

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [framework, setFramework] = useState('LangChain');
  const [submitted, setSubmitted] = useState(false);
  const [referralRank, setReferralRank] = useState(1402);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    playSuccess();
    setSubmitted(true);
    setReferralRank(Math.floor(Math.random() * 200) + 1200);

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 85,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00FF66', '#FFFFFF', '#1F2421']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel rounded-2xl border border-[#00FF66]/50 box-glow-green p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => {
            playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#0C0D0E] border border-[#1F2421] text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/40">
                <ShieldCheck className="w-6 h-6 text-[#00FF66]" />
              </div>
              <div>
                <h3 className="font-mono text-xl font-extrabold text-white">
                  JOIN EARLY ACCESS
                </h3>
                <span className="font-mono text-xs text-[#00FF66]">
                  FAILSAFE RUNTIME V1.0 DEV BETA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-sans mb-6 leading-relaxed">
              Reserve your spot in the hard-gated C++ execution daemon beta. Get priority access to hardware enclave keys and early testnet $SAFE rewards.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs font-bold text-gray-400 block mb-1">
                  WORK EMAIL / DEVELOPER HANDLE
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="agent.builder@sovereign-ai.io"
                  className="w-full bg-[#050607] border border-[#1F2421] focus:border-[#00FF66] rounded-xl px-4 py-3 font-mono text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold text-gray-400 block mb-1">
                  PRIMARY AI FRAMEWORK / STACK
                </label>
                <select
                  value={framework}
                  onChange={(e) => setFramework(e.target.value)}
                  className="w-full bg-[#050607] border border-[#1F2421] focus:border-[#00FF66] rounded-xl px-4 py-3 font-mono text-xs text-white focus:outline-none transition-colors"
                >
                  <option value="LangChain">LangChain / LangGraph</option>
                  <option value="AutoGen">Microsoft AutoGen Swarms</option>
                  <option value="CrewAI">CrewAI Framework</option>
                  <option value="PythonCustom">Custom Python Async Daemon</option>
                  <option value="RustNative">Rust Native Autonomous Agent</option>
                  <option value="ElizaOS">ElizaOS / Web3 Agent</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl font-mono text-xs font-bold text-black bg-[#00FF66] hover:bg-[#33FF85] transition-all shadow-[0_0_25px_rgba(0,255,102,0.5)] flex items-center justify-center space-x-2"
              >
                <span>RESERVE EARLY ACCESS SPOT</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#00FF66]/20 border border-[#00FF66] flex items-center justify-center mx-auto mb-4 box-glow-green">
              <Check className="w-8 h-8 text-[#00FF66]" />
            </div>

            <h3 className="font-mono text-2xl font-extrabold text-white">
              YOU'RE ON THE LIST!
            </h3>

            <p className="font-mono text-xs text-[#00FF66] mt-2">
              CONFIRMATION SENT TO {email.toUpperCase()}
            </p>

            <div className="my-6 p-4 rounded-xl bg-[#0C0D0E] border border-[#00FF66]/40 font-mono">
              <span className="text-xs text-gray-400 block">YOUR DEV WAITLIST RANK</span>
              <span className="text-3xl font-extrabold text-[#00FF66] glow-green-sm block mt-1">
                #{referralRank}
              </span>
              <span className="text-[10px] text-gray-500 block mt-1">
                PRIORITY BATCH: HIGH-THROUGHPUT BETA
              </span>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-[#0C0D0E] border border-[#1F2421] hover:border-[#00FF66] text-gray-300 font-mono text-xs font-bold transition-colors"
            >
              RETURN TO DASHBOARD
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
