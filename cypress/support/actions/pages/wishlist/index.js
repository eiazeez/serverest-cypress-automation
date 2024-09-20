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
    },

    shouldBeEmpty: () => {
        cy.get(el.emptyMessage).should('be.visible')
    },

    clearList: () => {
        cy.get(el.clearList).click()
    },

    increaseQuantity: (product) => {
        cy.get(el.name)
            .contains(product.nome)
            .parents('.card-body')
            .find(el.increaseQuantity)
            .click()
        cy.get(el.total)
            .contains('2')
    }

}