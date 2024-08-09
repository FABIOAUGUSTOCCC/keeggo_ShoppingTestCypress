class CartPage {
    openCart() {
      cy.xpath('//a[@id="shoppingCartLink"]').click();
    }
  
    verifyProductInCart() {
      cy.xpath(`//*[@id="shoppingCart"]/table/tbody/tr/td[2]/label`).should('exist');
    }
  }
  
  export default CartPage;
  