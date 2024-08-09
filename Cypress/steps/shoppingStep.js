import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
import CartPage from '../pageObjects/CartPage'
import CheckoutPage from '../pageObjects/CheckoutPage'

const homePage = new HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

Given('que eu estou na página inicial do site Advantage Online Shopping', () => {
  homePage.visit()
});

When('eu busco por {string}', (produto) => {
  homePage.searchForProduct(produto)
})

When('eu busco por {string} e adiciono ao carrinho', (produto) => {
  homePage.searchForProduct(produto)
  productPage.selectProduct(produto)
  productPage.addToCart()
})

When('eu busco por {string}, adiciono ao carrinho e vou para a tela de pagamento', (produto) => {
  homePage.searchForProduct(produto)
  productPage.selectProduct(produto)
  productPage.addToCart()
  cartPage.openCart()
  checkoutPage.proceedToCheckout()
})

Then('eu devo ver o produto na tela', () => {
  cy.xpath(`//*[@id="15"]`).should('exist')
})

Then('eu devo ver o produto no carrinho', (produto) => {
  cartPage.openCart()
  cartPage.verifyProductInCart(produto)
})

Then('eu devo ver o produto na tela de pagamento', (produto) => {
  checkoutPage.verifyProductInCheckout(produto)
})




