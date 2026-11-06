import { localPath } from '@/lib/config';
import { Header } from './Header';
import { Icon } from './Icon';
import { Rodape } from './Rodape';

export function PaginaLegal({ titulo, atualizado, children }: { titulo: string; atualizado: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="legal">
        <div className="wrap">
          <a href={localPath('/')} className="voltar"><Icon nome="esq" size={16} /> Voltar para o início</a>
          <h1>{titulo}</h1>
          <p>Última atualização: {atualizado}</p>
          <p className="aviso-modelo">
            Modelo inicial. Revise este texto com um advogado e preencha os dados da sua empresa (razão social, CNPJ e
            endereço) antes de começar a vender.
          </p>
          {children}
        </div>
      </main>
      <Rodape />
    </>
  );
}
