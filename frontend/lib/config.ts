/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 *
 * Customize your landing page by editing the values below.
 * All text, links, and settings are centralized here for easy editing.
 */

export const siteConfig = {
  name: "RobinSafe",
  tagline: "Building Firewall for AI Agents",
  description:
    "Protect your AI agents and digital assets with RobinSafe. Advanced firewall protection for the age of autonomous AI agents on Virtuals Protocol.",
  url: "https://robinsafe.io",
  twitter: "@RobinSafe_io",

  nav: {
    cta: {
      text: "Get Started",
      href: "#",
    },
    signIn: {
      text: "Sign in",
      href: "#",
    },
  },
} as const;

export const heroConfig = {
  headline: {
    line1: "Firewall for",
    line2: "AI Agents",
  },
  description:
    "Real security doesn't live in the prompt, it lives at the execution layer. Protect your AI agents from malicious inputs and keep your funds safe.",
  cta: {
    primary: {
      text: "Get Protected",
      href: "#",
    },
    secondary: {
      text: "Learn More",
      href: "#",
    },
  },
} as const;

export const trustedByConfig = {
  title: "Trusted by industry leaders",
} as const;

export const featureCardsConfig = {
  title: "The new standard",
  subtitle: "for AI agent security",
} as const;

export const featureHighlightConfig = {
  features: [
    {
      icon: "trending-up",
      text: "Real-time analytics and insights for smarter decisions.",
    },
    {
      icon: "message-square",
      text: "Ask questions about your finances in plain English.",
    },
  ],
} as const;

export const principlesConfig = {
  title: "Built on principles that matter",
} as const;

export const statsConfig = {
  stats: [
    { value: 5, suffix: "B+", prefix: "$", label: "Processed annually" },
    { value: 99.9, suffix: "%", label: "Uptime guarantee" },
    { value: 150, suffix: "+", label: "Countries supported" },
    { value: 2, suffix: "M+", label: "Active users" },
  ],
} as const;

export const testimonialsConfig = {
  title: "Trusted by Finance Leaders",
} as const;

export const pricingConfig = {
  title: "Plans that grow with you",
  trustBadge: "Trusted by 50,000+ businesses",
} as const;

export const faqConfig = {
  title: "Frequently Asked Questions",
  contact: {
    text: "Still have questions?",
    cta: {
      text: "Contact Support",
      href: "mailto:support@robinsafe.io",
    },
  },
} as const;

export const blogConfig = {
  title: "Latest from our blog",
  description: "Insights, guides, and news to help you make smarter financial decisions.",
  cta: {
    text: "View all articles",
    href: "#",
  },
} as const;

export const finalCtaConfig = {
  headline: "Ready to protect your AI agents?",
  description: "Join the Virtuals Protocol ecosystem with RobinSafe's advanced firewall protection for autonomous agents.",
  cta: {
    text: "Get Started Free",
    href: "#",
  },
} as const;

export const footerConfig = {
  description:
    "Building firewall for AI agents on Virtuals Protocol. Execution-layer security that keeps your autonomous agents safe from malicious inputs.",
  cta: {
    text: "Deploy Firewall",
    href: "#",
  },
  links: {
    product: [
      { label: "Personal", href: "#" },
      { label: "Business", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "API", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  contact: {
    location: "San Francisco",
    address: "548 Market St, Suite 95000\nSan Francisco, CA 94104",
    hours: "Mon-Fri 9:00 am - 6:00 pm (PST)",
    email: "hello@robinsafe.io",
  },
  copyright: `© ${new Date().getFullYear()} RobinSafe. All rights reserved.`,
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
  defaultTheme: "system" as "light" | "dark" | "system",
  enableSystemTheme: true,
} as const;
