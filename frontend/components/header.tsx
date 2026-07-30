"use client";

import { siteConfig } from "@/lib/config";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type NavItem = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  items?: { label: string; description: string }[];
  promo?: { title: string; description: string; href: string };
};

const navLinks: NavItem[] = [
  {
    label: "Product",
    hasDropdown: true,
    items: [
      { label: "Execution Firewall", description: "Hard-gated session security at the execution layer" },
      { label: "Zero-Trust Gates", description: "Anti-hallucination fail-closed enforcement" },
      { label: "Session Locks", description: "Hardware-tethered approval flows" },
      { label: "Agent Monitor", description: "Real-time agent threat detection" },
    ],
    promo: {
      title: "Deploy FAILSAFE",
      description:
        "Protect your AI agents from prompt injection and wallet-draining attacks.",
      href: "#",
    },
  },
  {
    label: "$SAFE Token",
    hasDropdown: true,
    items: [
      { label: "Tokenomics", description: "Token distribution and vesting" },
      { label: "Utility", description: "How $SAFE powers the protocol" },
      { label: "Staking", description: "Earn rewards for securing agents" },
      { label: "Roadmap", description: "What's coming to FAILSAFE" },
    ],
    promo: {
      title: "Buy $SAFE",
      description: "Powered by Virtuals Protocol on Base Network.",
      href: "#",
    },
  },
  {
    label: "Docs",
    href: "#",
  },
  {
    label: "Community",
    hasDropdown: true,
    items: [
      { label: "Twitter / X", description: "Follow @RobinSafe_io for updates" },
      { label: "About", description: "Our mission and story" },
      { label: "Blog", description: "Security research and deep dives" },
      { label: "Contact", description: "Get in touch with the team" },
    ],
    promo: {
      title: "Join the movement",
      description: "Building the sovereign execution layer for agentic AI.",
      href: "https://twitter.com/RobinSafe_io",
    },
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

function HamburgerIcon({
  isOpen,
  color = "white",
}: {
  isOpen: boolean;
  color?: string;
}): ReactNode {
  return (
    <div className="w-6 h-4 relative flex flex-col justify-between cursor-pointer">
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full"
        style={{ backgroundColor: color }}
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease }}
      />
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full"
        style={{ backgroundColor: color }}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full"
        style={{ backgroundColor: color }}
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease }}
      />
    </div>
  );
}

function DesktopDropdown({
  label,
  items,
  promo,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  items: { label: string; description: string }[];
  promo: { title: string; description: string; href: string } | undefined;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}): ReactNode {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  useLayoutEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom,
        left: rect.left + rect.width / 2,
      });
    } else if (!isOpen) {
      setPosition(null);
    }
  }, [isOpen]);

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        ref={buttonRef}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease }}
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </motion.div>
      </button>
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && position && (
              <div
                className="fixed pt-2 z-2000"
                style={{
                  top: position.top,
                  left: position.left,
                  transform: "translateX(-50%)",
                }}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease }}
                  className="flex items-stretch bg-background border border-border rounded-2xl shadow-lg overflow-hidden p-2 gap-2"
                >
                  <div className="min-w-56">
                    {items.map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        className="block px-4 py-4 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div className="text-sm font-medium text-foreground">
                          {item.label}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </div>
                      </a>
                    ))}
                  </div>
                  {promo && (
                    <a
                      href={promo.href}
                      className="group flex flex-col w-56 bg-muted text-foreground rounded-xl overflow-hidden"
                    >
                      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full border border-foreground/10" />
                          <div className="absolute w-28 h-28 rounded-full border border-foreground/15" />
                          <div className="absolute w-16 h-16 rounded-full border border-foreground/20" />
                        </div>
                      </div>
                      <div className="flex flex-col p-4 pt-2">
                        <h3 className="text-sm font-semibold">{promo.title}</h3>
                        <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
                          {promo.description}
                        </p>
                        <div className="flex justify-start mt-3">
                          <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-background/10 transition-colors">
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </a>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}

function MobileExpandable({
  label,
  items,
  isExpanded,
  onToggle,
  onClose,
}: {
  label: string;
  items: { label: string; description: string }[];
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}): ReactNode {
  return (
    <div className="border-b border-foreground/10">
      <button
        className="flex items-center justify-between py-4 w-full text-base font-medium text-foreground"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        {label}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown
            className="w-5 h-5 text-muted-foreground"
            aria-hidden="true"
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-2 space-y-1">
              {items.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block py-2 text-sm text-foreground/80 hover:text-foreground"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header(): ReactNode {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  const handleMenuOpen = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(label);
  };

  const handleMenuClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-25 z-1001 pointer-events-none"
        style={{
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          maskImage: "linear-gradient(black 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(black 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <header className="hidden lg:block fixed top-0 left-0 right-0 z-1003 mix-blend-exclusion">
        <div className="mx-auto flex h-20 w-full items-center justify-between px-6 sm:px-8">
          <motion.a
            href="#"
            className="flex items-center gap-2"
            aria-label="Home"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <Image
              src="/logo.jpg"
              alt="RobinSafe Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-semibold text-white">{siteConfig.name}</span>
          </motion.a>

          <motion.nav
            className="flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            aria-label="Main navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            {navLinks.map((link) =>
              link.hasDropdown && link.items ? (
                <DesktopDropdown
                  key={link.label}
                  label={link.label}
                  items={link.items}
                  promo={link.promo}
                  isOpen={activeMenu === link.label}
                  onOpen={() => handleMenuOpen(link.label)}
                  onClose={handleMenuClose}
                />
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold tracking-tight text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </motion.nav>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
          >
            <a
              href="#"
              className="px-5 py-2.5 text-sm font-semibold tracking-widest text-black bg-accent rounded-full hover:bg-accent/90 transition-colors font-mono uppercase"
            >
              Buy $SAFE
            </a>
            <a
              href="#"
              className="px-5 py-2.5 text-sm font-semibold tracking-widest text-accent border border-accent/40 rounded-full hover:bg-accent/10 transition-colors font-mono uppercase"
            >
              Docs
            </a>
          </motion.div>
        </div>
      </header>

      <header className="lg:hidden fixed top-0 left-0 right-0 z-1003 mix-blend-exclusion">
        <div className="mx-auto flex h-16 w-full items-center justify-between px-6 sm:px-8">
          <motion.a
            href="#"
            className="flex items-center gap-2"
            aria-label="Home"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <Image
              src="/logo.jpg"
              alt="RobinSafe Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-semibold text-white">{siteConfig.name}</span>
          </motion.a>
          <motion.button
            className="p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <HamburgerIcon isOpen={false} color="white" />
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-0 left-0 right-0 z-1004 bg-background"
          >
            <div className="flex h-16 w-full items-center justify-between px-6 sm:px-8">
              <a
                href="#"
                className="flex items-center gap-2"
                aria-label="Home"
                onClick={closeMobileMenu}
              >
                <Image
                  src="/logo.jpg"
                  alt="RobinSafe Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-lg font-semibold text-foreground">
                  {siteConfig.name}
                </span>
              </a>
              <button
                className="p-2 -mr-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <HamburgerIcon isOpen={true} color="currentColor" />
              </button>
            </div>

            <nav
              className="px-6 py-4 overflow-y-auto max-h-[calc(100vh-4rem)]"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) =>
                link.hasDropdown && link.items ? (
                  <MobileExpandable
                    key={link.label}
                    label={link.label}
                    items={link.items}
                    isExpanded={mobileExpanded === link.label}
                    onToggle={() =>
                      setMobileExpanded(
                        mobileExpanded === link.label ? null : link.label
                      )
                    }
                    onClose={closeMobileMenu}
                  />
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-4 text-base font-medium text-foreground border-b border-border"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                )
              )}

              <div className="flex flex-col gap-3 pt-6">
                <a
                  href="#"
                  className="w-full py-3 text-center text-sm font-bold tracking-widest text-black bg-accent rounded-full hover:bg-accent/90 transition-colors font-mono uppercase"
                  onClick={closeMobileMenu}
                >
                  Buy $SAFE
                </a>
                <a
                  href="#"
                  className="w-full py-3 text-center text-sm font-bold tracking-widest text-accent border border-accent/40 rounded-full hover:bg-accent/10 transition-colors font-mono uppercase"
                  onClick={closeMobileMenu}
                >
                  Docs
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
