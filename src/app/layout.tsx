import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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
  title: "DhumketuX — Building aerospace from Bangladesh",
  description:
    "Dhumketu Exploration Technologies Limited (DhumketuX) is a commercial civilian space company from Bangladesh — developing rockets, propulsion, UAVs, satellite-related systems and mission technologies.",
  openGraph: {
    title: "DhumketuX — Building aerospace from Bangladesh",
    description:
      "Rockets. Propulsion. Autonomous systems. Space technologies. Bangladesh's first private aerospace R&D organization.",
    type: "website",
    siteName: "Dhumketu Exploration Technologies Limited",
    images: [{ url: "/media/engine-static-fire-test.jpg", width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DhumketuX — Building aerospace from Bangladesh",
    description:
      "Rockets. Propulsion. Autonomous systems. Space technologies. Bangladesh's first private aerospace R&D organization.",
    images: ["/media/engine-static-fire-test.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf9",
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
        className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
