import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ProdutoController from '../support/controller/ProdutoController'
const produtoController = new ProdutoController

Given("que estou no site Advantage Shopping", () => {  
})

Given("que possuo as credenciais para realizar a atualização da imagem do produto", () => {
    produtoController.criarUsuario()
    produtoController.fazerLogin()
})

When("faço a busca pelo produto {string}", (paramProduct) => {
    produtoController.buscarProduto(paramProduct)
})

When("realizo a atualização da imagem", () => {
    produtoController.atualizarImagem()
})

Then("valido que o produto {string} foi retornado com sucesso", (paramProduct) => {
    produtoController.validarStatusCode()
    produtoController.validarBuscaProduto(paramProduct)
})

Then("valido que a atualização foi feita com sucesso", () => {
    produtoController.validarStatusCode()
    
})