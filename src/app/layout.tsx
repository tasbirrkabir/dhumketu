import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono, Instrument_Serif, Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhumketux.com"),
  title: "DhumketuX · Building aerospace from Bangladesh",
  description:
    "Dhumketu Exploration Technologies Limited (DhumketuX) is a commercial civilian space company from Bangladesh, developing rockets, propulsion, UAVs, satellite-related systems and mission technologies.",
  openGraph: {
    title: "DhumketuX · Building aerospace from Bangladesh",
    description:
      "Rockets. Propulsion. Autonomous systems. Space technologies. Bangladesh's first private aerospace R&D organization.",
    type: "website",
    siteName: "Dhumketu Exploration Technologies Limited",
    images: [{ url: "/media/og-dhumketux.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DhumketuX · Building aerospace from Bangladesh",
    description:
      "Rockets. Propulsion. Autonomous systems. Space technologies. Bangladesh's first private aerospace R&D organization.",
    images: ["/media/og-dhumketux.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#060607",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-void text-chalk`}
      >
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#101013",
              border: "1px solid rgba(244, 242, 237, 0.14)",
              color: "#f4f2ed",
              borderRadius: "16px",
            },
          }}
        />
      </body>
    </html>
  );
}
