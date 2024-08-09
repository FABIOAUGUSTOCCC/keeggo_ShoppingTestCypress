Feature: Shopping WEB

  Scenario: Buscar um produto e exibir os resultados
    Given que eu estou na página inicial do site Advantage Online Shopping
    When eu busco por "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES"
    Then eu devo ver o produto na tela

  Scenario: Adicionar um produto ao carrinho
    Given que eu estou na página inicial do site Advantage Online Shopping
    When eu busco por "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" e adiciono ao carrinho
    Then eu devo ver o produto no carrinho

  Scenario: Validar produtos no carrinho na tela de pagamento
    Given que eu estou na página inicial do site Advantage Online Shopping
    When eu busco por "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES", adiciono ao carrinho e vou para a tela de pagamento
    Then eu devo ver o produto na tela de pagamento
