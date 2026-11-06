'use client';

import { useState } from 'react';
import { linkWhatsApp, site } from '@/lib/config';
import { Icon } from './Icon';

type Estado = 'parado' | 'enviando' | 'ok' | 'erro';

const mascararTelefone = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

export function FormContato() {
  const [estado, setEstado] = useState<Estado>('parado');
  const [erro, setErro] = useState('');
  const [tel, setTel] = useState('');

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setEstado('enviando');
    setErro('');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(dados),
      });
      const corpo = await res.json().catch(() => ({}));
      if (res.ok) {
        setEstado('ok');
        form.reset();
        setTel('');
        return;
      }
      // Servidor sem e-mail configurado: segue pelo WhatsApp com a mensagem já escrita.
      if (corpo?.whatsapp && site.whatsapp) {
        window.open(linkWhatsApp(corpo.whatsapp), '_blank', 'noopener');
        setEstado('ok');
        return;
      }
      setErro(corpo?.erro ?? 'Não foi possível enviar agora. Tente de novo em instantes.');
      setEstado('erro');
    } catch {
      setErro('Sem conexão. Verifique a internet e tente de novo.');
      setEstado('erro');
    }
  }

  if (estado === 'ok') {
    return (
      <div className="form-card form-ok" role="status">
        <span className="form-ok-icone"><Icon nome="check" size={30} /></span>
        <h3>Recebemos o seu contato!</h3>
        <p>Em breve a gente fala com você pelo WhatsApp para liberar os seus 15 dias grátis.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setEstado('parado')}>Enviar outro</button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={enviar} noValidate={false}>
      <h3>Quero testar grátis</h3>
      <div className="campos">
        <label>
          <span>Seu nome</span>
          <input name="nome" required minLength={2} maxLength={80} autoComplete="name" placeholder="Como podemos te chamar?" />
        </label>
        <label>
          <span>Nome do estabelecimento</span>
          <input name="estabelecimento" required minLength={2} maxLength={80} autoComplete="organization" placeholder="Ex.: Bar do Zé" />
        </label>
        <label>
          <span>WhatsApp</span>
          <input
            name="whatsapp"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            pattern="\(\d{2}\) \d{4,5}-\d{4}"
            title="Informe o DDD e o número"
            value={tel}
            onChange={(e) => setTel(mascararTelefone(e.target.value))}
          />
        </label>
        <label>
          <span>Cidade</span>
          <input name="cidade" required maxLength={60} autoComplete="address-level2" placeholder="Sua cidade" />
        </label>
        <label className="campo-largo">
          <span>Quantas mesas?</span>
          <select name="mesas" defaultValue="">
            <option value="" disabled>Selecione</option>
            <option>Até 10</option>
            <option>11 a 25</option>
            <option>26 a 50</option>
            <option>Mais de 50</option>
          </select>
        </label>
        <label className="campo-largo">
          <span>Mensagem <i>(opcional)</i></span>
          <textarea name="mensagem" rows={3} maxLength={600} placeholder="Conte um pouco sobre o seu salão" />
        </label>
        {/* Armadilha para robôs: invisível para pessoas. */}
        <label className="armadilha" aria-hidden="true">
          Site<input name="site" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="consentimento">
        <input type="checkbox" name="consentimento" value="sim" required />
        <span>
          Concordo em ser contatado e com a <a href="/privacidade" target="_blank">Política de Privacidade</a>.
        </span>
      </label>
      {estado === 'erro' && <p className="form-erro" role="alert">{erro}</p>}
      <button className="btn btn-lg btn-full" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando…' : <>Quero testar grátis <Icon nome="seta" size={18} /></>}
      </button>
    </form>
  );
}
