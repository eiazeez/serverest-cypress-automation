import { el } from './elements'

export const Home = { 

    go: () => {
        cy.visit('/home')
    },

    shouldBeVisible: () => {
        cy.url().should('include', '/home')
        cy.get(el.title).should('be.visible')
    },

    search: (product) => {
        cy.get(el.search).type(product.nome)
        cy.get(el.searchButton).click()
    },

    ShouldHave: (product) => {
        cy.get(el.name)
            .contains(product.nome)
    },

    addToWishlist: (product) => {
        cy.get(el.name)
            .contains(product.nome)
            .parents(el.card)
            .find(el.addButton)
            .click()
    }

}