import Image from 'next/image';
import { Icon } from './Icon';

export function Dores() {
  const dores = [
    { t: 'Cliente esperando o garçom só para fazer o pedido.', d: 'Espera longa', icone: 'hand' },
    { t: 'Comanda de papel que some ou chega errada na cozinha.', d: 'Pedido perdido', icone: 'recibo' },
    { t: 'Cardápio impresso desatualizado, com preço riscado à caneta.', d: 'Preço velho', icone: 'edit' },
    { t: 'Conta confusa na hora de fechar a mesa.', d: 'Conta errada', icone: 'caixa' },
  ];
  return (
    <section className="secao dores">
      <div className="wrap">
        <div className="titulo-bloco" data-reveal>
          <p className="kicker">O problema</p>
          <h2>Casa cheia não pode virar <em>dor de cabeça.</em></h2>
        </div>
        <ol className="dores-lista">
          {dores.map((x, i) => (
            <li key={x.d} data-reveal style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
              <span className="dor-num">0{i + 1}</span>
              <span className="dor-tag"><Icon nome={x.icone} size={16} /> {x.d}</span>
              <p>{x.t}</p>
            </li>
          ))}
        </ol>
        <p className="dores-fecho" data-reveal>
          O NaMesa organiza tudo isso numa só ferramenta, do QR Code ao fechamento da conta.
        </p>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  const passos = [
    { t: 'O cliente escaneia o QR da mesa.', d: 'O cardápio abre no celular, com fotos e vídeos dos pratos.', img: '/img/app-prato.webp', w: 390, h: 844, alt: 'Detalhe de um prato no celular' },
    { t: 'Escolhe e envia o pedido.', d: 'O garçom é avisado e a cozinha recebe na tela, organizada em A fazer, Em preparo e Pronto.', img: '/img/garcom-avisos.webp', w: 390, h: 844, alt: 'Aviso de novo pedido no app do garçom' },
    { t: 'O caixa fecha a conta.', d: 'Todo o consumo da mesa aparece certinho, com a forma de pagamento escolhida pelo cliente.', img: '/img/app-carrinho.webp', w: 390, h: 844, alt: 'Carrinho com forma de pagamento escolhida' },
  ];
  return (
    <section id="como-funciona" className="secao como">
      <div className="wrap">
        <div className="titulo-bloco centro" data-reveal>
          <p className="kicker">Como funciona</p>
          <h2>Simples para o cliente. <em>Organizado para sua equipe.</em></h2>
        </div>
        <ol className="passos">
          {passos.map((p, i) => (
            <li key={p.t} className="passo" data-reveal style={{ '--d': `${i * 120}ms` } as React.CSSProperties}>
              <span className="passo-num">{i + 1}</span>
              <div className="passo-img">
                <Image src={p.img} alt={p.alt} width={p.w} height={p.h} sizes="(max-width: 900px) 60vw, 220px" />
              </div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const recursos = [
  { t: 'Pedido direto da mesa', d: 'Sem fila, sem espera e sem comanda perdida.', icone: 'qr' },
  { t: 'Tela da cozinha', d: 'Pedidos organizados por etapa, com o tempo de cada um.', icone: 'chef' },
  { t: 'Frente de caixa', d: 'Consumo real de cada mesa e fechamento rápido.', icone: 'caixa' },
  { t: 'Gestão do cardápio', d: 'Cadastre, altere preços e pause itens esgotados na hora.', icone: 'edit' },
  { t: 'QR Codes prontos para imprimir', d: 'Crie mesas e gere os códigos em segundos.', icone: 'print' },
  { t: 'Mais avaliações no Google', d: 'Depois do pedido, o cliente recebe um convite para avaliar o seu restaurante.', icone: 'star' },
  { t: 'Comprovante por e-mail ou WhatsApp', d: 'O cliente recebe o resumo do pedido, se quiser.', icone: 'recibo' },
];

export function Recursos() {
  return (
    <section id="recursos" className="secao recursos">
      <div className="wrap">
        <div className="titulo-bloco" data-reveal>
          <p className="kicker">Recursos</p>
          <h2>Tudo o que seu salão precisa, <em>em um só lugar.</em></h2>
        </div>

        <div className="bento">
          <article className="tile tile-video" data-reveal>
            <div className="tile-texto">
              <Icon nome="play" />
              <h3>Cardápio digital com fotos e vídeos</h3>
              <p>Mostre o prato como ele é. Uma cerveja suando de gelada vende sozinha.</p>
            </div>
            <div className="chopp" aria-hidden="true">
              <div className="chopp-copo"><div className="chopp-liquido"><i /><i /><i /><i /></div><div className="chopp-espuma" /></div>
            </div>
          </article>

          <article className="tile tile-garcom" data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
            <div className="tile-texto">
              <Icon nome="bell" />
              <h3>App do garçom</h3>
              <p>Avisos de novos pedidos e chamados, mapa de mesas e lançamento manual.</p>
            </div>
            <div className="tile-print">
              <Image src="/img/garcom-mesas.webp" alt="Mapa de mesas no app do garçom" width={390} height={844} sizes="200px" />
            </div>
          </article>

          <article className="tile tile-offline" data-reveal style={{ '--d': '160ms' } as React.CSSProperties}>
            <Icon nome="wifi" />
            <h3>Funciona sem internet</h3>
            <p>Se a conexão cair, os pedidos ficam guardados e são enviados assim que ela volta, sem duplicar.</p>
            <div className="sync" aria-hidden="true">
              <span className="sync-a">Sem internet · 3 pedidos guardados</span>
              <span className="sync-b">Conexão voltou · tudo enviado</span>
            </div>
          </article>

          {recursos.map((r, i) => (
            <article key={r.t} className="tile tile-mini" data-reveal style={{ '--d': `${(i % 3) * 80}ms` } as React.CSSProperties}>
              <Icon nome={r.icone} />
              <h3>{r.t}</h3>
              <p>{r.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ParaQuem() {
  const tipos = ['Restaurantes', 'Bares e choperias', 'Hamburguerias', 'Pizzarias', 'Cafeterias', 'Lanchonetes com salão'];
  const faixa = [...tipos, ...tipos];
  return (
    <section className="para-quem" aria-labelledby="para-quem-titulo">
      <div className="wrap" data-reveal>
        <h2 id="para-quem-titulo" className="para-quem-titulo">Feito para quem <em>atende na mesa.</em></h2>
      </div>
      <div className="faixa" aria-hidden="true">
        <div className="faixa-trilho">
          {faixa.map((t, i) => (<span key={i}>{t}<b>✦</b></span>))}
        </div>
      </div>
      <p className="sr-only">{tipos.join(', ')}.</p>
    </section>
  );
}
