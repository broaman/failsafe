import React, { useState } from 'react';
import { X, Zap, Copy, Check, ExternalLink, ShieldCheck, ArrowRight, Coins, RefreshCw } from 'lucide-react';
import { playClick, playHover, playSuccess } from '../utils/soundEngine';

export default function BuyTokenModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [payAmount, setPayAmount] = useState('1.0');
  const CONTRACT_ADDRESS = '0x7a39e81b4c910293d84f93012849204859d04f2a';

  if (!isOpen) return null;

  const handleCopyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const estimatedSafe = (parseFloat(payAmount) || 0) * 14250;

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

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/40 box-glow-green">
            <Zap className="w-6 h-6 text-[#00FF66]" />
          </div>
          <div>
            <h3 className="font-mono text-xl font-extrabold text-white">
              GET $SAFE TOKEN
            </h3>
            <span className="font-mono text-xs text-[#00FF66]">
              FAILSAFE PROTOCOL UTILITY TOKEN
            </span>
          </div>
        </div>

        {/* Contract Copy Box */}
        <div className="p-4 rounded-xl bg-[#0C0D0E] border border-[#1F2421] mb-6">
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block mb-1">
            OFFICIAL CONTRACT ADDRESS (ERC-20)
          </span>
          <div className="flex items-center justify-between bg-black/60 px-3 py-2 rounded-lg border border-[#1F2421]">
            <code className="font-mono text-xs text-[#00FF66] truncate mr-2">
              {CONTRACT_ADDRESS}
            </code>
            <button
              onClick={handleCopyContract}
              onMouseEnter={playHover}
              className="px-2.5 py-1 rounded bg-[#00FF66]/20 hover:bg-[#00FF66]/30 text-[#00FF66] font-mono text-[11px] font-bold transition-colors flex items-center space-x-1 shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>
          </div>
        </div>

        {/* Simulated DEX Swap Widget */}
        <div className="p-4 rounded-xl bg-[#050607] border border-[#1F2421] space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>SWAP ESTIMATOR</span>
            <span className="text-[#00FF66]">UNISWAP V3 POOL</span>
          </div>

          <div className="p-3 rounded-lg bg-[#0C0D0E] border border-[#1F2421] flex items-center justify-between">
            <input
              type="number"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
              className="bg-transparent font-mono text-lg font-bold text-white focus:outline-none w-2/3"
            />
            <span className="font-mono text-xs font-bold text-white bg-gray-800 px-3 py-1.5 rounded-lg">
              ETH
            </span>
          </div>

          <div className="flex justify-center my-1">
            <RefreshCw className="w-4 h-4 text-[#00FF66] animate-spin" />
          </div>

          <div className="p-3 rounded-lg bg-[#0C0D0E] border border-[#00FF66]/30 flex items-center justify-between">
            <div className="font-mono text-lg font-bold text-[#00FF66]">
              ≈ {estimatedSafe.toLocaleString()}
            </div>
            <span className="font-mono text-xs font-bold text-black bg-[#00FF66] px-3 py-1.5 rounded-lg">
              $SAFE
            </span>
          </div>
        </div>

        {/* Action Button */}
        <a
          href="https://uniswap.org"
          target="_blank"
          rel="noreferrer"
          onClick={playClick}
          className="w-full py-3.5 rounded-xl font-mono text-xs font-bold text-black bg-[#00FF66] hover:bg-[#33FF85] transition-all shadow-[0_0_25px_rgba(0,255,102,0.5)] flex items-center justify-center space-x-2"
        >
          <span>TRADE $SAFE ON UNISWAP</span>
          <ExternalLink className="w-4 h-4" />
        </a>

        {/* Security Audit Badges */}
        <div className="mt-6 pt-4 border-t border-[#1F2421] flex items-center justify-between text-[10px] font-mono text-gray-500">
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>AUDITED BY CERTIK</span>
          </span>
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>TRAIL OF BITS VERIFIED</span>
          </span>
        </div>

      </div>
    </div>
  );
}
