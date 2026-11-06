// Depoimentos REAIS dos primeiros clientes, com autorização por escrito.
// Enquanto a lista estiver vazia, a página mostra o convite para ser um dos primeiros.
export interface Depoimento {
  texto: string;
  nome: string;
  estabelecimento: string;
  cidade: string;
  foto?: string; // caminho em /public, ex.: /img/clientes/joao.webp
}

export const depoimentos: Depoimento[] = [];
