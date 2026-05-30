import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ELITE FITNESS | Academia Premium",
  description:
    "ELITE FITNESS - A academia premium que transforma vidas. Equipamentos de última geração, treinadores especializados e ambiente exclusivo para você alcançar seus objetivos.",
  keywords: [
    "academia premium",
    "musculação",
    "fitness",
    "treino personalizado",
    "transformação física",
    "academia de luxo",
    "personal trainer",
    "cross training",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "ELITE FITNESS | Academia Premium",
    description:
      "Transforme seu corpo e sua vida. ELITE FITNESS oferece estrutura premium, equipamentos modernos e profissionais qualificados.",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELITE FITNESS | Academia Premium",
    description: "Transforme seu corpo e sua vida na ELITE FITNESS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#22C55E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-background">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
