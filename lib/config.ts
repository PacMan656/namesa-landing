// Dados de contato e oferta num lugar só. Preencha no .env.local (veja .env.example).
const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP ?? '').replace(/\D/g, '');

export const site = {
  nome: 'NaMesa',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  descricao:
    'Cardápio digital com pedido na mesa: o cliente lê o QR Code, pede pelo celular e o pedido chega na hora para o garçom, a cozinha e o caixa. Funciona até sem internet.',
  email: process.env.NEXT_PUBLIC_EMAIL ?? '',
  whatsapp, // só dígitos, com DDI e DDD: 5585999999999
  preco: 100,
  diasGratis: 15,
};

export const linkWhatsApp = (texto = 'Olá! Quero saber mais sobre o NaMesa.') =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}` : '#contato';

export const whatsappFormatado = () => {
  const n = site.whatsapp.replace(/^55/, '');
  if (n.length < 10) return '';
  return `(${n.slice(0, 2)}) ${n.slice(2, n.length - 4)}-${n.slice(-4)}`;
};
