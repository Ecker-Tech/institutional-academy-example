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
  title: "PULSAR | Academia Premium de Elite",
  description:
    "PULSAR - a academia premium que transformar você em sua melhor versão. Equipamentos de última geração, treinadores especializados e comunidade de elite.",
  keywords: [
    "academia premium",
    "musculação elite",
    "fitness performance",
    "treinamento personalizado",
    "transformação física",
    "academia de luxo",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "PULSAR | Academia Premium de Elite",
    description:
      "Transforme-se em sua melhor versão. PULSAR oferece equipamentos premium, treinadores de elite e ambiente exclusivo.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#00d4ff",
  width: "device-width",
  initialScale: 1,
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
