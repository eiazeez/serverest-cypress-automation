import { el } from './elements'

export const Wishlist = {

    go: () => {
        cy.visit('/minhaListaDeProdutos')
    },

    shouldBeVisible: () => {
        cy.contains('h1', 'Lista de Compras')
    },

    shouldHaveProduct: (product) => {
        cy.get(el.name)
            .contains(product.nome)
            .should('be.visible')
    }

}