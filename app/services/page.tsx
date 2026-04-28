"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeuralBackground from "@/components/background/NeuralBackground";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";

export default function ServicesPage() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.98]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bg-page font-sans text-text-primary transition-colors duration-500 selection:bg-accent selection:text-text-inverse">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <NeuralBackground />
      <div className="pointer-events-none absolute -top-[15%] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#905AFF] to-[#74EBF1] opacity-20 blur-[140px]" />

      <motion.section
        style={{ opacity, scale }}
        className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center"
      >
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
          >
            Marketing Services That{" "}
            <span className="bg-gradient-to-r from-[#905AFF] via-[#C448FF] to-[#74EBF1] bg-clip-text text-transparent">
              Drive Results
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-text-body md:text-xl"
          >
            From brand strategy to performance campaigns and AI automation, we
            build complete growth systems for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#905AFF] to-[#C448FF] px-8 py-4 font-bold text-white transition hover:shadow-[0_0_30px_-8px_rgba(144,90,255,0.55)]"
            >
              Start Your Growth Plan <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <div className="relative z-10">
        <WhatWeBuild />
      </div>
    </div>
  );
}
