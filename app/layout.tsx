import "./global.css";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import { AOS } from "./components/global";
import { Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { AuthProvider } from "./lib/auth-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tekcify-auth.vercel.app"),
  icons: {
    icon: "/images/logo.svg",
  },
  title: "Tekcify Auth - Next.js Authentication System",
  description:
    "A modern, full-stack authentication system built with Next.js 15, TypeScript, and Tekcify OAuth. Features a beautiful minimalist UI with secure authentication flow.",
  applicationName: "Tekcify Auth",
  authors: [
    {
      name: "Tekcify Auth",
      url: "https://github.com/your-username/tekcify-auth",
    },
  ],
  keywords: [
    "Next.js",
    "TypeScript",
    "Authentication",
    "OAuth",
    "Tekcify",
    "React",
  ],
  creator: "Tekcify Auth Team",
  publisher: "Tekcify Auth",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://tekcify-auth.vercel.app",
    title: "Tekcify Auth - Next.js Authentication System",
    siteName: "Tekcify Auth",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Tekcify Auth - Authentication System",
      },
    ],
  },
  twitter: {
    site: "tekcify_auth",
    creator: "tekcify_auth",
    title: "Tekcify Auth - Next.js Authentication System",
    description: "Modern authentication system with Tekcify OAuth integration",
    card: "summary_large_image",
    images: ["/images/logo.svg"],
  },
  appleWebApp: {
    capable: true,
    title: "Tekcify Auth",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract: "Modern authentication system with Tekcify OAuth integration",
  category: "Authentication",
  classification: "Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.className} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors />
        <AOS />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
