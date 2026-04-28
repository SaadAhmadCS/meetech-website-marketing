"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function App() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.98]);
  const reduce = Boolean(useReducedMotion());

  const services = [
    { num: "01", title: "Social Media Management", link: "/services/social-media-management" },
    { num: "02", title: "Branding + Logo", link: "/services/branding-logo" },
    { num: "03", title: "Performance Marketing", link: "/services/performance-marketing" },
    { num: "04", title: "AI Automations", link: "/services/ai-automations" },
    { num: "05", title: "SEO + AEO", link: "/services/seo-aeo" },
    { num: "06", title: "Email Marketing", link: "/services/email-marketing" },
  ];

  const brands = [
    "ACME Corp", "GlobalTech", "Innovate Inc", "Nexus", "Stellar", "Quantum", "Apex"
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-visible overflow-y-hidden bg-bg-page font-sans text-text-primary transition-colors duration-500 selection:bg-accent selection:text-text-inverse">
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Atmospheric Radial Glow */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-gradient-to-r from-[#905AFF] to-[#74EBF1] blur-[140px] rounded-full opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center"
      >
        <div className="max-w-6xl w-full flex flex-col items-center">
          
          {/* Trust Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="group mb-10 inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#905AFF]/50 transition-all shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#74EBF1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#74EBF1]"></span>
            </span>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted">
              Scaling Brands Globally
            </p>
          </motion.div>

          {/* Core Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8 text-text-primary"
          >
            We Make Your Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#905AFF] via-[#C448FF] to-[#74EBF1]">
              Impossible to Ignore
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg md:text-xl text-text-body mb-12 leading-relaxed font-light"
          >
            Data-driven marketing, bold design, and AI automation to dominate your market.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-12 text-center"
          >
            <div>
              <p className="text-3xl font-black text-white">50+</p>
              <p className="text-sm text-text-muted uppercase tracking-widest mt-1">Brands Scaled</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>
            <div>
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-sm text-text-muted uppercase tracking-widest mt-1">ROI Focus</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>
            <div>
              <p className="text-3xl font-black text-white">6</p>
              <p className="text-sm text-text-muted uppercase tracking-widest mt-1">Core Services</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#905AFF] to-[#C448FF] text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_rgba(144,90,255,0.5)] active:scale-95 inline-flex items-center justify-center"
            >
              <span className="relative flex items-center gap-2 text-lg">
                Let's Grow Your Brand <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/services"
              className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all active:scale-95 inline-flex items-center justify-center backdrop-blur-sm text-lg"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Proof Marquee */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden border-y border-white/5 bg-black/40 py-10 backdrop-blur-md">
        <div className="flex min-w-max gap-16 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="text-2xl font-bold text-white/30 tracking-wider">
              {brand}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#030014] via-[#030014]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#030014] via-[#030014]/70 to-transparent" />
      </section>

      {/* Services Preview Grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6">
            Our Arsenal
          </h2>
          <p className="text-xl text-text-body max-w-2xl mx-auto">
            Everything you need to capture attention and convert it into revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.num} href={service.link} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-bg-surface p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#905AFF]/50">
              <div className="absolute inset-0 bg-gradient-to-br from-[#905AFF] to-[#C448FF] opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <span className="text-5xl font-black text-white/10 transition-colors duration-500 group-hover:text-[#905AFF]/30 mb-12">
                  {service.num}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#74EBF1] transition-colors">{service.title}</h3>
                  <div className="inline-flex items-center gap-2 text-text-muted group-hover:text-white transition-colors font-medium">
                    Explore <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-32">
        <div className="relative rounded-[3rem] border border-white/10 bg-black/40 backdrop-blur-xl p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-[#905AFF] blur-[150px] opacity-20 pointer-events-none"></div>
          
          <h2 className="relative z-10 text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Dominate?
          </h2>
          <p className="relative z-10 text-xl text-text-body max-w-xl mx-auto mb-10">
            Stop blending in. Let's build a marketing engine that drives real growth.
          </p>
          <Link
            href="/contact"
            className="relative z-10 group px-10 py-5 bg-gradient-to-r from-[#905AFF] to-[#C448FF] text-white font-bold rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center shadow-[0_0_40px_-10px_rgba(144,90,255,0.6)]"
          >
            <span className="flex items-center gap-2 text-lg">
              Let's Grow Your Brand <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* Define Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </div>
  );
}
