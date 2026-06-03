'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Magnetic from '@/components/Magnetic';

interface Tier {
  name: string;
  desc: string;
  price: string;
  period: string;
  timeline: string;
  featured?: boolean;
  deliverables: string[];
  ctaText: string;
}

interface ServiceTab {
  id: string;
  name: string;
  title: string;
  description: string;
  tiers: Tier[];
}

const servicesData: ServiceTab[] = [
  {
    id: 'smm',
    name: 'Social Media',
    title: 'Social Media Marketing',
    description: 'Build, grow, and engage your audience across every platform',
    tiers: [
      {
        name: 'Starter',
        desc: 'For new businesses building their first social presence',
        price: '$499',
        period: '/ month',
        timeline: 'Onboarding in 5 days · Monthly reporting',
        deliverables: [
          '2 platforms managed (Facebook + Instagram)',
          '12 posts / month (3 per week)',
          'Basic graphic design & caption writing',
          'Community management (5 days/week)',
          '1 monthly performance report'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Growth',
        desc: 'For brands ready to scale reach and drive real engagement',
        price: '$999',
        period: '/ month',
        timeline: 'Onboarding in 3 days · Bi-weekly reporting',
        featured: true,
        deliverables: [
          '4 platforms (FB, IG, LinkedIn, TikTok)',
          '20 posts / month + 8 stories',
          'Custom branded graphics + short-form video edits',
          'Influencer outreach (2 micro-collabs/month)',
          'Daily community management',
          'Bi-weekly analytics + competitor analysis'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Authority',
        desc: 'Full-scale social domination with dedicated strategy',
        price: '$1,999',
        period: '/ month',
        timeline: 'Onboarding in 2 days · Weekly reporting',
        deliverables: [
          '6 platforms + YouTube Shorts',
          '35 posts + 15 stories + 4 reels / month',
          'Professional video production (2 videos/month)',
          'Paid social ad management (up to $3k ad spend)',
          'Dedicated account manager + strategy calls',
          'Weekly KPI dashboard + monthly deep-dive report'
        ],
        ctaText: 'Get started'
      }
    ]
  },
  {
    id: 'seo',
    name: 'SEO',
    title: 'Search Engine Optimization',
    description: 'Rank higher, get found, and drive organic traffic that converts',
    tiers: [
      {
        name: 'Foundation',
        desc: 'Lay the groundwork for long-term organic growth',
        price: '$599',
        period: '/ month',
        timeline: 'Audit in 7 days · Visible results in 60–90 days',
        deliverables: [
          'Technical SEO audit + fix implementation',
          'Keyword research (up to 30 keywords)',
          'On-page optimization (up to 10 pages)',
          '2 SEO blog posts / month',
          'Monthly rank-tracking report'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Accelerate',
        desc: 'Aggressive growth targeting competitive keywords',
        price: '$1,299',
        period: '/ month',
        timeline: 'Audit in 5 days · Rankings improve in 45–60 days',
        featured: true,
        deliverables: [
          'Full technical SEO + Core Web Vitals optimization',
          'Keyword research (up to 80 keywords)',
          'On-page optimization (up to 25 pages)',
          '4 SEO blog posts + internal linking strategy',
          'Link building (5 quality backlinks/month)',
          'Bi-weekly rank + traffic report'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Dominate',
        desc: 'End-to-end SEO authority for competitive industries',
        price: '$2,499',
        period: '/ month',
        timeline: 'Audit in 3 days · Measurable results in 30–45 days',
        deliverables: [
          'Advanced technical SEO + schema markup',
          'Unlimited keyword tracking & mapping',
          'Full-site on-page optimization',
          '8 long-form SEO articles / month',
          'Link building (15 DA50+ backlinks/month)',
          'Weekly reporting + dedicated SEO strategist'
        ],
        ctaText: 'Get started'
      }
    ]
  },
  {
    id: 'web',
    name: 'Web Dev',
    title: 'Web Development',
    description: 'High-performance websites and web apps built to convert',
    tiers: [
      {
        name: 'Launch',
        desc: 'Clean, fast website for businesses getting online',
        price: '$1,500',
        period: 'one-time',
        timeline: 'Delivered in 2–3 weeks · 30-day post-launch support',
        deliverables: [
          'Up to 5-page responsive website',
          'CMS integration (WordPress / Webflow)',
          'Basic on-page SEO setup',
          'Contact form + Google Maps integration',
          'Mobile-optimized & speed-optimized'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Pro',
        desc: 'Custom-designed site built for leads and conversions',
        price: '$3,500',
        period: 'one-time',
        timeline: 'Delivered in 4–5 weeks · 60-day support',
        featured: true,
        deliverables: [
          'Up to 12 pages, custom UI/UX design',
          'Next.js / React or advanced Webflow build',
          'Full SEO optimization + sitemap + schema',
          'Lead capture forms + CRM integration',
          'GA4 + Google Search Console setup',
          'PageSpeed score 90+ guaranteed'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Enterprise',
        desc: 'Complex web apps & e-commerce for scaling businesses',
        price: '$8,000+',
        period: 'one-time',
        timeline: 'Delivered in 8–12 weeks · 90-day support',
        deliverables: [
          'Unlimited pages + custom web app features',
          'E-commerce (Shopify / custom) or SaaS build',
          'API integrations, payment gateway, user auth',
          'Dedicated dev team + project manager',
          'Full QA testing + staging environment',
          'Ongoing maintenance retainer available'
        ],
        ctaText: 'Get started'
      }
    ]
  },
  {
    id: 'ppc',
    name: 'PPC',
    title: 'Pay-Per-Click Advertising',
    description: 'ROI-driven ad campaigns across Google, Meta, and beyond',
    tiers: [
      {
        name: 'Spark',
        desc: 'Targeted ads for small budgets with maximum efficiency',
        price: '$499',
        period: '/ month + ad spend',
        timeline: 'Campaign live in 5 days · Monthly optimization',
        deliverables: [
          '1 ad platform (Google or Meta)',
          'Up to 2 campaigns + 6 ad creatives',
          'Keyword / audience research & targeting',
          'Monthly bid optimization',
          'Monthly performance report'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Scale',
        desc: 'Multi-platform campaigns built to lower CPA and raise ROAS',
        price: '$1,199',
        period: '/ month + ad spend',
        timeline: 'Campaign live in 3 days · Bi-weekly optimization',
        featured: true,
        deliverables: [
          '2 platforms (Google + Meta)',
          'Up to 5 campaigns + 15 ad creatives',
          'A/B ad copy + creative testing',
          'Conversion tracking + landing page review',
          'Retargeting campaign setup',
          'Bi-weekly report + strategy call'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Maximize',
        desc: 'Full-funnel paid media management for serious growth',
        price: '$2,499',
        period: '/ month + ad spend',
        timeline: 'Campaign live in 2 days · Weekly optimization',
        deliverables: [
          '4 platforms (Google, Meta, LinkedIn, YouTube)',
          'Unlimited campaigns + 30+ creatives/month',
          'Full-funnel strategy (awareness → conversion)',
          'Dynamic retargeting + lookalike audiences',
          'Custom landing pages (up to 3)',
          'Weekly live dashboard + dedicated PPC manager'
        ],
        ctaText: 'Get started'
      }
    ]
  },
  {
    id: 'gbp',
    name: 'GBP',
    title: 'Google Business Profile',
    description: 'Own the local pack and turn nearby searches into real customers',
    tiers: [
      {
        name: 'Local Presence',
        desc: 'Get your GBP set up correctly and start showing up',
        price: '$299',
        period: '/ month',
        timeline: 'Profile live in 7 days · Results in 30–60 days',
        deliverables: [
          'Full GBP profile setup & verification',
          'Category, services & attribute optimization',
          '4 Google Posts / month',
          'Review response management',
          'Monthly GBP insights report'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Local Authority',
        desc: 'Rank in the local 3-pack and drive consistent foot traffic',
        price: '$599',
        period: '/ month',
        timeline: 'Optimized in 5 days · 3-pack results in 45–60 days',
        featured: true,
        deliverables: [
          'Advanced GBP optimization + Q&A management',
          '8 keyword-optimized Google Posts / month',
          'Photo & video uploads (12 assets/month)',
          'Active review generation campaign',
          'Citation building (10 local directories)',
          'Bi-weekly ranking + visibility report'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Local Domination',
        desc: 'Multi-location or hyper-competitive market dominance',
        price: '$1,199',
        period: '/ month',
        timeline: 'Optimized in 3 days · Dominant results in 30–45 days',
        deliverables: [
          'Up to 3 GBP locations managed',
          '16 posts + weekly Q&A + product catalog updates',
          'Geo-targeted keyword strategy',
          '25-citation NAP consistency audit',
          'Competitor gap analysis',
          'Weekly reporting + monthly strategy session'
        ],
        ctaText: 'Get started'
      }
    ]
  },
  {
    id: 'brand',
    name: 'Branding',
    title: 'Branding Identity & Strategy',
    description: "Build an identity that's memorable, consistent, and powerful",
    tiers: [
      {
        name: 'Essentials',
        desc: 'Core brand identity for startups and new businesses',
        price: '$899',
        period: 'one-time',
        timeline: 'Delivered in 10–14 days · 2 revision rounds',
        deliverables: [
          'Logo design (3 concepts → 1 final)',
          'Color palette + typography selection',
          'Business card design',
          'Brand guidelines (1-page PDF)',
          'Source files (AI, PNG, SVG)'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Identity',
        desc: 'Complete brand system for businesses ready to stand out',
        price: '$2,200',
        period: 'one-time',
        timeline: 'Delivered in 3–4 weeks · 4 revision rounds',
        featured: true,
        deliverables: [
          'Logo suite (primary, secondary, icon mark)',
          'Full color system + typography hierarchy',
          'Stationery set (card, letterhead, envelope)',
          'Social media profile + cover templates',
          'Brand guidelines PDF (10 pages)',
          'Brand voice & messaging framework'
        ],
        ctaText: 'Get started'
      },
      {
        name: 'Brand System',
        desc: 'Full strategic brand overhaul with premium execution',
        price: '$4,500',
        period: 'one-time',
        timeline: 'Delivered in 6–8 weeks · Unlimited revisions',
        deliverables: [
          'Brand strategy + positioning workshop',
          'Complete logo ecosystem + icon library',
          'Packaging design + signage templates',
          'Pitch deck + presentation template',
          '30-page brand book + digital asset library',
          'Dedicated brand strategist + designer'
        ],
        ctaText: 'Get started'
      }
    ]
  }
];

function PricingCard({ tier }: { tier: Tier }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card rounded-[2.5rem] p-8 flex flex-col gap-6 overflow-hidden relative group backdrop-blur-md border transition-all duration-500 shadow-2xl ${
        tier.featured
          ? 'border-white/20 bg-zinc-900/40'
          : 'border-white/[0.04] bg-zinc-950/20'
      }`}
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 blur-3xl rounded-[2.5rem]"
        style={{
          background: `radial-gradient(200px circle at var(--mouse-x, 150px) var(--mouse-y, 150px), rgba(100, 206, 251, 0.12), transparent 100%)`
        }}
      />

      <div className="flex flex-col gap-3">
        {tier.featured && (
          <div className="self-start text-[10px] font-bold tracking-widest text-electric-blue uppercase bg-electric-blue/10 px-3 py-1 rounded-full border border-electric-blue/20">
            Most popular
          </div>
        )}
        <h3 className="font-display font-black text-2xl text-white tracking-wide uppercase">
          {tier.name}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-light">
          {tier.desc}
        </p>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-display font-black text-4xl text-white tracking-tight">
          {tier.price}
        </span>
        <span className="text-xs text-zinc-500 font-mono tracking-wide uppercase">
          {tier.period}
        </span>
      </div>

      <div className="flex items-center gap-3 text-xs text-zinc-400 bg-white/[0.02] border border-white/[0.04] rounded-2xl p-4 font-mono uppercase tracking-wider">
        <Clock className="w-4 h-4 text-electric-blue shrink-0" />
        <span>{tier.timeline}</span>
      </div>

      <div className="w-full h-[1px] bg-white/[0.08]" />

      <div className="flex flex-col gap-4">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
          Deliverables
        </span>
        <ul className="flex flex-col gap-3">
          {tier.deliverables.map((del, dIdx) => (
            <li key={dIdx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed font-light">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{del}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <Magnetic strength={0.2}>
          {tier.featured ? (
            <button className="w-full py-4 text-xs font-mono uppercase tracking-widest font-bold btn-liquid-glass-featured">
              {tier.ctaText}
            </button>
          ) : (
            <button className="w-full py-4 text-xs font-mono uppercase tracking-widest font-bold btn-liquid-glass">
              {tier.ctaText}
            </button>
          )}
        </Magnetic>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('smm');
  const currentService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full flex flex-col relative z-20 pt-36 pb-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto">
        {/* Background ambient noise glow to separate sections */}
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-electric-blue/3 blur-[150px] pointer-events-none -z-10 animate-pulse-slow" />

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-electric-blue uppercase">
            TRANSPARENT TIERING
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl tracking-tight leading-[0.95] text-white uppercase">
            SERVICE <br className="md:hidden" />
            <span className="bg-gradient-to-r from-electric-blue via-white to-cyber-violet bg-clip-text text-transparent">PACKAGES.</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed">
            Transparent pricing across every service we offer. Choose the tier that fits your goals.
          </p>
        </div>

        {/* Tabs navigation */}
        <div className="flex justify-center mb-16 px-4">
          <div className="flex gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md max-w-full overflow-x-auto no-scrollbar scrollbar-none">
            {servicesData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors duration-300 shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-black font-bold'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="activeTabBackplate"
                    className="absolute inset-0 bg-white rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Section Content */}
        <div className="w-full">
          <div className="flex flex-col gap-4 text-left max-w-xl mb-10">
            <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wide">
              {currentService.title}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              {currentService.description}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentService.tiers.map((tier, idx) => (
                <PricingCard key={idx} tier={tier} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </>
  );
}
