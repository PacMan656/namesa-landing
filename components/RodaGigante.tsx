'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

// Demonstração do cardápio em "roda gigante": os cards giram em ciclo, o da frente fica em destaque.
// No produto, cada card mostra um vídeo curto do prato; aqui são cards ilustrados para manter a página leve.
const itens = [
  { nome: 'Chopp gelado', preco: 'R$ 12', emoji: '🍺', cor: '#f5b941' },
  { nome: 'Burger da casa', preco: 'R$ 32', emoji: '🍔', cor: '#f08a3c' },
  { nome: 'Pizza margherita', preco: 'R$ 45', emoji: '🍕', cor: '#e5484d' },
  { nome: 'Caipirinha', preco: 'R$ 18', emoji: '🍹', cor: '#3ddc84' },
  { nome: 'Fritas crocantes', preco: 'R$ 18', emoji: '🍟', cor: '#f5c542' },
  { nome: 'Brownie quente', preco: 'R$ 16', emoji: '🍫', cor: '#b0703c' },
  { nome: 'Salada fresca', preco: 'R$ 22', emoji: '🥗', cor: '#7ccf6a' },
  { nome: 'Suco natural', preco: 'R$ 9', emoji: '🍊', cor: '#ff9f43' },
];
const N = itens.length;
const PASSO = 360 / N;

export function RodaGigante() {
  const [atual, setAtual] = useState(0);
  const [mexeu, setMexeu] = useState(false);
  const arraste = useRef<{ x: number; ativo: boolean } | null>(null);
  const raiz = useRef<HTMLDivElement>(null);
  const visivel = useRef(false);

  const ir = useCallback((delta: number) => setAtual((a) => a + delta), []);

  // Gira sozinha enquanto está na tela e ninguém mexeu; respeita "reduzir movimento".
  useEffect(() => {
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduz || mexeu) return;
    const io = new IntersectionObserver(([e]) => { visivel.current = e.isIntersecting; });
    if (raiz.current) io.observe(raiz.current);
    const t = setInterval(() => { if (visivel.current && !document.hidden) ir(1); }, 2600);
    return () => { clearInterval(t); io.disconnect(); };
  }, [mexeu, ir]);

  const indice = ((atual % N) + N) % N;
  const frente = itens[indice];

  return (
    <div
      ref={raiz}
      className="roda"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Exemplo de cardápio em roda gigante"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') { setMexeu(true); ir(1); }
        if (e.key === 'ArrowLeft') { setMexeu(true); ir(-1); }
      }}
      onPointerDown={(e) => { arraste.current = { x: e.clientX, ativo: true }; }}
      onPointerUp={(e) => {
        const a = arraste.current;
        arraste.current = null;
        if (!a) return;
        const dx = e.clientX - a.x;
        if (Math.abs(dx) > 30) { setMexeu(true); ir(dx < 0 ? 1 : -1); }
      }}
      onPointerCancel={() => { arraste.current = null; }}
    >
      <div className="roda-palco">
        <div className="roda-anel" style={{ transform: `translateZ(calc(var(--raio) * -1)) rotateY(${-atual * PASSO}deg)` }}>
          {itens.map((it, i) => (
            <div
              key={it.nome}
              className={`roda-card ${i === indice ? 'frente' : ''}`}
              style={{ transform: `rotateY(${i * PASSO}deg) translateZ(var(--raio))`, '--cor': it.cor } as React.CSSProperties}
              aria-hidden={i !== indice}
            >
              <div className="roda-midia">
                <span className="roda-emoji">{it.emoji}</span>
                <span className="roda-play"><Icon nome="play" size={14} /> 0:04</span>
              </div>
              <div className="roda-info">
                <b>{it.nome}</b>
                <span>{it.preco}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="roda-controles">
        <button type="button" onClick={() => { setMexeu(true); ir(-1); }} aria-label="Item anterior"><Icon nome="esq" /></button>
        <p aria-live="polite"><b>{frente.nome}</b> · {frente.preco}</p>
        <button type="button" onClick={() => { setMexeu(true); ir(1); }} aria-label="Próximo item"><Icon nome="dir" /></button>
      </div>
    </div>
  );
}
