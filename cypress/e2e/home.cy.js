import { Header } from "../support/actions/components/header"
import { Cart } from "../support/actions/pages/cart"
import { Wishlist } from "../support/actions/pages/wishlist"
import { Access } from "../support/actions/pages/access"
import { Home } from "../support/actions/pages/home"

describe('Dado que possuo uma conta válida', function() {

    beforeEach(function(){
        cy.fixture('users').then(function(user){
            this.users = user
        })
        cy.fixture('products').then(function(product){
            this.products = product
        })
    })

    context('Quando estou logado no sistema', function() {

        it('Então deve ser possível visualizar a HomePage', function() {

            const user = this.users.login_user
            
            cy.apiLogin(user)

            Home.go()
            Home.shouldBeVisible()

        })

        it('Então deve ser possível ir para a página de carrinho', function() {
                
                const user = this.users.login_user
                
                cy.apiLogin(user)
    
                Home.go()
                Header.goToCart()
                Cart.shouldBeVisible()

        })

        it('Então deve ser possível ir para a página de Lista de compras', function() {
                
            const user = this.users.login_user
            
            cy.apiLogin(user)

            Home.go()
            Header.goToWishlist()
            Wishlist.shouldBeVisible()
            
        })

        it('Então deve ser possível deslogar', function() {

            const user = this.users.login_user
            
            cy.apiLogin(user)

            Home.go()
            Header.logout()
            Access.shouldBeVisible()
            
        })

        it('Então deve ser possível adicionar um produto na lista de Compras', function() {

            const user = this.users.login_user
            const admin = this.users.admin_user
            const product = this.products.add_to_Wishlist
            
            cy.apiLogin(admin)
            cy.apiDeleteProduct(product)
            cy.apiAddProduct(product)

            cy.apiLogin(user)
            Home.go()
            Home.addToWishlist(product)
            Wishlist.shouldHaveProduct(product)

        })

        it('Então deve ser possível pesquisar por um produto', function() {

            const user = this.users.login_user
            const admin = this.users.admin_user
            const product = this.products.search_product
            
            cy.apiLogin(admin)
            cy.apiDeleteProduct(product)
            cy.apiAddProduct(product)

            cy.apiLogin(user)
            Home.go()
            Home.search(product)
            Home.ShouldHave(product)

        })
    })
})
