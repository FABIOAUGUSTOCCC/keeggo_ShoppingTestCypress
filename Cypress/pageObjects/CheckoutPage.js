class CheckoutPage {
    proceedToCheckout() {
      cy.xpath('//button[@id="checkOutButton"]').click();
    }
  
    verifyProductInCheckout() {
      cy.xpath(`//*[@id="product"]/td[2]/a/h3`).should('exist');
    }
  }
  
  export default CheckoutPage;
  