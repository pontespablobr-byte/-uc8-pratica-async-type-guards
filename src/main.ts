import {
  carregarTudo,
  nomeDoProduto,
  tamanhoDaDescricao,
} from './servicos.js';

import { ehMovimentacao } from './guardas.js';

async function executar(): Promise<void> {
  const [produtos, categorias, movimentacoes] =
    await carregarTudo();

  console.log(`Produtos: ${produtos.length}`);
  console.log(`Categorias: ${categorias.length}`);
  console.log(`Movimentações: ${movimentacoes.length}`);

  console.log(`Nome do produto 1: ${nomeDoProduto(1)}`);

  console.log(
    `Tamanho da descrição do produto 1: ${tamanhoDaDescricao(1)}`
  );

  const itens = [...produtos, ...movimentacoes];

  const saidas = itens.filter(
    (item) => ehMovimentacao(item) && item.tipo === 'saida'
  );

  console.log(`Saídas: ${saidas.length}`);
}

executar().catch((erro) => {
  console.error('Erro na execução:', erro);
});

