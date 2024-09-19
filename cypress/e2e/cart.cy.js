import { Cart } from '../support/actions/cart'

describe('Dado que estou logado no sistema', function() {

    beforeEach(function(){
        cy.fixture('users').then(function(user){
            this.users = user
        })
    })

    context('Quando acesso a página de carrinho', function() {

        const message = 'Em construção aguarde'

        it(`Deve ser possível validar a mensagem ${message}`, function() {

            const user = this.users.login_user

            cy.apiLogin(user)
            
            Cart.go()
            Cart.shouldBeVisible()
    
        })
    })
})