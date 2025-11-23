"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Check,
  Copy,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

const APP_EMAIL = "support@clns.in";
const APP_PHONE = "8465958825";
const APP_PHONE_2 = "8465958825";

export function ContactPage() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#020712] text-white">
      <div className="mx-auto h-full max-w-6xl">
        {/* HEADER */}
        <div className="flex flex-col px-4 pt-28 pb-16 md:px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-teal-200/70">Contact</p>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Contact CLNS
          </h1>
          <p className="mb-5 mt-6 text-base text-white/70">
            Our support team is here to help students, clients, and advocates.
          </p>
        </div>

        <BorderSeparator />

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-3">
          <Box icon={Mail} title="Email" description="Our team responds within 24 hours.">
            <div className="flex items-center gap-x-2">
              <a
                href={`mailto:${APP_EMAIL}`}
                className="font-mono text-base font-medium text-white/90 hover:text-teal-300 hover:underline transition-colors"
              >
                {APP_EMAIL}
              </a>
              <CopyButton className="size-6" test={APP_EMAIL} />
            </div>
          </Box>

          <Box icon={MapPin} title="Office" description="Visit our CLNS Headquarters.">
            <span className="font-mono text-base font-medium text-white/90 leading-relaxed">
              T-Hub<br />
              Hyderabad, Telangana
            </span>
          </Box>

          <Box icon={Phone} title="Phone" description="Available Mon–Fri, 9 AM–7 PM.">
            <div className="space-y-3">
              <div className="flex items-center gap-x-2">
                <a
                  href={`tel:${APP_PHONE}`}
                  className="font-mono text-base font-medium text-white/90 hover:text-teal-300 hover:underline transition-colors"
                >
                  {APP_PHONE}
                </a>
                <CopyButton className="size-6" test={APP_PHONE} />
              </div>

              <div className="flex items-center gap-x-2">
                <a
                  href={`tel:${APP_PHONE_2}`}
                  className="font-mono text-base font-medium text-white/90 hover:text-teal-300 hover:underline transition-colors"
                >
                  {APP_PHONE_2}
                </a>
                <CopyButton className="size-6" test={APP_PHONE_2} />
              </div>
            </div>
          </Box>
        </div>

        <BorderSeparator />

        {/* ADDITIONAL SECTIONS BELOW */}
        <div className="space-y-14 px-6 py-12">
          {/* SUPPORT CATEGORIES */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Support Categories</h2>
            <ul className="grid gap-6 text-sm md:grid-cols-3">
              <li className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/70 backdrop-blur-xl">
                <span className="font-semibold text-teal-300">Client Support</span> — Case tracking, consultations, access issues.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/70 backdrop-blur-xl">
                <span className="font-semibold text-teal-300">Student Support</span> — Internships, dashboard help, learning paths.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/70 backdrop-blur-xl">
                <span className="font-semibold text-teal-300">Advocate Support</span> — Document vault, billing, assignments.
              </li>
            </ul>
          </div>

          {/* HELP CENTER CTA */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-950/40 via-cyan-950/30 to-blue-950/40 p-8 text-center backdrop-blur-xl">
            <h3 className="mb-3 text-2xl font-bold text-white">Need urgent help?</h3>
            <p className="mb-6 text-white/70">
              Our support team is available 7 days a week for priority assistance.
            </p>
            <Button
              size="lg"
              className="bg-teal-500/20 border border-teal-400/30 text-white hover:bg-teal-500/30 hover:border-teal-400/50"
            >
              Open Help Center
            </Button>
          </div>

          {/* DOWNLOAD APP SECTION */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-purple-950/40 p-8 text-center backdrop-blur-xl">
            <h3 className="mb-3 text-2xl font-bold text-white">Download CLNS App</h3>
            <p className="mb-6 text-white/70">
              Access legal services on the go with our mobile app.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.clns.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <img src="/play-store.jpg" alt="Google Play" className="h-5 w-5 object-contain" />
                Google Play
              </a>
              <a
                href="https://apps.apple.com/in/app/clns-law-services-made-easy/id6741812022"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <img src="/app-store.jpg" alt="App Store" className="h-5 w-5 object-contain" />
                App Store
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="relative flex min-h-[320px] items-center justify-center">
          <div
            className={cn(
              "absolute inset-0 size-full",
              "bg-[radial-gradient(color-mix(in_oklab,rgba(34,211,238,0.1)_30%,transparent)_1px,transparent_1px)]",
              "bg-[size:32px_32px]",
              "[mask-image:radial-gradient(ellipse_at_center,var(--background)_30%,transparent)]"
            )}
          />

          <div className="relative z-10 space-y-6">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
              Find us online
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 backdrop-blur-xl transition-all hover:border-teal-400/30 hover:bg-white/10 hover:text-teal-300"
                  >
                    <Icon className="size-4" />
                    <span className="font-mono text-sm font-medium">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BorderSeparator() {
  return <div className="h-px w-full border-b border-white/10" />;
}

type ContactBox = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({ title, description, className, children, ...props }: ContactBox) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between border-b border-white/10 md:border-r md:border-b-0",
        className
      )}
    >
      <div className="flex items-center gap-x-3 border-b border-white/10 bg-white/5 p-4 backdrop-blur-xl">
        <props.icon className="size-5 text-teal-300" strokeWidth={1.5} />
        <h2 className="font-heading text-lg font-semibold text-white">{title}</h2>
      </div>

      <div className="flex items-center gap-x-2 p-4 py-12">{children}</div>

      <div className="border-t border-white/10 p-4">
        <p className="text-sm text-white/60">{description}</p>
      </div>
    </div>
  );
}

type CopyButtonProps = ButtonProps & { test: string };

function CopyButton({
  className,
  variant = "ghost",
  size = "icon",
  test,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(test);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "disabled:opacity-100 text-white/60 hover:text-teal-300 hover:bg-white/5",
        className
      )}
      onClick={handleCopy}
      disabled={copied}
      {...props}
    >
      <div
        className={cn(
          "transition-all",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <Check className="size-3.5 stroke-teal-400" />
      </div>
      <div
        className={cn(
          "absolute transition-all",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <Copy className="size-3.5" />
      </div>
    </Button>
  );
}

