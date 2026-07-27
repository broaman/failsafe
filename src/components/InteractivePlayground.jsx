import React, { useState } from 'react';
import { Terminal, ShieldAlert, Zap, Send, ShieldCheck, CornerDownLeft, AlertCircle } from 'lucide-react';
import { playClick, playHover, playIntercept } from '../utils/soundEngine';

export default function InteractivePlayground({ onThreatTrigger }) {
  const [customCommand, setCustomCommand] = useState('');
  const [activeLog, setActiveLog] = useState(null);
  const [isFlashing, setIsFlashing] = useState(false);

  const presets = [
    {
      id: 1,
      label: 'Drain Wallet to External Address',
      command: 'AGENT_CALL -> transferAll("0x9999...DEAD")',
      rule: 'DISASTER_PREVENTION_GATE',
      reason: 'UNAUTHORIZED_RECEIVER_WHITELIST',
      latency: '0.018ms',
      detail: 'Attempted to transfer 100% of ERC-20 token reserves to an unverified address.'
    },
    {
      id: 2,
      label: 'Slippage 15% Swap',
      command: 'DEX_ROUTER -> swapExactTokens(slippage=0.15)',
      rule: 'SLIPPAGE_TOLERANCE_GATE',
      reason: 'SLIPPAGE_EXCEEDS_MAX_THRESHOLD (Max 0.5%)',
      latency: '0.021ms',
      detail: 'Attempted high-slippage swap vulnerable to MEV sandwich attack.'
    },
    {
      id: 3,
      label: 'Delete Database Directory',
      command: 'SYSTEM_EXEC -> exec("rm -rf /var/lib/data")',
      rule: 'PTY_ROOT_FILE_PROTECTION',
      reason: 'FORBIDDEN_SYSCALL_SIGKILL',
      latency: '0.014ms',
      detail: 'Attempted recursive deletion of root application directory.'
    }
  ];

  const triggerIntercept = (item) => {
    playIntercept();
    setIsFlashing(true);
    if (onThreatTrigger) onThreatTrigger(true);

    setActiveLog(item);

    setTimeout(() => {
      setIsFlashing(false);
      if (onThreatTrigger) onThreatTrigger(false);
    }, 1000);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customCommand.trim()) return;

    playClick();
    const customItem = {
      id: Date.now(),
      label: 'Custom Malicious Command',
      command: customCommand,
      rule: 'ZERO_TRUST_DYNAMIC_INTERCEPT',
      reason: 'HARD_CLOSED_POLICY_INTERCEPT',
      latency: '0.019ms',
      detail: `Instruction '${customCommand}' blocked by zero-trust binary execution firewall.`
    };

    triggerIntercept(customItem);
    setCustomCommand('');
  };

  return (
    <section id="playground" className="section section-inner max-w-6xl">
      
      <div className="section-header">
        <div className="section-badge bg-[#FF2E54]/10 border border-[#FF2E54]/30 text-[#FF2E54]">
          <Zap className="w-3.5 h-3.5" />
          <span>INTERACTIVE DEMO</span>
        </div>

        <h2 className="section-title">
          TEST THE FIREWALL IN REAL TIME. <br />
          <span className="gradient-text-red">SEE HOW FAILSAFE STOPS EXPLOITS IN 0.02MS.</span>
        </h2>
        
        <p className="section-subtitle">
          Click a simulated rogue AI action below or enter a custom shell command to see instantaneous fail-closed rejection.
        </p>
      </div>

      {/* Terminal Container */}
      <div className={`w-full glass-panel rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
        isFlashing ? 'border-[#FF2E54] trigger-red-flash' : 'border-[#1F2421]'
      }`}>
        
        <div className="h-11 bg-[#08090A] border-b border-[#1F2421] px-4 sm:px-6 flex items-center justify-between font-mono text-xs text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF2E54]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66]"></span>
            <span className="ml-2 font-semibold text-white text-[11px] sm:text-xs">failsafe-interactive-sandbox</span>
          </div>
          <span className="hidden sm:inline-block text-[10px] text-[#00FF66]">SUB-0.02MS LATENCY</span>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Presets Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">
                1. CLICK A ROGUE EXPLOIT PRESET
              </span>

              <div className="space-y-3">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => { playClick(); triggerIntercept(preset); }}
                    onMouseEnter={playHover}
                    className="w-full p-4 rounded-xl bg-[#0C0D0E] border border-[#1F2421] hover:border-[#FF2E54]/60 hover:bg-[#FF2E54]/10 transition-all text-left group flex items-center justify-between"
                  >
                    <div>
                      <div className="font-mono text-xs font-bold text-white group-hover:text-[#FF2E54] transition-colors flex items-center space-x-2">
                        <AlertCircle className="w-3.5 h-3.5 text-[#FF2E54] shrink-0" />
                        <span className="truncate">{preset.label}</span>
                      </div>
                    </div>
                    <CornerDownLeft className="w-4 h-4 text-gray-500 group-hover:text-[#FF2E54] shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <form onSubmit={handleCustomSubmit} className="mt-6 pt-4 border-t border-[#1F2421]">
              <span className="font-mono text-xs font-semibold text-gray-400 block mb-2">
                OR TYPE CUSTOM COMMAND:
              </span>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={customCommand}
                  onChange={(e) => setCustomCommand(e.target.value)}
                  placeholder="e.g. cat /etc/shadow or sudo chmod 777"
                  className="w-full bg-[#050607] border border-[#1F2421] focus:border-[#FF2E54] rounded-xl px-4 py-3 font-mono text-xs text-white placeholder-gray-500 focus:outline-none pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-2 p-2 rounded-lg bg-[#FF2E54]/20 hover:bg-[#FF2E54] text-[#FF2E54] hover:text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

          </div>

          {/* Result Panel */}
          <div className="lg:col-span-7 flex flex-col min-h-[240px]">
            <span className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4">
              2. FAILSAFE FIREWALL RESULT
            </span>

            {activeLog ? (
              <div className="flex-1 glass-panel-red rounded-xl p-6 border-l-4 border-l-[#FF2E54] flex flex-col justify-between font-mono text-xs space-y-4">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#FF2E54]/30">
                    <div className="flex items-center space-x-2">
                      <ShieldAlert className="w-5 h-5 text-[#FF2E54]" />
                      <span className="font-bold text-xs text-[#FF2E54]">
                        FAIL-CLOSED TRIGGERED
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#FF2E54] text-black font-bold text-[10px]">
                      REJECTED IN {activeLog.latency}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3 text-gray-200">
                    <div>
                      <span className="text-gray-400 block text-[10px]">COMMAND</span>
                      <code className="text-white font-bold bg-black/60 px-3 py-1.5 rounded border border-[#FF2E54]/30 block mt-1 text-[11px] truncate">
                        {activeLog.command}
                      </code>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-2.5 rounded-lg bg-[#0C0D0E] border border-[#FF2E54]/30">
                        <span className="text-gray-400 block text-[10px]">RULE ID</span>
                        <span className="text-[#FF2E54] font-bold text-[11px] truncate block">{activeLog.rule}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0C0D0E] border border-[#FF2E54]/30">
                        <span className="text-gray-400 block text-[10px]">ACTION</span>
                        <span className="text-white font-bold text-[11px] block">PROCESS SIGKILL</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-[#FF2E54]/20 text-gray-300 text-[11px] leading-relaxed">
                      <span className="text-[#FF2E54] font-bold mr-1">REASON:</span>
                      {activeLog.detail}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#FF2E54]/30 flex items-center justify-between text-[10px] text-gray-400">
                  <span>ENCLAVE: LOCK INTACT</span>
                  <span className="text-[#00FF66]">ZERO EXPOSURE</span>
                </div>
              </div>
            ) : (
              <div className="flex-1 glass-panel rounded-xl p-8 border border-[#1F2421] flex flex-col items-center justify-center text-center">
                <ShieldCheck className="w-10 h-10 text-[#00FF66] mb-3 opacity-60" />
                <h4 className="font-mono text-xs font-bold text-gray-300">FIREWALL IDLE</h4>
                <p className="font-mono text-[11px] text-gray-400 max-w-xs mt-1">
                  Click a preset on the left to trigger a real-time interception test.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}
