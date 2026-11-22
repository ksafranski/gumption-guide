import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gumption.guide"),
  title: { default: "Gumption Guide", template: "%s · Gumption Guide" },
  description: "A field manual for practical know-how: mechanisms, knots, units, fieldcraft, first aid, building and gardening.",
  icons: {
    icon: [
      { url: "/icons/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/icons/favicon-32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png?v=2",
  },
  appleWebApp: { capable: true, title: "Gumption", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#171614",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="visually-hidden">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <footer className="site-foot wrap">
          <span>Gumption Guide</span>
          <span>Know how. Then improvise.</span>
        </footer>
      </body>
    </html>
  );
}
