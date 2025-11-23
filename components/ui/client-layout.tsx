"use client";

import { NavBarDemo } from "@/components/ui/tubelight-navbar-demo";
import { PageTransition } from "@/components/ui/page-transition";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarDemo />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  );
}

