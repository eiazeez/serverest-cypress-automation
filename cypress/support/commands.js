// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('apiGetUserByEmail', (email) => {

    cy.api({
        url: `${Cypress.env('api_server')}/usuarios/`,
        method: 'GET'
    }).then(response => {
        expect(response.status).to.eq(200)
        const users = response.body.usuarios || response.body
        expect(Array.isArray(users)).to.be.true
        const user = users.find(u => u.email === email)
        return user
    })
})

Cypress.Commands.add('apiDeleteUser', (data) => {
        
    cy.apiGetUserByEmail(data.email).then(user => {
        expect(user).to.not.be.undefined
        const userId = user._id

        cy.api({
            url: `${Cypress.env('api_server')}/usuarios/${userId}`,
            method: 'DELETE'
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })    
})

Cypress.Commands.add('apiPostUser', (data) => {
    cy.api({
        url: `${Cypress.env('api_server')}/usuarios`,
        method: 'POST',
        body: {
            nome: data.name,
            email: data.email,
            password: data.password,
            administrador: data.admin
        }
        
    }).then(response => {
        expect(response.status).to.eq(201)
    })
})

Cypress.Commands.add('apiLogin', (data) => {

    cy.apiDeleteUser(data)
    cy.apiPostUser(data)
    cy.api({
        url: `${Cypress.env('api_server')}/login`,
        method: 'POST',
        body: {
            email: data.email,
            password: data.password
        }
    }).then(response => {
        window.localStorage.setItem('serverest/userToken', response.body.authorization)
    })

})

Cypress.Commands.add('getProductByName', (name) => {
    return cy.api({  
                url: `${Cypress.env('api_server')}/produtos/`,
                method: 'GET'
            }).then(response => {
                expect(response.status).to.eq(200)
                const products = response.body.produtos || response.body
                expect(Array.isArray(products)).to.be.true
                const product = products.find(p => p.nome === name)  
                return product  
        })
})

Cypress.Commands.add('apiAddProduct', (product) => {

    cy.api({
        url: `${Cypress.env('api_server')}/produtos`,
        method: 'POST',
        headers: { Authorization: `${window.localStorage.getItem('serverest/userToken')}` },
        body: {
            nome: product.nome,
            preco: product.preco,
            descricao: product.descricao,
            quantidade: product.quantidade
        }
    }).then(response => {
        expect(response.status).to.eq(201)
        
    })
})

Cypress.Commands.add('apiDeleteProduct', (data) => {
    cy.getProductByName(data.nome).then(product => {
        expect(product).to.not.be.undefined
        const productId = product._id

        cy.log(`Product ID: ${productId}`)

        cy.api({
            url: `${Cypress.env('api_server')}/produtos/${productId}`,
            method: 'DELETE',
            headers: { Authorization: `${window.localStorage.getItem('serverest/userToken')}` }
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })    
})