import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Avi Sharma",
  description:
    "Founder of J Curve by Avi — a results-driven organic marketing agency for premium brands.",
  generator: "Next.js",
  applicationName: "Avi Sharma",
  keywords: [
    "freelance",
    "developer",
    "marketer",
    "react",
    "marketer",
    "j curve",
    "creative",
    "marketer",
    "engineer",
    "tech",
    "india",
    "software",
    "software developer",
    "portfolio",
    "portfolio",
    "portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Avi Sharma",
    description:
      "Content that Converts. Growth that Sticks.",
    images: [
      {
        url: "https://raw.githubusercontent.com/Maxiemad/avispflio/main/11.png",
        width: 1200,
        height: 630,
        alt: "Avi Sharma",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avi Sharma",
    description:
      "Founder of J Curve by Avi — a results-driven organic marketing agency for premium brands",
    creator: "Avi Sharma",
    creatorId: "",
    images: [
      "https://raw.githubusercontent.com/Maxiemad/avispflio/main/11.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
