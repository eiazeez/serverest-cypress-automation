import { Wishlist } from '../support/actions/pages/wishlist'
import { Home } from  '../support/actions/pages/home'

describe('Dado que possuo uma conta válida', function() {

    beforeEach(function(){
        cy.fixture('users').then(function(user){
            this.users = user
        })
        cy.fixture('products').then(function(product){
            this.products = product
        })
    })

    context('Quando acesso a Lista de Compras sem adicionar produtos', function() {

        it('Então o sistema deve me retornar que a Lista de Compras está vazia', function() {

            const user = this.users.login_user
            
            cy.apiLogin(user)

            Wishlist.go()
            Wishlist.shouldBeEmpty()
        })

    })

    context('Quando acesso a Lista de Compras com produtos inclusos', function() {

        it('Então deve ser possível limpar a lista', function() {

            const user = this.users.login_user
            const admin = this.users.admin_user
            const product = this.products.remove_product
            
            cy.apiLogin(admin)
            cy.apiDeleteProduct(product)
            cy.apiAddProduct(product)

            cy.apiLogin(user)
            Home.go()
            Home.addToWishlist(product)
            Wishlist.shouldHaveProduct(product)
            Wishlist.clearList()
            Wishlist.shouldBeEmpty()

        })

        it('Então deve ser possível aumentar a quantidade de um produto', function() {
           
            const user = this.users.login_user
            const admin = this.users.admin_user
            const product = this.products.increase_quantity
            
            cy.apiLogin(admin)
            cy.apiDeleteProduct(product)
            cy.apiAddProduct(product)

            cy.apiLogin(user)
            Home.go()
            Home.addToWishlist(product)
            Wishlist.shouldHaveProduct(product)
            Wishlist.increaseQuantity(product)

        })

    })

})
