/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 *
 * Customize your landing page by editing the values below.
 * All text, links, and settings are centralized here for easy editing.
 */

export const siteConfig = {
  name: "FAILSAFE",
  tagline: "Sovereign Execution Firewall for Agentic AI",
  description:
    "Give your AI root access without giving up control. Hard-gated session security and hardware-tethered zero-trust firewall for autonomous AI agents.",
  url: "https://robinsafe.io",
  twitter: "@RobinSafe_io",
  token: "$SAFE",

  nav: {
    cta: {
      text: "Get $SAFE",
      href: "#",
    },
    signIn: {
      text: "Docs",
      href: "#",
    },
  },
} as const;

export const heroConfig = {
  headline: {
    line1: "Sovereign Execution",
    line2: "Firewall for Agentic AI",
  },
  badge: "FAILSAFE // $SAFE",
  description:
    "Give your AI root access without giving up control. Hard-gated session security and hardware-tethered zero-trust firewall.",
  subtext: "Real security doesn't live in the prompt — it lives at the execution layer.",
  cta: {
    primary: {
      text: "Buy $SAFE",
      href: "#",
    },
    secondary: {
      text: "Read Docs",
      href: "#",
    },
  },
} as const;

export const trustedByConfig = {
  title: "Integrated with leading AI infrastructure",
} as const;

export const featureCardsConfig = {
  title: "Hard-gated security",
  subtitle: "at the execution layer",
} as const;

export const featureHighlightConfig = {
  features: [
    {
      icon: "shield",
      text: "Session-locked security boundaries that can't be bypassed by prompt injection.",
    },
    {
      icon: "zap",
      text: "Hardware-tethered approvals with anti-hallucination fail-closed gates.",
    },
  ],
} as const;

export const principlesConfig = {
  title: "Zero-trust by design. Fail-closed by default.",
} as const;

export const statsConfig = {
  stats: [
    { value: 100, suffix: "%", label: "Fail-closed on breach" },
    { value: 0, suffix: "ms", label: "Prompt bypass tolerance" },
    { value: 99.9, suffix: "%", label: "Uptime SLA" },
    { value: 1, suffix: "st", label: "Execution-layer firewall" },
  ],
} as const;

export const testimonialsConfig = {
  title: "Trusted by AI Builders",
} as const;

export const pricingConfig = {
  title: "Secure your agents today",
  trustBadge: "Powered by $SAFE token on Virtuals Protocol",
} as const;

export const faqConfig = {
  title: "Frequently Asked Questions",
  contact: {
    text: "Still have questions?",
    cta: {
      text: "Join our community",
      href: "https://twitter.com/RobinSafe_io",
    },
  },
} as const;

export const blogConfig = {
  title: "From the FAILSAFE terminal",
  description: "Deep dives on agentic AI security, prompt injection attacks, and execution-layer defense.",
  cta: {
    text: "View all posts",
    href: "#",
  },
} as const;

export const finalCtaConfig = {
  headline: "Your AI shouldn't be one prompt away from draining your wallet.",
  description: "Deploy FAILSAFE. Hard-gate your agents. Sleep at night.",
  cta: {
    text: "Get $SAFE Now",
    href: "#",
  },
} as const;

export const footerConfig = {
  description:
    "FAILSAFE // Sovereign Execution Firewall for Agentic AI. Built on Virtuals Protocol. Powered by $SAFE.",
  cta: {
    text: "Deploy FAILSAFE",
    href: "#",
  },
  links: {
    product: [
      { label: "How It Works", href: "#" },
      { label: "Tokenomics", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "API Docs", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Twitter", href: "https://twitter.com/RobinSafe_io" },
      { label: "Contact", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  contact: {
    location: "On-chain",
    address: "Virtuals Protocol\nBase Network",
    hours: "24/7 — always on-chain",
    email: "hello@robinsafe.io",
  },
  copyright: `© ${new Date().getFullYear()} FAILSAFE. All rights reserved. $SAFE token is not financial advice.`,
} as const;

/**
 * ============================================================================
 * FEATURE FLAGS
 * ============================================================================
 *
 * Toggle features on/off without touching component code.
 */
export const features = {
  smoothScroll: true,
  darkMode: true,
  statsSection: true,
  blogSection: true,
  testimonialsSection: true,
} as const;

/**
 * ============================================================================
 * THEME CONFIGURATION
 * ============================================================================
 *
 * Colors are defined in globals.css using CSS custom properties.
 * This config controls which theme features are enabled.
 */
export const themeConfig = {
  defaultTheme: "dark" as "light" | "dark" | "system",
  enableSystemTheme: false,
} as const;
