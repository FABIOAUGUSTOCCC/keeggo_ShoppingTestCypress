const FormData = require('form-data')
const fs = require('fs')
const path = require('path')
const form = new FormData()

class produtoController {
    criarUsuario() {
        const path = 'accountservice/accountrest/api/v1/register'
        cy.readFile('cypress/support/json/requestCreateUser.json').then((fakeUserData) => {
            cy.generateRandomStringName().then((nameRandom) => {
                fakeUserData.loginName = nameRandom
                cy.request({
                    method: 'POST',
                    url: path,
                    body: fakeUserData,
                    failOnStatusCode: false
                }).as('responseApi')
                cy.writeFile('cypress/fixtures/requestCreateUser.json', fakeUserData)
            })
        })
    }

    fazerLogin() {
        const path = 'accountservice/accountrest/api/v1/login'
        cy.readFile('cypress/fixtures/requestCreateUser.json').then((data) => {
            cy.get('@responseApi').then((fakeDataLogin) => {
                const jsonRequest = {
                    email: data.email,
                    loginPassword: data.password,
                    loginUser: fakeDataLogin.body.response.userId
                }
                cy.request({
                    method: 'POST',
                    url: path,
                    body: jsonRequest
                }).as('responseApiToken')
            })
        })
    }

    buscarProduto(paramProduct) {
        const path = "catalog/api/v1/products/search?name="
        cy.request("GET", `${path}${paramProduct}`).as('responseProduto')
    }

    atualizarImagem() {
        form.append('file', fs.createReadStream(path.join(__dirname, '../image/redes.png')), {
            filename: 'redes.png',
            contentType: 'image/png'
        })
        cy.get('@responseApiToken').then((token) => {
            cy.request({
                method: 'POST',
                url: `catalog/api/v1/product/image/${595959}/${1}/${black}`,
                qs: {
                    product_id: 12
                },
                headers: {
                    'accept': '*/*',
                    'Authorization': `Bearer ${token.body.statusMessage.token}`,
                    ...form.getHeaders()
                },
                body: form,
            })
        })
    }

    validarStatusCode() {
        cy.get('@responseProduto').then((responseProduct) => {
            expect(responseProduct.status).to.eq(200)
        })
    }

    validarBuscaProduto(paramProduct) {
        cy.get('@responseProduto').then((responseProduct) => {
            expect(responseProduct.body[0].products[0].productName).to.eq(paramProduct)
            expect(responseProduct.body[0].products).to.have.lengthOf(1)
        })
    }

}
module.exports = produtoController