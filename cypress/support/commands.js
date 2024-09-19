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