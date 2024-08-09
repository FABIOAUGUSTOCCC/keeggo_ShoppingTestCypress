Feature: Shopping API

    Scenario: Buscar Produto
        Given que estou no site Advantage Shopping
        When faço a busca pelo produto "HP H2310 In-ear Headset"
        Then valido que o produto "HP H2310 In-ear Headset" foi retornado com sucesso

    Scenario: Atualizar imagem de produto
        Given que possuo as credenciais para realizar a atualização da imagem do produto
        When realizo a atualização da imagem
        Then valido que a atualização foi feita com sucesso

    
