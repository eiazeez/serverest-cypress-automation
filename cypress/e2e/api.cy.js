

describe('TESTE DE API - USERS', function() {

    beforeEach(function(){
        cy.fixture('users').then(function(user){
            this.users = user
        })
    })

    context('Dados Válidos', function() {

        it('GET USERS', function(){

            cy.api({
                url: `${Cypress.env('api_server')}/usuarios/`,
                method: 'GET'
            }).then(response => {
                expect(response.status).to.eq(200)
                const users = response.body.usuarios || response.body
                expect(Array.isArray(users)).to.be.true
            })

        })

        it('POST USER', function() {

            const user = this.users.api_test

            cy.apiDeleteUser(user)

            cy.api({
                url: `${Cypress.env('api_server')}/usuarios`,
                method: 'POST',
                body: {
                    nome: user.name,
                    email: user.email,
                    password: user.password,
                    administrador: user.admin
                }
                
            }).then(response => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            })
        })

        it('DELETE USER', function() {

            const user = this.users.api_test

            cy.apiDeleteUser(user)
            cy.apiPostUser(user)

            cy.apiGetUserByEmail(user.email).then(user => {
                expect(user).to.not.be.undefined
                const userId = user._id
        
                cy.api({
                    url: `${Cypress.env('api_server')}/usuarios/${userId}`,
                    method: 'DELETE'
                }).then(response => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq('Registro excluído com sucesso')
                })
            })    
        })

    })

})