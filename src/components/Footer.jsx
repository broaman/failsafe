import React, { useState } from 'react';
import { Shield, Copy, Check, Send, FileText } from 'lucide-react';
import { playClick, playHover, playSuccess } from '../utils/soundEngine';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const CONTRACT_ADDRESS = '0x7a39e81b4c910293d84f93012849204859d04f2a';

  const handleCopyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      href: 'https://twitter.com',
      label: 'Twitter / X',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      href: 'https://telegram.org',
      label: 'Telegram',
      icon: <Send className="w-4 h-4" />,
    },
    {
      href: 'https://github.com',
      label: 'GitHub',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      href: '#docs',
      label: 'Documentation',
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="relative z-10 border-t border-[#1F2421] mt-8 md:mt-12">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-20 text-center flex flex-col items-center gap-10">

        {/* Brand */}
        <div
          className="flex flex-col items-center gap-4 cursor-pointer group"
          onClick={() => { playClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-black border border-[#00FF66]/40 shadow-[0_0_15px_rgba(0,255,102,0.15)]">
            <Shield className="w-5 h-5 text-[#00FF66]" />
          </div>
          <div>
            <div className="font-mono font-extrabold text-lg tracking-wider text-white">
              FAILSAFE <span className="text-[#00FF66] font-normal text-sm">// RUNTIME</span>
            </div>
            <p className="font-sans text-sm text-gray-400 mt-2 max-w-sm leading-relaxed">
              Hard-gated sovereign execution firewall for agentic AI.
            </p>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('#') ? undefined : '_blank'}
              rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
              onMouseEnter={playHover}
              title={link.label}
              className="p-2.5 rounded-xl text-gray-500 hover:text-[#00FF66] hover:bg-[#00FF66]/5 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Compact contract */}
        <button
          onClick={handleCopyContract}
          onMouseEnter={playHover}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1F2421] hover:border-[#00FF66]/30 text-gray-400 hover:text-[#00FF66] font-mono text-[11px] transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : '0x7a39...4f2a'}</span>
        </button>

        {/* Legal */}
        <div className="pt-6 border-t border-[#1F2421] w-full font-mono text-[11px] text-gray-500 space-y-3">
          <p>© 2026 FAILSAFE Protocol. Zero-Trust Security.</p>
          <div className="flex items-center justify-center gap-5">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#audit" className="hover:text-[#00FF66] transition-colors">Audits</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
