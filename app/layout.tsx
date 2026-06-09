import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sora, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "ISO Assistant | Practical ISO Management For SMEs",
  description:
    "ISO Assistant helps SMEs run document control, audits, actions, risks, reviews, training, and records in one place, with support for ISO 9001, ISO 14001, ISO 45001, ISO 13485, and IMS workflows."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="gradient-shell min-h-screen">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1ZM5RSFGYV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1ZM5RSFGYV');
          `}
        </Script>
        <div className="grid-border min-h-screen">
          <Header />
          <main className="pb-20 pt-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
