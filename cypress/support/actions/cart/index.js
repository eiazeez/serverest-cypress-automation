

export const Cart = {

    go: () => {
        cy.visit('/carrinho')
    },

    shouldBeVisible: () => {
        cy.get('h1').should('be.visible').should('to.contain', 'Em construção aguarde')
    }

}