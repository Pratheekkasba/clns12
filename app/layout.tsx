import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ui/client-layout";

export const metadata: Metadata = {
  title: "CLNS | Centralised Legal Network Solutions",
  description: "India's first unified legal-tech ecosystem connecting clients, students, and advocates through a single digital platform.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

