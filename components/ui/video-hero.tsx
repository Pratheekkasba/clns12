"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const HERO_VIDEO_SRC =
  "/video-hero/motion2Fast_Ultrarealistic_cinematic_video_of_a_modern_Indian__0.mp4";

function StateEmblem() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#f5c351]/40 bg-[#f5c351]/10 shadow-[0_0_35px_rgba(245,195,81,0.45)]"
    >
      <svg viewBox="0 0 64 64" className="h-12 w-12 text-[#f5c351]" fill="currentColor">
        <path d="M28 10h8l4 12v12h-4v12l4 6h-16l4-6V34h-4V22l4-12z" opacity="0.85" />
        <path d="M22 22h20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M20 46h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

export function VideoHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start center", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-[#020817] text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,20,35,0.78)_0%,rgba(5,20,35,0.55)_60%,rgba(5,20,35,0.65)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(37,99,235,0.35),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(2,8,23,0)_0%,rgba(5,20,35,0.65)_100%)]" />

      <motion.div
        style={{ y: translateY }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 lg:px-8"
      >
        <StateEmblem />
        <p className="text-base uppercase tracking-[0.4em] text-white/70">
          A next-generation legal ecosystem for India.
        </p>

        <div className="space-y-6">
          <h1
            className="text-[2.6rem] font-bold leading-tight tracking-tight sm:text-5xl md:text-[3.4rem]"
            style={{ textShadow: "0px 2px 16px rgba(0,0,0,0.4)" }}
          >
            India's Centralised Legal Network Solutions
          </h1>
          <p
            className="text-lg leading-relaxed text-white/85 sm:text-xl"
            style={{ textShadow: "0px 2px 12px rgba(0,0,0,0.35)" }}
          >
            Fast, transparent, tech-enabled legal services for clients, students & advocates.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <a
            href="https://wa.me/8465958825?text=Hello%20CLNS%2C%20I%20would%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#2563eb] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,0.5)] transition hover:brightness-110"
          >
            Book Consultation — Starts at ₹1
          </a>
          <Link href="/services" className="inline-flex">
            <InteractiveHoverButton
              text="Explore Student & Advocate Platforms"
              className="bg-transparent text-white border-white/30 hover:border-white/60"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}


