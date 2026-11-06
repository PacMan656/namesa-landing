import { Contato } from '@/components/Contato';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { RevealObserver } from '@/components/Reveal';
import { BotaoWhatsApp, Rodape } from '@/components/Rodape';
import { ComoFunciona, Dores, ParaQuem, Recursos } from '@/components/Secoes';
import { Diferencial, Faq, faqJsonLd, Preco, ProvaSocial } from '@/components/Vendas';
import { site } from '@/lib/config';

const produtoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'NaMesa',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: site.descricao,
  offers: { '@type': 'Offer', price: String(site.preco), priceCurrency: 'BRL' },
};

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="pular">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Dores />
        <ComoFunciona />
        <Recursos />
        <Diferencial />
        <ParaQuem />
        <ProvaSocial />
        <Preco />
        <Faq />
        <Contato />
      </main>
      <Rodape />
      <BotaoWhatsApp />
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([produtoJsonLd, faqJsonLd]) }} />
    </>
  );
}
