import { el } from './elements'

export const Access = {

    visitSignup: () => {
        cy.visit('/cadastrarusuarios')
    },

    visitLogin: () => {
        cy.visit('/login')
    },

    fillSignupForm: (user) => {
        if (user.name)      cy.get(el.inputName).type(user.name)
        if (user.email)     cy.get(el.inputEmail).type(user.email)
        if (user.password)  cy.get(el.inputPassword).type(user.password)
        if (user.admin === "true" ) cy.get(el.inputAdmin).check()
    },

    fillLoginForm: (user) => {
        if (user.email)     cy.get(el.inputEmail).type(user.email)
        if (user.password)  cy.get(el.inputPassword).type(user.password)
    },

    submit: () => {
        cy.get(el.submit).click()
    },

    messageShouldBe: (message) => {
        cy.get('button[data-dismiss="alert"]')
          .siblings()
          .should('have.text', message)
    }
 
}