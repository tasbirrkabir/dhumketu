import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhumketux.com"),
  title: "DhumketuX — Building Aerospace from Bangladesh",
  description:
    "Dhumketu Exploration Technologies Limited (DhumketuX) is Bangladesh's first private aerospace company — developing rockets, propulsion, UAVs, satellite-related systems and mission technologies from Bangladesh.",
  keywords: [
    "DhumketuX",
    "aerospace Bangladesh",
    "rocket",
    "propulsion",
    "SSLV",
    "UAV",
    "space technology",
  ],
  openGraph: {
    title: "DhumketuX — Building Aerospace from Bangladesh",
    description:
      "Rockets. Propulsion. Autonomous systems. Space technologies. Bangladesh's first private aerospace R&D organization.",
    type: "website",
    siteName: "Dhumketu Exploration Technologies Limited",
    images: [{ url: "/media/hero-launch.png", width: 1344, height: 768 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DhumketuX — Building Aerospace from Bangladesh",
    description:
      "Rockets. Propulsion. Autonomous systems. Space technologies. Bangladesh's first private aerospace R&D organization.",
    images: ["/media/hero-launch.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
