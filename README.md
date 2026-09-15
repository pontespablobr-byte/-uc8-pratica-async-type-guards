# uc8-pratica-async-type-guards

Prática da UC8 sobre Async/Await, Promise.all, modo estrito do TypeScript e Type Guards.

## O que cada arquivo faz

### entidades.ts

Define os tipos e interfaces utilizadas pela aplicação:

- Categoria
- Produto
- Movimentação
- TipoMovimentação

Essas definições servem como base para a tipagem de todo o projeto. 

### servicos.ts

Contém os dados simulados e as funções assíncronas da aplicação.

Funções implementadas:

- carregarProdutos()
- carregarCategorias()
- carregarMovimentacoes()
- carregarMovimentacoesComAviso()
- carregarTudo()
- buscarProduto()
- nomeDoProduto()
- tamanhoDaDescricao()

Também demonstra o uso de Async/Await, Promise.all e tratamento de erros com try/catch. 

### guardas.ts

Contém os Type Guards do projeto:

- ehProduto()
- ehMovimentacao()

Essas funções permitem identificar corretamente os tipos durante a execução e ajudam o TypeScript a entender qual tipo está sendo utilizado em determinados trechos do código. 

### main.ts

Arquivo principal da aplicação.

Responsável por:

- carregar os dados
- executar operações assíncronas
- utilizar Promise.all
- utilizar os Type Guards
- filtrar movimentações de saída
- exibir os resultados no console

Também executa uma falha simulada para demonstrar o tratamento de erros da aplicação.

## Sobre o projeto

Este projeto foi desenvolvido para praticar conceitos de TypeScript abordados na UC8, incluindo funções assíncronas com Async/Await, carregamento paralelo com Promise.all, tratamento de erros utilizando try/catch, modo estrito do TypeScript e utilização de Type Guards para refinamento de tipos. 

## Saída da execução

```text
Falha ao carregar movimentacoes Error: Falha ao carregar movimentacoes

Produtos: 2
Categorias: 2
Movimentações: 0

Nome do produto 1: Notebook
Tamanho da descricao do produto 1: 15

Saídas: 0
```

## Sobre Type Guards

Type Guards não convertem o valor.

Eles apenas informam ao TypeScript qual é o tipo correto daquele objeto em determinado trecho do código.

O valor continua exatamente o mesmo em tempo de execução. O que muda é apenas a forma como o compilador interpreta o tipo.

Em outras palavras, o Type Guard não altera os dados. Ele apenas permite que o compilador trabalhe com mais segurança, reconhecendo propriedades e métodos disponíveis para cada tipo identificado.