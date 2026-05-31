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
  title: "Elite Academia | Academia de Bairro Premium",
  description:
    "Elite Academia - Ambiente familiar, professores certificados, equipamentos modernos e preço justo. Estrutura premium para sua transformação fitness.",
  keywords: [
    "academia bairro",
    "musculação",
    "crossfit",
    "boxe",
    "fitness",
    "treino funcional",
    "personal trainer",
    "academia familiar",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Elite Academia | Academia de Bairro Premium",
    description:
      "Ambiente familiar, professores certificados, equipamentos modernos e preço justo.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#d4ff00",
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
