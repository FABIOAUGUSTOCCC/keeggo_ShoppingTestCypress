# Teste de Automação

Bem-vindo ao teste de automação! Este documento fornece instruções para configurar o ambiente, executar os testes.

## Objetivo

O objetivo deste teste é criar um framework de automação utilizando as tecnologias e executar os desafios web e API especificados. Ao final, você deverá fornecer um projeto com instruções claras para instalação e execução dos testes automatizados.

## Tecnologias Utilizadas

- **Cucumber:** Para a escrita dos cenários seguindo BDD
- **JavaScript:** Linguagem de programação
- **Cypress:** Framework para automação de testes

## Desafios

### Desafio Web

Utilize o site [Advantage Online Shopping](https://advantageonlineshopping.com/#/) e implemente os seguintes cenários:

1. **Buscar um produto**
2. **Incluir o produto no carrinho**
3. **Validar os produtos incluídos no carrinho na tela de pagamento**

Os testes devem ser escritos em arquivos `.feature` e implementados usando JavaScript com Cypress e Cucumber.

### Desafio API

Acesse a documentação das APIs em [Advantage Online Shopping API Documentation](https://www.advantageonlineshopping.com/api/docs/) e execute os seguintes testes:

1. **Buscar um produto (GET)**
   - **Endpoint:** `https://www.advantageonlineshopping.com/catalog/api/v1/products/search`
   - Verifique se a lista de produtos retornada corresponde à sua busca.
   - Valide o status code da resposta.

2. **Atualizar a imagem de um produto (POST)**
   - **Endpoint:** `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{userId}/{source}/{color}`
   - Certifique-se de que o produto foi atualizado corretamente.
   - Verifique o ID da nova imagem inserida.
   - Valide o status code da resposta.

**Observações:**

- É necessário criar um usuário e fazer login antes de atualizar a imagem de um produto.
- A estrutura do projeto deve seguir o padrão Page Objects.
- Não utilize a estrutura de blocos `it` diretamente; use as abstrações fornecidas pelo Cucumber e Cypress.

## Instruções de Instalação e Execução

1. **Pré-requisitos**

   - Node.js (versão 14.x ou superior)
   - npm (gerenciador de pacotes do Node.js)

2. **Instalação**

   Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO>

3. **Instale as dependências**

   npm install
   
4. **Execução dos Testes**

    npx cypress open



    
