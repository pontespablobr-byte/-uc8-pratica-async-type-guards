import type { Categoria, Produto, Movimentacao } from './entidades.js';

export async function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const categorias: Categoria[] = [
  { id: 1, nome: 'Informática' },
  { id: 2, nome: 'Periféricos' },
];

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Notebook',
    descricao: 'Notebook Dell',
    categoriaId: 1,
    quantidade: 10,
  },
  {
    id: 2,
    nome: 'Mouse',
    categoriaId: 2,
    quantidade: 50,
  },
];

const movimentacoes: Movimentacao[] = [
  {
    id: 1,
    produtoId: 1,
    tipo: 'entrada',
    quantidade: 5,
    data: '2025-09-14',
  },
  {
    id: 2,
    produtoId: 2,
    tipo: 'saida',
    quantidade: 2,
    data: '2025-09-15',
  },
];

export async function carregarProdutos(): Promise<Produto[]> {
  await esperar(500);
  return produtos;
}

export async function carregarCategorias(): Promise<Categoria[]> {
  await esperar(500);
  return categorias;
}

export async function carregarMovimentacoes(
  falhar: boolean,
): Promise<Movimentacao[]> {
  await esperar(500);

  if (falhar) {
    throw new Error('Falha ao carregar movimentacoes');
  }

  return movimentacoes;
}

export async function carregarMovimentacoesComAviso(
  falhar: boolean,
): Promise<Movimentacao[]> {
  try {
    return await carregarMovimentacoes(falhar);
  } catch (erro) {
    console.error('Erro ao carregar movimentações:', erro);
    return [];
  }
}

export async function carregarTudo(): Promise<
  [Produto[], Categoria[], Movimentacao[]]
> {
  return Promise.all([
    carregarProdutos(),
    carregarCategorias(),
    carregarMovimentacoesComAviso(true),
  ]);
}

export function buscarProduto(id: number): Produto | undefined {
  return produtos.find((produto) => produto.id === id);
}

export function nomeDoProduto(id: number): string {
  const produto = buscarProduto(id);

  return produto?.nome ?? 'produto nao encontrado';
}

export function tamanhoDaDescricao(id: number): number {
  const produto = buscarProduto(id);

  return produto?.descricao?.length ?? 0;
}