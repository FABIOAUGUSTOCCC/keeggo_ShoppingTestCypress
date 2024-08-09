class ProductPage {
    selectProduct() {
      cy.xpath(`//*[@id="15"]`).click();
    }
  
    addToCart() {
      cy.xpath('//*[@id="productProperties"]/div[4]/button').click();
    }
  }
  
  export default ProductPage;
  