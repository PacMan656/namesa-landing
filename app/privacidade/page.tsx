import type { Metadata } from 'next';
import { PaginaLegal } from '@/components/Legal';
import { site } from '@/lib/config';

export const metadata: Metadata = { title: 'Política de privacidade', alternates: { canonical: '/privacidade' } };

export default function Privacidade() {
  return (
    <PaginaLegal titulo="Política de privacidade" atualizado="novembro de 2026">
      <p>
        Esta política explica quais dados pessoais o NaMesa coleta, para que eles servem e como você pode exercer os seus
        direitos, de acordo com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).
      </p>
      <h2>1. Dados deste site</h2>
      <p>
        Quando você preenche o formulário de contato, recebemos nome, nome do estabelecimento, WhatsApp, cidade, número
        aproximado de mesas e a mensagem, se houver. Usamos esses dados só para responder ao seu contato e liberar o
        teste grátis. A base legal é o seu consentimento, que você pode retirar a qualquer momento.
      </p>
      <h2>2. Dados dos clientes do restaurante</h2>
      <p>
        No app, o cliente do restaurante faz o pedido sem criar conta. Se ele quiser receber o comprovante, informa um
        e-mail ou WhatsApp, que é usado apenas para esse envio e não fica guardado no sistema. Nesse caso, o restaurante é
        o controlador dos dados e o NaMesa atua como operador.
      </p>
      <h2>3. Compartilhamento</h2>
      <p>
        Não vendemos dados pessoais. Eles podem passar por fornecedores necessários para o serviço funcionar, como
        hospedagem, envio de e-mail e envio de mensagens pelo WhatsApp, sempre com o mínimo necessário.
      </p>
      <h2>4. Por quanto tempo guardamos</h2>
      <p>
        Os dados do formulário ficam guardados enquanto durar a conversa comercial ou a assinatura e são apagados quando
        não forem mais necessários, salvo obrigação legal.
      </p>
      <h2>5. Seus direitos</h2>
      <p>
        Você pode pedir acesso, correção, exclusão ou portabilidade dos seus dados, e informações sobre o uso deles,
        pelo e-mail {site.email || 'de contato (preencha no .env.local)'}.
      </p>
      <h2>6. Cookies</h2>
      <p>Este site não usa cookies de rastreamento nem de publicidade.</p>
    </PaginaLegal>
  );
}
