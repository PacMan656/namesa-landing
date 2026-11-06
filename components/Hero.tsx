import { localPath } from '@/lib/config';
import Image from 'next/image';
import { site } from '@/lib/config';
import { Icon } from './Icon';

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-brilho" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-texto">
          <p className="selo-topo load" style={{ '--d': '0ms' } as React.CSSProperties}>
            <span className="ponto-vivo" /> Cardápio digital com pedido na mesa
          </p>
          <h1 className="load" style={{ '--d': '90ms' } as React.CSSProperties}>
            Seu cardápio vira pedido.
            <em> Direto da mesa para a cozinha.</em>
          </h1>
          <p className="hero-sub load" style={{ '--d': '180ms' } as React.CSSProperties}>
            Com o NaMesa, o cliente lê o QR Code, escolhe no celular e o pedido chega na hora para o garçom,
            a cozinha e o caixa. Sem instalar aplicativo e sem cadastro, funcionando até quando a internet cai.
          </p>
          <div className="hero-acoes load" style={{ '--d': '270ms' } as React.CSSProperties}>
            <a href="#contato" className="btn btn-lg">
              Testar grátis por {site.diasGratis} dias <Icon nome="seta" size={18} />
            </a>
            <a href="#como-funciona" className="btn btn-ghost btn-lg">Ver como funciona</a>
          </div>
          <ul className="selos load" style={{ '--d': '360ms' } as React.CSSProperties}>
            <li><Icon nome="check" size={16} /> Sem cartão para começar</li>
            <li><Icon nome="check" size={16} /> Cancele quando quiser</li>
            <li><Icon nome="check" size={16} /> Suporte em português</li>
          </ul>
        </div>

        <div className="hero-visual load" style={{ '--d': '200ms' } as React.CSSProperties} aria-label="O pedido sai do celular do cliente e aparece na tela da cozinha">
          <div className="tela">
            <div className="tela-barra" aria-hidden="true"><i /><i /><i /><span>cozinha · NaMesa</span></div>
            <Image
              src={localPath('/img/pdv-cozinha.webp')}
              alt="Tela da cozinha do NaMesa com pedidos em A fazer, Em preparo e Pronto"
              width={1280}
              height={780}
              priority
              sizes="(max-width: 900px) 90vw, 560px"
            />
            <div className="toast-pedido" aria-hidden="true">
              <span className="ponto-vivo" /> Novo pedido · Mesa 07
            </div>
          </div>
          <div className="celular">
            <div className="celular-notch" aria-hidden="true" />
            <Image
              src={localPath('/img/app-cardapio.webp')}
              alt="Cardápio do NaMesa aberto no celular do cliente"
              width={390}
              height={844}
              priority
              sizes="(max-width: 900px) 34vw, 200px"
            />
          </div>
          <div className="voo" aria-hidden="true">
            <div className="voo-y">
              <div className="comanda">
                <b>Mesa 07</b>
                <span>2x Chopp</span>
                <span>1x Fritas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
