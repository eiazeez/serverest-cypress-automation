import { el } from './elements'

export const Home = { 

    shouldBeVisible: () => {
        cy.url().should('include', '/home')
        cy.get(el.title).should('be.visible')
    }

}