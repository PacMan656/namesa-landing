import { localPath } from '@/lib/config';
import Image from 'next/image';
import { depoimentos } from '@/lib/depoimentos';
import { site } from '@/lib/config';
import { Icon } from './Icon';
import { RodaGigante } from './RodaGigante';

export function Diferencial() {
  return (
    <section className="secao diferencial">
      <div className="wrap dif-grid">
        <div data-reveal>
          <p className="kicker">O diferencial</p>
          <h2>Um cardápio que <em>dá vontade de pedir.</em></h2>
          <p className="lead">
            Esqueça o PDF com letra pequena. No NaMesa, os pratos aparecem em cards com vídeos curtos e navegação
            fluida, que o cliente desliza como uma vitrine. Mais apetite, mais pedidos e um ticket médio maior.
          </p>
          <p className="dica">Arraste para o lado ou use as setas para girar.</p>
        </div>
        <div data-reveal style={{ '--d': '120ms' } as React.CSSProperties}>
          <RodaGigante />
        </div>
      </div>
    </section>
  );
}

export function ProvaSocial() {
  return (
    <section className="secao prova">
      <div className="wrap">
        <div className="titulo-bloco centro" data-reveal>
          <p className="kicker">Quem usa, recomenda</p>
          {depoimentos.length === 0 ? (
            <h2>Seja um dos primeiros restaurantes <em>da sua cidade</em> a usar o NaMesa.</h2>
          ) : (
            <h2>Quem usa, <em>recomenda.</em></h2>
          )}
        </div>
        {depoimentos.length > 0 && (
          <div className="depoimentos">
            {depoimentos.map((d) => (
              <figure key={d.nome} className="depoimento" data-reveal>
                <blockquote>“{d.texto}”</blockquote>
                <figcaption>
                  {d.foto && <Image src={d.foto} alt="" width={44} height={44} />}
                  <span><b>{d.nome}</b>{d.estabelecimento} · {d.cidade}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
        <div className="galeria" data-reveal>
          <Image src={localPath('/img/pdv-caixa.webp')} alt="Frente de caixa do NaMesa com o consumo de cada mesa" width={1280} height={780} sizes="(max-width: 900px) 92vw, 540px" />
          <Image src={localPath('/img/pdv-qr-codes.webp')} alt="Tela de QR Codes das mesas prontos para imprimir" width={1280} height={780} sizes="(max-width: 900px) 92vw, 540px" />
        </div>
      </div>
    </section>
  );
}

export function Preco() {
  const inclui = [
    'Cardápio digital com fotos e vídeos',
    'Pedidos pela mesa via QR Code',
    'App do garçom',
    'Tela da cozinha',
    'Frente de caixa',
    'Funcionamento offline',
    'Atualizações incluídas',
    'Suporte por WhatsApp',
  ];
  return (
    <section id="preco" className="secao preco">
      <div className="wrap preco-grid">
        <div data-reveal>
          <p className="kicker">Preço</p>
          <h2>Um plano. Tudo incluso. <em>Sem surpresa.</em></h2>
          <p className="lead">Menos que o custo de uma comanda errada por dia.</p>
          <div className="destaque-gratis">
            <span>{site.diasGratis}</span>
            <p><b>dias grátis</b> para testar com o seu salão cheio.</p>
          </div>
        </div>

        <div className="comanda-preco" data-reveal style={{ '--d': '120ms' } as React.CSSProperties}>
          <div className="comanda-cab">
            <span>COMANDA Nº 001</span>
            <span>Plano NaMesa</span>
          </div>
          <p className="valor">
            <small>R$</small>{site.preco}<span>/mês</span>
          </p>
          <p className="valor-nota">depois dos {site.diasGratis} dias grátis</p>
          <ul>
            {inclui.map((i) => (
              <li key={i}><span>{i}</span><b>incluso</b></li>
            ))}
          </ul>
          <a href="#contato" className="btn btn-lg btn-full">Começar meu teste grátis</a>
          <p className="comanda-rodape">Sem cartão · Sem fidelidade · Cancele quando quiser</p>
        </div>
      </div>
    </section>
  );
}

const perguntas = [
  ['O cliente precisa baixar algum aplicativo?', 'Não. Ele lê o QR Code e o cardápio abre direto no navegador do celular.'],
  ['E se a internet do restaurante cair?', 'O sistema continua funcionando. Os pedidos ficam guardados no aparelho e são enviados assim que a conexão volta, sem duplicar.'],
  ['Preciso de cartão de crédito para testar?', 'Não. Você testa por 15 dias e só depois decide se quer assinar.'],
  ['Tem fidelidade ou multa?', 'Não. Você pode cancelar quando quiser.'],
  ['O NaMesa emite nota fiscal?', 'Ainda não. O comprovante enviado ao cliente é não fiscal. A emissão de NFC-e continua no seu sistema fiscal atual.'],
  ['Quanto tempo leva para começar?', 'Você cadastra o cardápio, cria as mesas, imprime os QR Codes e já pode atender no mesmo dia.'],
  ['Preciso comprar algum equipamento?', 'Não. Funciona no celular do cliente, no celular do garçom e em qualquer computador ou tablet no caixa e na cozinha.'],
];

export function Faq() {
  return (
    <section id="duvidas" className="secao faq">
      <div className="wrap faq-grid">
        <div className="titulo-bloco" data-reveal>
          <p className="kicker">Perguntas frequentes</p>
          <h2>Ficou alguma <em>dúvida?</em></h2>
          <p className="lead">Se a sua pergunta não estiver aqui, fale com a gente pelo formulário ou pelo WhatsApp.</p>
        </div>
        <div className="faq-lista" data-reveal style={{ '--d': '100ms' } as React.CSSProperties}>
          {perguntas.map(([p, r], i) => (
            <details key={p} name="faq" open={i === 0}>
              <summary>{p}<Icon nome="dir" size={18} /></summary>
              <p>{r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: perguntas.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
