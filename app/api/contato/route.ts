import { NextResponse } from 'next/server';

// Recebe o formulário de contato e envia por e-mail (Resend).
// Sem e-mail configurado, devolve a mensagem pronta para o navegador seguir pelo WhatsApp.

const limite = new Map<string, { n: number; ate: number }>();
const JANELA_MS = 10 * 60_000;
const MAX_POR_JANELA = 5;

const texto = (v: unknown, min: number, max: number) =>
  typeof v === 'string' && v.trim().length >= min && v.trim().length <= max ? v.trim() : null;

const escapar = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  const agora = Date.now();
  const t = limite.get(ip);
  if (t && t.ate > agora && t.n >= MAX_POR_JANELA) {
    return NextResponse.json({ erro: 'Muitos envios seguidos. Tente de novo em alguns minutos.' }, { status: 429 });
  }
  limite.set(ip, t && t.ate > agora ? { n: t.n + 1, ate: t.ate } : { n: 1, ate: agora + JANELA_MS });

  const b = await req.json().catch(() => null);
  if (!b || typeof b !== 'object') return NextResponse.json({ erro: 'Dados inválidos.' }, { status: 400 });

  // Robô preencheu o campo invisível: finge sucesso e não envia nada.
  if (typeof b.site === 'string' && b.site.length > 0) return NextResponse.json({ ok: true });

  const nome = texto(b.nome, 2, 80);
  const estabelecimento = texto(b.estabelecimento, 2, 80);
  const cidade = texto(b.cidade, 2, 60);
  const whatsapp = typeof b.whatsapp === 'string' ? b.whatsapp.replace(/\D/g, '') : '';
  const mesas = texto(b.mesas, 1, 20) ?? 'não informado';
  const mensagem = texto(b.mensagem, 0, 600) ?? '';

  if (!nome || !estabelecimento || !cidade) return NextResponse.json({ erro: 'Preencha nome, estabelecimento e cidade.' }, { status: 400 });
  if (whatsapp.length < 10 || whatsapp.length > 11) return NextResponse.json({ erro: 'Informe um WhatsApp válido, com DDD.' }, { status: 400 });
  if (b.consentimento !== 'sim') return NextResponse.json({ erro: 'É preciso aceitar a Política de Privacidade.' }, { status: 400 });

  const resumo = [
    `Nome: ${nome}`,
    `Estabelecimento: ${estabelecimento}`,
    `Cidade: ${cidade}`,
    `WhatsApp: ${whatsapp}`,
    `Mesas: ${mesas}`,
    mensagem && `Mensagem: ${mensagem}`,
  ].filter(Boolean).join('\n');

  const { RESEND_API_KEY, EMAIL_FROM, CONTATO_EMAIL_PARA } = process.env;
  if (!RESEND_API_KEY || !EMAIL_FROM || !CONTATO_EMAIL_PARA) {
    return NextResponse.json(
      { erro: 'Envio por e-mail não configurado.', whatsapp: `Olá! Quero testar o NaMesa grátis.\n\n${resumo}` },
      { status: 503 },
    );
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [CONTATO_EMAIL_PARA],
        subject: `Novo teste grátis: ${estabelecimento} (${cidade})`,
        text: resumo,
        html: `<pre style="font:14px/1.5 sans-serif">${escapar(resumo)}</pre>`,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { erro: 'Não conseguimos enviar agora.', whatsapp: `Olá! Quero testar o NaMesa grátis.\n\n${resumo}` },
      { status: 502 },
    );
  }
}
