import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "burro.cl | Servicios para departamentos",
  description:
    "Burro.cl conecta departamentos con profesionales de confianza, verificados por video, en Ñuñoa y Providencia.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Burro",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/brand/burro-icon.svg",
    apple: "/brand/burro-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#3F35F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
