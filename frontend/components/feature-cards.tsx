"use client";

import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

type FeatureCard = {
  title: string;
  description: string;
  href: string;
  visual: "comparison" | "chart" | "code";
};

const features: FeatureCard[] = [
  {
    title: "Send money globally. Instantly.",
    description:
      "Transfer funds to 160+ countries with the real exchange rate. No hidden fees, no waiting—your money arrives in seconds.",
    href: "#",
    visual: "comparison",
  },
  {
    title: "Earn more on your savings.",
    description:
      "Get up to 4.5% APY on your balance with no lock-in period. Your money works harder while staying instantly accessible.",
    href: "#",
    visual: "chart",
  },
  {
    title: "Build with our developer API.",
    description:
      "Access real-time payment data and automate your finances with our REST API. Full documentation and SDKs included.",
    href: "#",
    visual: "code",
  },
];

function ComparisonVisual(): ReactNode {
  const rows = [
    { name: "finaro", speed: "Instant", fees: "$0", highlight: true },
    { name: "Bank", speed: "3-5 days", fees: "$25-50", highlight: false },
    { name: "Wire", speed: "1-2 days", fees: "$15-35", highlight: false },
  ];

  return (
    <div className="w-full h-full flex items-end justify-center p-6">
      <div className="w-full max-w-xs">
        <div className="grid grid-cols-3 text-xs text-muted-foreground pb-2 border-b border-border">
          <div />
          <div className="text-center">Speed</div>
          <div className="text-center">Fees</div>
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease }}
            className={`grid grid-cols-3 py-3 text-sm ${i < rows.length - 1 ? "border-b border-border" : ""} ${row.highlight ? "" : "text-muted-foreground"}`}
          >
            <div className={row.highlight ? "flex items-center gap-2" : ""}>
              {row.highlight && <div className="w-4 h-4 rounded-full bg-foreground" />}
              <span className={row.highlight ? "text-foreground font-medium" : ""}>{row.name}</span>
            </div>
            <div className={`text-center ${row.highlight ? "text-accent" : ""}`}>{row.speed}</div>
            <div className={`text-center ${row.highlight ? "text-accent" : ""}`}>{row.fees}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ChartVisual(): ReactNode {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 sm:p-6">
      <div className="relative w-full max-w-xs">
        <div className="mb-3">
          <div className="text-xs text-muted-foreground">Current APY</div>
          <div className="text-xl sm:text-2xl font-semibold text-accent">4.50%</div>
        </div>
        <div className="flex items-end justify-between gap-2 h-24 sm:h-32">
          {[0.3, 0.45, 0.55, 0.5, 0.65, 0.7, 0.75, 0.85, 0.9, 1].map(
            (height, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-linear-to-t from-accent/80 to-accent/40 rounded-t origin-bottom"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                style={{ height: `${height * 100}%` }}
              />
            )
          )}
        </div>
        <div className="flex items-center justify-end gap-1 mt-3">
          <span className="text-xs text-muted-foreground">vs avg savings</span>
          <span className="text-xs text-accent">0.5%</span>
        </div>
      </div>
    </div>
  );
}

function CodeVisual(): ReactNode {
  const codeLines = [
    { text: "--data '{", style: "text-muted-foreground" },
    { text: "  'account-balance'", style: "text-accent" },
    { text: "  'portfolio-value'", style: "text-accent" },
    { text: "  'transaction-history'", style: "text-accent" },
    { text: "  'pending-transfers'", style: "text-accent" },
    { text: "  'card-details'", style: "text-accent" },
    { text: "  'exchange-rates'", style: "text-accent" },
    { text: "}'", style: "text-muted-foreground" },
  ];

  return (
    <div className="w-full h-full flex items-center justify-start p-6 overflow-hidden">
      <pre className="text-xs sm:text-sm font-mono leading-relaxed">
        <code>
          {codeLines.map((line, i) => (
            <motion.span
              key={i}
              className={`block ${line.style}`}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05, ease }}
            >
              {line.text}
            </motion.span>
          ))}
        </code>
      </pre>
    </div>
  );
}

function FeatureCard({ card, index }: { card: FeatureCard; index: number }): ReactNode {
  return (
    <motion.a
      href={card.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="group flex flex-col bg-muted/50 border border-border rounded-sm overflow-hidden hover:border-foreground/20 hover:shadow-lg transition-[border-color,box-shadow]"
    >
      <div className="relative h-56 sm:h-64 bg-background">
        {card.visual === "comparison" && <ComparisonVisual />}
        {card.visual === "chart" && <ChartVisual />}
        {card.visual === "code" && <CodeVisual />}
      </div>
      <div className="flex flex-col p-6">
        <h3 className="text-lg font-medium font-serif text-foreground">{card.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {card.description}
        </p>
        <div className="flex items-center gap-1 mt-4 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          Learn more
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}

export function FeatureCards(): ReactNode {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground"
          >
            The new standard
            <br />
            <span className="italic">for modern banking</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((card, index) => (
            <FeatureCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
