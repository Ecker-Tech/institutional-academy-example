import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'RK Fitness Center | Construa sua melhor versão',
  description: 'Academia premium em Francisco Beltrão. Musculação para saúde, estética e performance. Ambiente exclusivo e acompanhamento profissional.',
  keywords: ['academia', 'musculação', 'fitness', 'Francisco Beltrão', 'treino personalizado'],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'RK Fitness Center | Construa sua melhor versão',
    description: 'Academia premium em Francisco Beltrão. Musculação para saúde, estética e performance.',
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-black text-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
