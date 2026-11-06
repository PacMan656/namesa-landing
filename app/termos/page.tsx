import { localPath } from '@/lib/config';
import type { Metadata } from 'next';
import { PaginaLegal } from '@/components/Legal';
import { site } from '@/lib/config';

export const metadata: Metadata = { title: 'Termos de uso', alternates: { canonical: '/termos' } };

export default function Termos() {
  return (
    <PaginaLegal titulo="Termos de uso" atualizado="novembro de 2026">
      <h2>1. O serviço</h2>
      <p>
        O NaMesa é um sistema online de cardápio digital com pedido na mesa, app do garçom, tela da cozinha e frente de
        caixa, oferecido por assinatura a restaurantes, bares e estabelecimentos similares (o “Contratante”).
      </p>
      <h2>2. Teste grátis e assinatura</h2>
      <ul>
        <li>O Contratante pode testar o NaMesa por {site.diasGratis} dias, sem custo e sem cartão de crédito.</li>
        <li>Após o teste, o uso continua mediante assinatura mensal de R$ {site.preco},00, cobrada antecipadamente.</li>
        <li>Não há fidelidade nem multa: o cancelamento pode ser feito a qualquer momento e vale a partir do ciclo seguinte.</li>
        <li>Em caso de falta de pagamento, o acesso pode ser suspenso até a regularização.</li>
      </ul>
      <h2>3. Responsabilidades do Contratante</h2>
      <ul>
        <li>Manter preços, descrições e disponibilidade do cardápio corretos e atualizados.</li>
        <li>Guardar em sigilo as senhas de acesso do administrador e da equipe.</li>
        <li>Emitir os documentos fiscais exigidos por lei. O comprovante gerado pelo NaMesa é não fiscal.</li>
        <li>Usar fotos e vídeos sobre os quais tenha direito de uso.</li>
      </ul>
      <h2>4. Disponibilidade</h2>
      <p>
        Buscamos manter o serviço disponível de forma contínua. O sistema guarda pedidos no aparelho quando a internet
        cai e os envia quando a conexão volta, mas podem ocorrer interrupções para manutenção ou por falhas de terceiros
        (provedores de internet, hospedagem e serviços de mensagem).
      </p>
      <h2>5. Dados</h2>
      <p>
        O tratamento de dados pessoais segue a nossa <a href={localPath('/privacidade')}>Política de privacidade</a> e a Lei Geral de
        Proteção de Dados (Lei nº 13.709/2018).
      </p>
      <h2>6. Contato</h2>
      <p>Dúvidas sobre estes termos: {site.email || 'preencha o e-mail de contato no .env.local'}.</p>
    </PaginaLegal>
  );
}
