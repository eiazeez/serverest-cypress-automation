import { el } from './elements.js'

export const Header = {

    goToCart: () => {
        cy.get(el.cart).click()
    },

    goToWishlist: () => {
        cy.get(el.wishlist).click()
    },

    goToHome: () => {
        cy.get(el.home).click()
    },

    logout: () => {
        cy.get(el.logout).click()
    }

}