"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
} from "lucide-react";
import NeuralBackground from "../background/NeuralBackground";

type FooterLink = {
  name: string;
  href: string;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

type SocialIconBtnProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const footerLinks: FooterGroup[] = [
  {
    title: "Contact",
    links: [
      { name: "hello@meetechsolution.com", href: "mailto:hello@meetechsolution.com" },
      { name: "+1 334 926 9060", href: "tel:+1 334 926 9060" },
      { name: "United States", href: "https://www.google.com/maps?q=United+States" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Social Media", href: "/services/social-media-management" },
      { name: "Branding", href: "/services/branding-logo" },
      { name: "Performance", href: "/services/performance-marketing" },
      { name: "AI Automations", href: "/services/ai-automations" },
      { name: "SEO + AEO", href: "/services/seo-aeo" },
      { name: "Email Marketing", href: "/services/email-marketing" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/work" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms_of_service" },
      { name: "Cookie Policy", href: "/legal/cookie" },
    ],
  },
];

const LiveClock = () => {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  return <div className="text-4xl md:text-6xl font-mono font-bold tracking-widest text-text-primary mt-2">{time}</div>;
};

const Footer: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-bg-surface text-text-muted border-t border-border-default pt-20 pb-8 overflow-hidden">
      {/* Decorative gradient line at top */}

      {/* Decorative Grid: Uses border-default variable for theme-aware lines
      < div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none " /> */}

      <NeuralBackground />
      {/* Atmospheric Radial Blur */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-20 text-text-muted mx-auto px-3 md:px-8 lg:px-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6 text-text-muted">
            <Link href="/" className="flex items-center group w-fit">
              <img
                src="/logo.svg"
                alt="Meetech Solution"
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              We make your brand impossible to ignore. Scalable marketing strategies with precision, performance, and long-term vision.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-text-muted">
              <SocialIconBtn
                href="#"
                icon={<Github size={18} />}
                label="GitHub"
              />
              <SocialIconBtn
                href="https://www.linkedin.com/company/meetechdevelopment/"
                icon={<Linkedin size={18} />}
                label="LinkedIn"
              />
              <SocialIconBtn
                href="https://www.facebook.com/share/1AXzwMhXZL/?mibextid=wwXIfr"
                icon={<Facebook size={18} />}
                label="Facebook"
              />
              <SocialIconBtn
                href="https://www.instagram.com/meetechdevelopment?igsh=MXV3MDlydmRhczF2Nw%3D%3D&utm_source=qr"
                icon={<Instagram size={18} />}
                label="Instagram"
              />
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-5 ">
                <h4 className="text-text-primary text-sm font-bold uppercase tracking-wider">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-text-muted text-sm hover:text-accent transition-colors flex items-center group"
                      >
                        <ChevronRight
                          size={14}
                          className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-1"
                        />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Live Clock Section */}
        <div className="border-t border-border-default pt-10 pb-10 flex justify-center">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#905AFF] mb-2">Current Local Time</p>
            <LiveClock />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-default pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs font-medium tracking-wide">
            Meetech Solution, © 2026
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/legal/privacy"
              className="text-text-muted text-xs font-medium hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms_of_service"
              className="text-text-muted text-xs font-medium hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="text-text-muted text-xs font-medium hover:text-accent transition-colors flex items-center gap-1 group"
            >
              Back to Top
              <svg
                className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#905AFF] to-[#C448FF]" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gradient-to-r from-[#905AFF] to-[#C448FF] blur-[140px] opacity-20 pointer-events-none" />
    </footer>
  );
};

export default Footer;

/* -------------------- */

const SocialIconBtn: React.FC<SocialIconBtnProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-11 h-11 rounded-xl bg-bg-surface border border-border-default flex items-center justify-center text-text-muted hover:text-accent hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
  >
    {icon}
  </a>
);
