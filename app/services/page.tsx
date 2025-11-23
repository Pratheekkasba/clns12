"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  Building2,
  MessageSquare,
  Clock,
  FileText,
  GraduationCap,
  Laptop,
  MessageCircle,
  Network,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  UserCheck,
  Zap,
  Scale,
  BookOpen,
  Coins,
  Search,
  CheckCircle,
  ArrowRight,
  Rocket,
} from "lucide-react";
import { Footerdemo } from "@/components/ui/footer-section";

const serviceCategories = [
  {
    title: "Clients",
    icon: Shield,
    description: "Transparent, affordable legal access for every Indian",
    gradient: "from-teal-500/20 via-cyan-500/10 to-blue-500/20",
    borderGradient: "from-teal-400/50 via-cyan-400/30 to-blue-400/50",
  },
  {
    title: "Students",
    icon: GraduationCap,
    description: "Real-world exposure, mentorship, and career growth",
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    borderGradient: "from-sky-400/50 via-blue-400/30 to-indigo-400/50",
  },
  {
    title: "Advocates",
    icon: Scale,
    description: "Digital-first tools for modern legal practice",
    gradient: "from-cyan-500/20 via-teal-500/10 to-emerald-500/20",
    borderGradient: "from-cyan-400/50 via-teal-400/30 to-emerald-400/50",
  },
  {
    title: "Startups",
    icon: Rocket,
    description: "Fast legal & documentation support for early-stage founders — registration, compliance, and access to government benefits.",
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/20",
    borderGradient: "from-purple-400/50 via-pink-400/30 to-rose-400/50",
  },
  {
    title: "MSME",
    icon: Building2,
    description: "Quick MSME registration, compliance assistance, certificate handling, and advisory for subsidies & credit support.",
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    borderGradient: "from-orange-400/50 via-amber-400/30 to-yellow-400/50",
  },
];

const clientServices = [
  {
    icon: Coins,
    title: "Transparent pricing & accessibility",
    description: "Clear, upfront pricing with no hidden costs",
  },
  {
    icon: MessageCircle,
    title: "The ₹1 One-Rupee Consultation initiative",
    description: "Affordable legal guidance starting at just ₹1",
  },
  {
    icon: UserCheck,
    title: "Verified advocates & deep legal network",
    description: "Connect with trusted, verified legal professionals",
  },
  {
    icon: TrendingUp,
    title: "Real-time case tracking via personal dashboard",
    description: "Monitor your case progress in real-time",
  },
  {
    icon: FileText,
    title: "Digital document vault",
    description: "Secure storage for all your legal documents",
  },
  {
    icon: MessageSquare,
    title: "Real-time Legal AI Chatbox",
    description: "Instant answers to your legal questions",
  },
  {
    icon: Smartphone,
    title: "Mobile-first legal access",
    description: "Access all services from your mobile device",
  },
  {
    icon: Briefcase,
    title: "One-stop legal workflow for all categories",
    description: "Complete legal solutions in one platform",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Legal Support",
    description: "Round-the-clock assistance for urgent legal matters",
  },
];

const studentServices = [
  {
    icon: Briefcase,
    title: "Internship tracking",
    description: "Track and manage your internship applications",
  },
  {
    icon: CheckCircle,
    title: "Real case exposure",
    description: "Gain hands-on experience with real legal cases",
  },
  {
    icon: UserCheck,
    title: "Mentorship from experienced advocates",
    description: "Learn from industry experts and senior lawyers",
  },
  {
    icon: Laptop,
    title: "Learning dashboard",
    description: "Centralized hub for all your learning resources",
  },
  {
    icon: Users,
    title: "Community access & events",
    description: "Connect with peers and attend exclusive events",
  },
  {
    icon: MessageCircle,
    title: "Interactive legal workshops",
    description: "Participate in hands-on legal skill workshops",
  },
  {
    icon: Search,
    title: "Access to exclusive internships",
    description: "Discover verified internship opportunities",
  },
  {
    icon: BookOpen,
    title: "Free legal resources (ebooks, case studies, docs)",
    description: "Access comprehensive legal learning materials",
  },
  {
    icon: Zap,
    title: "Immediate advocate experience from Day 1 of LLB",
    description: "Start building your legal career from day one",
  },
];

const advocateServices = [
  {
    icon: TrendingUp,
    title: "Lead generation",
    description: "Connect with potential clients automatically",
  },
  {
    icon: Laptop,
    title: "Digital case management",
    description: "Manage all your cases from one dashboard",
  },
  {
    icon: FileText,
    title: "Paperless workflow",
    description: "Go completely digital with document management",
  },
  {
    icon: MessageCircle,
    title: "Client communication tools",
    description: "Seamless communication with clients",
  },
  {
    icon: Briefcase,
    title: "Centralized dashboard",
    description: "All your practice tools in one place",
  },
  {
    icon: Zap,
    title: "Practice automation tools",
    description: "Automate repetitive tasks and boost productivity",
  },
  {
    icon: Users,
    title: "Talent & intern hiring access",
    description: "Find and hire talented students and interns",
  },
  {
    icon: Network,
    title: "Digital marketplace visibility",
    description: "Increase your visibility in the legal marketplace",
  },
  {
    icon: Smartphone,
    title: "Mobile-first workflow",
    description: "Manage your practice on the go",
  },
];

const startupServices = [
  {
    icon: Rocket,
    title: "Fast company registration",
    description: "Quick registration support for startups and new businesses",
  },
  {
    icon: FileText,
    title: "Compliance documentation",
    description: "Streamlined compliance processes and documentation support",
  },
  {
    icon: Shield,
    title: "Government benefits access",
    description: "Navigate and access government schemes and startup benefits",
  },
  {
    icon: Coins,
    title: "Startup-friendly pricing",
    description: "Affordable legal packages designed for early-stage founders",
  },
  {
    icon: Briefcase,
    title: "Early-stage legal guidance",
    description: "Expert advice tailored for startup founders and entrepreneurs",
  },
  {
    icon: CheckCircle,
    title: "Registration support",
    description: "Complete assistance with business registration and setup",
  },
  {
    icon: TrendingUp,
    title: "Growth compliance support",
    description: "Ongoing compliance support as your startup grows",
  },
  {
    icon: MessageCircle,
    title: "Startup advisory services",
    description: "Dedicated advisory for startup legal and business needs",
  },
];

const msmeServices = [
  {
    icon: Building2,
    title: "MSME registration",
    description: "Quick MSME registration with complete documentation support",
  },
  {
    icon: FileText,
    title: "Compliance assistance",
    description: "Ongoing compliance support and certificate handling",
  },
  {
    icon: CheckCircle,
    title: "Certificate handling",
    description: "Complete certificate procurement and management",
  },
  {
    icon: Coins,
    title: "Subsidies & credit support",
    description: "Advisory services to leverage government subsidies and credit",
  },
  {
    icon: Briefcase,
    title: "Ongoing advisory services",
    description: "Continuous support for MSME business legal needs",
  },
  {
    icon: Shield,
    title: "Government scheme access",
    description: "Access to government schemes and benefits for MSMEs",
  },
  {
    icon: TrendingUp,
    title: "Business growth support",
    description: "Legal support for MSME business expansion and growth",
  },
  {
    icon: MessageCircle,
    title: "MSME consultation",
    description: "Expert consultation for MSME registration and compliance",
  },
];

const specialFeatures = [
  {
    title: "Client Management Suite",
    icon: Briefcase,
    features: ["Dashboard view", "Case tracker", "Document vault", "Communication hub"],
    gradient: "from-teal-500/20 via-cyan-500/10 to-blue-500/20",
  },
  {
    title: "Paid Internship Programs",
    icon: GraduationCap,
    features: ["Earn while learning", "Verified advocate mentorship", "Industry exposure"],
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
  },
  {
    title: "Simplified Workflow Tools",
    icon: Zap,
    features: ["Automation", "Scheduling", "Digital documentation"],
    gradient: "from-cyan-500/20 via-teal-500/10 to-emerald-500/20",
  },
  {
    title: "Connect With Talent",
    icon: Network,
    features: ["Discover students & junior advocates", "One-click recruitment", "Showcase profiles"],
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/20",
  },
];

export default function ServicesPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <main className="relative min-h-screen bg-[#020712] text-white overflow-hidden">

      {/* 1. HERO SECTION - Cinematic */}
      <section className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-32">
        {/* Cinematic Gradient Background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-teal-950/40 to-black"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_70%)] blur-[140px]" />
        
        {/* Soft Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_60%)]" />
        
        {/* Floating Glowing Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-teal-300/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-xs uppercase tracking-[0.4em] text-teal-200/70"
          >
            Services
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            CLNS Services — One Platform. Endless Legal Possibilities.
          </motion.h1>

          {/* Subtle Neon Underline Separator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Empowering Clients, Students, Advocates, Startups, and MSMEs with transparent, fast, and modern digital legal tools.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICE CATEGORY GRID - 3 Personas */}
      <section className="relative px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010308] via-[#030a15] to-[#010205]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-teal-200/80">Platform</p>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Service Categories</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <ServiceCategoryCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLIENT SERVICES BLOCK */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041424] via-[#020916] to-[#010207]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,204,0.15),transparent_65%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Image Placeholder at Top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex justify-center"
          >
            <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent" />
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/video-hero/services-hero.jpg"
                  alt="Clients exploring CLNS services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="inline-flex items-center text-xs uppercase tracking-[0.4em] text-teal-200">
              <span className="mr-3 h-px w-12 bg-teal-200/70" />
              Services for Clients
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Services for Clients</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              A transparent, affordable, simplified legal experience — built for every Indian.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clientServices.map((service, index) => (
              <StudentServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. STUDENT SERVICES BLOCK */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041424] via-[#020916] to-[#010207]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,204,0.15),transparent_65%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Image Placeholder at Top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex justify-center"
          >
            <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-transparent" />
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/video-hero/student-hero.jpg"
                  alt="Law student learning with CLNS"
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/40" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="inline-flex items-center text-xs uppercase tracking-[0.4em] text-teal-200">
              <span className="mr-3 h-px w-12 bg-teal-200/70" />
              Services for Students
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Services for Students</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              CLNS empowers law students with real-world exposure, mentorship, internships, and hands-on legal tools.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studentServices.map((service, index) => (
              <StudentServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. ADVOCATE SERVICES BLOCK */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041424] via-[#020916] to-[#010207]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,204,0.15),transparent_65%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Image Placeholder at Top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex justify-center"
          >
            <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent" />
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/video-hero/advocate-hero.jpg"
                  alt="Advocate using CLNS tools"
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="inline-flex items-center text-xs uppercase tracking-[0.4em] text-teal-200">
              <span className="mr-3 h-px w-12 bg-teal-200/70" />
              Services for Advocates
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Services for Advocates & Legal Professionals
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Digital-first tools for modern legal practice.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advocateServices.map((service, index) => (
              <StudentServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. STARTUP SERVICES BLOCK */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041424] via-[#020916] to-[#010207]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_65%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Image Placeholder at Top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex justify-center"
          >
            <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent" />
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/video-hero/startups-hero.jpg"
                  alt="Startups using CLNS services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="inline-flex items-center text-xs uppercase tracking-[0.4em] text-teal-200">
              <span className="mr-3 h-px w-12 bg-teal-200/70" />
              Services for Startups
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Services for Startups</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Fast legal & documentation support for early-stage founders — registration, compliance, and access to government benefits.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {startupServices.map((service, index) => (
              <StudentServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. MSME SERVICES BLOCK */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041424] via-[#020916] to-[#010207]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.15),transparent_65%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Image Placeholder at Top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex justify-center"
          >
            <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent" />
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/video-hero/msme-hero.jpg"
                  alt="MSME businesses using CLNS services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="inline-flex items-center text-xs uppercase tracking-[0.4em] text-teal-200">
              <span className="mr-3 h-px w-12 bg-teal-200/70" />
              Services for MSME
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Services for MSME</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Quick MSME registration, compliance assistance, certificate handling, and advisory for subsidies & credit support.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {msmeServices.map((service, index) => (
              <StudentServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. SPECIAL FEATURE SECTIONS */}
      <section className="relative px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010308] via-[#030a15] to-[#010205]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-teal-200/80">Features</p>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Special Features</h2>
            <p className="mt-6 text-lg text-white/70">Premium tools for every legal professional</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {specialFeatures.map((feature, index) => (
              <SpecialFeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION - Cinematic Footer CTA */}
      <section className="relative overflow-hidden px-6 py-32">
        {/* Full-width Radiant Gradient Beam */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(34,211,238,0.15)_50%,transparent_100%)] bg-[length:200%_100%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_70%)] blur-[120px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Start Your Journey with CLNS
          </h2>
          <p className="mt-6 text-lg text-white/75 sm:text-xl">
            Experience India's most advanced digital legal-tech ecosystem.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <motion.a
              href="https://wa.me/8465958825?text=Hello%20CLNS%2C%20I%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 rounded-2xl border border-teal-400/50 bg-teal-500/20 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition-all hover:border-teal-400/70 hover:bg-teal-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              {/* Neon Ring */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(34,211,238,0.5)",
                    "0 0 40px rgba(34,211,238,0.8)",
                    "0 0 20px rgba(34,211,238,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-2xl border border-teal-400/30"
              />
            </motion.a>
            
            <div className="flex gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.clns.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
              >
                <img src="/play-store.jpg" alt="Google Play" className="h-5 w-5 object-contain" />
                Google Play
              </a>
              <a
                href="https://apps.apple.com/in/app/clns-law-services-made-easy/id6741812022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
              >
                <img src="/app-store.jpg" alt="App Store" className="h-5 w-5 object-contain" />
                App Store
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. IMAGE BLOCK ABOVE FOOTER */}
      <section className="relative h-[460px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010409]/70 to-[#000]/90 z-10" />
        <Image
          src="/images/lady-justice-footer.jpg"
          alt="Lady Justice"
          fill
          className="object-cover object-center"
          priority
        />
      </section>

      <Footerdemo />
    </main>
  );
}

function ServiceCategoryCard({
  category,
  index,
}: {
  category: (typeof serviceCategories)[0];
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 hover:border-teal-400/40 hover:shadow-[0_60px_150px_rgba(34,211,238,0.3)]"
    >
      {/* Moving Gradient Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} bg-[length:200%_200%] opacity-70`}
      />

      {/* Gradient Border */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.borderGradient} opacity-0 transition-opacity group-hover:opacity-100`} />

      {/* Soft Glow Halo */}
      <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative z-10 text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <Icon className="h-8 w-8 text-teal-300" />
          </div>
        </div>
        <h3 className="mb-3 text-2xl font-bold text-white">{category.title}</h3>
        <p className="text-white/70">{category.description}</p>
      </div>
    </motion.div>
  );
}

function ServiceFeatureCard({
  service,
  index,
}: {
  service: (typeof clientServices)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-teal-400/30 hover:bg-white/8"
    >
      {/* Soft Teal Dot Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.1,
        }}
        className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
      />

      <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
        <Icon className="h-5 w-5 text-teal-300" />
      </div>

      <div className="flex-1">
        <h3 className="mb-1 text-lg font-semibold text-white">{service.title}</h3>
        <p className="text-sm text-white/60">{service.description}</p>
      </div>
    </motion.div>
  );
}

function StudentServiceCard({
  service,
  index,
}: {
  service: (typeof studentServices)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-teal-400/30 hover:bg-white/8 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
    >
      {/* Soft Blur Backdrop + Teal Glass Look */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur">
            <Icon className="h-5 w-5 text-teal-300" />
          </div>
          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-white/60">{service.description}</p>
      </div>
    </motion.div>
  );
}

function SpecialFeatureCard({
  feature,
  index,
}: {
  feature: (typeof specialFeatures)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 hover:border-teal-400/40 hover:shadow-[0_60px_150px_rgba(34,211,238,0.3)]"
    >
      {/* Glass 3D Look */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Moving Gradient Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} bg-[length:200%_200%] opacity-70`}
      />

      {/* 1px Gradient Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-400/30 via-cyan-400/20 to-blue-400/30 opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Floating Glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <Icon className="h-6 w-6 text-teal-300" />
          </div>
          <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
        </div>

        <ul className="space-y-3">
          {feature.features.map((item, idx) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + idx * 0.05 }}
              className="flex items-center gap-3 text-white/80"
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.2,
                }}
                className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
              />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
