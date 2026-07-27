import React, { useState, useEffect } from 'react';
import { Play, Pause, ShieldAlert, ShieldCheck, Activity, Cpu, Lock, Terminal } from 'lucide-react';
import { playClick, playHover, playIntercept, playSuccess } from '../utils/soundEngine';

export default function LiveAgentTerminal({ onThreatTrigger }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [logs, setLogs] = useState([
    { id: 1, time: '11:42:01', tag: 'AGENT_SWARM_04', text: 'Initiating DEX swap $12,500 USDC...', status: 'WARNING' },
    { id: 2, time: '11:42:02', tag: 'CHECKING_GATE', text: 'Evaluating session boundary ($10,000 max)...', status: 'INFO' },
    { id: 3, time: '11:42:02', tag: 'FAILSAFE_GATE', text: 'BUDGET EXCEEDED: Delta +$2,500 USD', status: 'BLOCKED' },
    { id: 4, time: '11:42:03', tag: 'ENCLAVE_HARDWARE', text: 'YubiKey TPM Hardware ack: PENDING_USER_TOUCH', status: 'BLOCKED' },
    { id: 5, time: '11:42:04', tag: 'DAEMON_FIREWALL', text: 'Kill signal emitted -> Process SIGKILL (0.018ms)', status: 'SAFE' }
  ]);

  const [shieldedAmount, setShieldedAmount] = useState(142509320);
  const [blockedCount, setBlockedCount] = useState(89412);
  const [countdown, setCountdown] = useState(2652);
  const [activeAlert, setActiveAlert] = useState(true);

  // Stream generator
  useEffect(() => {
    if (!isPlaying) return;

    const streamInterval = setInterval(() => {
      const timestamp = new Date().toTimeString().split(' ')[0];
      const randomEvents = [
        { tag: 'AGENT_SWARM_02', text: 'Attempting DEX swap 45 ETH...', status: 'INFO' },
        { tag: 'GATE_PARAMS', text: 'Validating zero-knowledge state proof...', status: 'SAFE' },
        { tag: 'ENCLAVE_LOCK', text: 'Authorized execution signed by TPM Enclave', status: 'SAFE' },
        { tag: 'AGENT_AUTONOMY', text: 'Requesting SSH root access to /etc/sudoers...', status: 'WARNING' },
        { tag: 'FAILSAFE_INTERCEPT', text: 'SECURITY VIOLATION: Unauthorized syscall blocked!', status: 'BLOCKED' }
      ];

      const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
      
      setLogs((prev) => [
        { id: Date.now(), time: timestamp, ...event },
        ...prev.slice(0, 6)
      ]);

      if (event.status === 'BLOCKED') {
        setBlockedCount((c) => c + 1);
        setShieldedAmount((a) => a + Math.floor(Math.random() * 1200 + 400));
      }
    }, 3000);

    return () => clearInterval(streamInterval);
  }, [isPlaying]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleManualOverride = () => {
    playIntercept();
    setActiveAlert(false);
    if (onThreatTrigger) onThreatTrigger(true);
    setTimeout(() => {
      setActiveAlert(true);
      if (onThreatTrigger) onThreatTrigger(false);
    }, 3000);
  };

  const handleResetEngine = () => {
    playSuccess();
    setBlockedCount((prev) => prev + 1);
    setShieldedAmount((prev) => prev + 2500);
  };

  return (
    <section className="section section-inner max-w-6xl">
      
      {/* Container Window */}
      <div className="rounded-3xl glass-panel border border-[#1A1E1B] overflow-hidden">
        
        {/* Titlebar */}
        <div className="h-14 bg-[#070809] border-b border-[#1A1E1B] px-6 flex items-center justify-between gap-4 select-none">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#FF2E54]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-[#00FF66]"></div>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 truncate">
            <Terminal className="w-4 h-4 text-[#00FF66] shrink-0" />
            <span className="truncate">failsafe-daemon-v1.0.4 -- local-gate</span>
          </div>

          <div className="hidden sm:flex items-center gap-2.5 text-xs font-mono text-gray-400 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66]"></span>
            <span className="text-[#00FF66] font-semibold text-xs">KERNEL: ONLINE</span>
          </div>
        </div>

        {/* 3-PANE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1E1B]">
          
          {/* PANE A: Agent Stream */}
          <div className="lg:col-span-4 p-6 sm:p-7 bg-[#050607] flex flex-col justify-between font-mono text-xs overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#1A1E1B] mb-5">
                <div className="flex items-center gap-2.5 text-gray-200 font-bold text-xs truncate">
                  <Activity className="w-4 h-4 text-[#00FF66] shrink-0" />
                  <span className="truncate">PANE A // AGENT STREAM</span>
                </div>
                <button
                  onClick={() => { playClick(); setIsPlaying(!isPlaying); }}
                  className="p-1.5 px-3 rounded-xl bg-[#090A0B] border border-[#1A1E1B] hover:border-[#00FF66] text-gray-400 hover:text-[#00FF66] transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-[#00FF66]" />
                      <span className="text-[10px] font-bold">PAUSE</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#00FF66]" />
                      <span className="text-[10px] font-bold">LIVE</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className={`p-3 rounded-xl border text-[11px] leading-relaxed transition-all ${
                      log.status === 'BLOCKED'
                        ? 'bg-[#FF2E54]/10 border-[#FF2E54]/40 text-red-200'
                        : log.status === 'WARNING'
                        ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200'
                        : 'bg-[#090A0B] border-[#1A1E1B] text-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1 font-semibold gap-2">
                      <span>[{log.time}]</span>
                      <span className={`truncate ${log.status === 'BLOCKED' ? 'text-[#FF2E54]' : log.status === 'WARNING' ? 'text-yellow-400' : 'text-[#00FF66]'}`}>
                        {log.tag}
                      </span>
                    </div>
                    <div className="break-words">{log.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-[#1A1E1B] text-[10px] text-gray-400 flex justify-between items-center">
              <span>SOCKET: CONNECTED</span>
              <span className="text-[#00FF66]">LATENCY: 0.02ms</span>
            </div>
          </div>

          {/* PANE B: FAILSAFE Hard Gate */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#030405] relative flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#1A1E1B] mb-6 font-mono text-xs">
                <div className="flex items-center gap-2.5 font-bold text-gray-200 truncate">
                  <ShieldCheck className="w-4 h-4 text-[#00FF66] shrink-0" />
                  <span className="truncate">PANE B // HARD GATE</span>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30 shrink-0 whitespace-nowrap">
                  C++ KERNEL NODE
                </span>
              </div>

              {/* INTERCEPT ALERT CARD */}
              {activeAlert ? (
                <div className="w-full glass-panel-red rounded-2xl p-5 sm:p-6 border-l-4 border-l-[#FF2E54] flex flex-col justify-between gap-4 my-2">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#FF2E54]/20 border border-[#FF2E54]/40 shrink-0">
                      <ShieldAlert className="w-6 h-6 text-[#FF2E54]" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono font-bold text-xs text-[#FF2E54]">
                          🚨 FAILSAFE INTERCEPT ACTIVE
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-[#FF2E54]/30 text-white font-mono">
                          HALTED
                        </span>
                      </div>
                      <p className="font-mono text-xs text-gray-200 font-semibold leading-relaxed pt-1">
                        Session Limit ($10,000) Exceeded by Requested Action ($12,500). AGENT HALTED.
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-4 border-t border-[#FF2E54]/30 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                    <button
                      onClick={handleManualOverride}
                      className="px-4 py-2 rounded-xl bg-[#FF2E54]/20 hover:bg-[#FF2E54]/40 border border-[#FF2E54]/50 text-red-200 text-[11px] font-semibold transition-colors whitespace-nowrap"
                    >
                      TEST OVERRIDE
                    </button>
                    <button
                      onClick={handleResetEngine}
                      className="px-4 py-2 rounded-xl bg-[#00FF66] hover:bg-[#33FF85] text-black font-bold text-[11px] transition-colors whitespace-nowrap"
                    >
                      CLEAR HALT
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full glass-panel rounded-2xl p-8 border border-[#00FF66]/40 text-center my-6">
                  <ShieldCheck className="w-12 h-12 text-[#00FF66] mx-auto mb-3" />
                  <h4 className="font-mono font-bold text-sm text-white">HARD GATE ACTIVE & ENFORCING</h4>
                  <p className="font-mono text-xs text-gray-400 mt-1">All agent calls routed through local sandbox.</p>
                </div>
              )}
            </div>

            <div className="pt-4 mt-6 border-t border-[#1A1E1B] grid grid-cols-2 gap-4 font-mono text-[11px]">
              <div className="p-3 rounded-xl bg-[#090A0B] border border-[#1A1E1B]">
                <span className="text-gray-400 block text-[10px]">RULESET</span>
                <span className="text-white font-semibold truncate block">STRICT_FINANCIAL_V2</span>
              </div>
              <div className="p-3 rounded-xl bg-[#090A0B] border border-[#1A1E1B]">
                <span className="text-gray-400 block text-[10px]">ENCLAVE</span>
                <span className="text-[#00FF66] font-semibold truncate block">TPM HARDWARE OK</span>
              </div>
            </div>

          </div>

          {/* PANE C: Sovereign Telemetry */}
          <div className="lg:col-span-3 p-6 sm:p-7 bg-[#050607] flex flex-col justify-between font-mono text-xs overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#1A1E1B] mb-5">
                <div className="flex items-center gap-2.5 font-bold text-gray-200 truncate">
                  <Cpu className="w-4 h-4 text-[#00FF66] shrink-0" />
                  <span className="truncate">PANE C // TELEMETRY</span>
                </div>
                <span className="text-[10px] text-gray-400 shrink-0">LIVE</span>
              </div>

              <div className="space-y-4">
                {/* Metric 1: Total Value Shielded */}
                <div className="p-3.5 rounded-xl bg-[#090A0B] border border-[#1A1E1B]">
                  <span className="text-[10px] text-gray-400 uppercase block mb-1">
                    Value Shielded
                  </span>
                  <div className="text-base sm:text-lg font-extrabold text-[#00FF66] truncate">
                    ${shieldedAmount.toLocaleString()}
                  </div>
                </div>

                {/* Metric 2: Rogue Actions Blocked */}
                <div className="p-3.5 rounded-xl bg-[#090A0B] border border-[#1A1E1B]">
                  <span className="text-[10px] text-gray-400 uppercase block mb-1">
                    Actions Blocked
                  </span>
                  <div className="text-base sm:text-lg font-extrabold text-[#FF2E54] truncate">
                    {blockedCount.toLocaleString()}
                  </div>
                </div>

                {/* Metric 3: Hardware Gate */}
                <div className="p-3.5 rounded-xl bg-[#090A0B] border border-[#1A1E1B]">
                  <span className="text-[10px] text-gray-400 uppercase block mb-1">
                    Hardware Status
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white mt-0.5 truncate">
                    <Lock className="w-3.5 h-3.5 text-[#00FF66] shrink-0" />
                    <span className="truncate">TPM / YubiKey Locked 🔒</span>
                  </div>
                </div>

                {/* Metric 4: Session Expiry */}
                <div className="p-3.5 rounded-xl bg-[#090A0B] border border-[#1A1E1B]">
                  <span className="text-[10px] text-gray-400 uppercase block mb-1">
                    Session Countdown
                  </span>
                  <div className="text-sm font-bold text-gray-200 mt-0.5">
                    {formatCountdown(countdown)}
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-[#1A1E1B] text-[10px] text-gray-400 flex justify-between">
              <span>LATENCY: 0.02ms</span>
              <span>UPTIME: 99.99%</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
