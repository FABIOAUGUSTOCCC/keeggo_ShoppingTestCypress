class HomePage {
    visit() {
      cy.visit('/');
    }
  
    searchForProduct(product) {
      cy.xpath('//*[@id="mobileSearch"]/input',{ timeout: 30000 }).type(`${product}{enter}`);
    }
  }
  
  export default HomePage;
  