import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/fraunces/wght-italic.css';
import '@fontsource-variable/schibsted-grotesk/wght.css';
import './globals.css';
import { site } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'NaMesa — Cardápio digital com pedido direto da mesa',
    template: '%s · NaMesa',
  },
  description: site.descricao,
  keywords: ['cardápio digital', 'pedido na mesa', 'QR Code', 'comanda digital', 'restaurante', 'bar', 'KDS', 'app do garçom'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'NaMesa',
    title: 'NaMesa — Seu cardápio vira pedido',
    description: site.descricao,
    images: [{ url: '/img/pdv-cozinha.webp', width: 1280, height: 780, alt: 'Tela da cozinha do NaMesa' }],
  },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#0a100d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
