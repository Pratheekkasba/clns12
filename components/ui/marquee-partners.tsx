"use client";

import { cn } from "@/lib/utils";

const logos = [
  { name: "Supreme Court of India", src: "/partners/supreme-court.png" },
  { name: "Bombay High Court", src: "/partners/bombay-high-court.png" },
  { name: "Delhi Courts", src: "/partners/delhi-courts.png" },
  { name: "National Law Universities", src: "/partners/law-universities.png" },
  { name: "Corporate Legal", src: "/partners/corporate-legal.png" },
  { name: "Policy Think Tanks", src: "/partners/policy-thinktank.png" },
];

export function MarqueePartners({ className }: { className?: string }) {
  const loopItems = [...logos, ...logos];

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className
      )}
    >
      <div className="flex items-center gap-10 sm:gap-14 lg:gap-16 animate-scroll-slow hover:[animation-play-state:paused]">
        {loopItems.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex min-w-[120px] flex-col items-center gap-2 text-xs tracking-wide text-gray-300"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-full object-cover filter grayscale"
                draggable={false}
              />
            </div>
            <span className="text-center text-[11px] uppercase tracking-[0.2em] text-gray-400">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


