import { el } from './elements'

export const Access = {

    visitSignup: () => {
        cy.visit('/cadastrarusuarios')
    },

    fillSignupForm: (user) => {
        cy.get(el.inputName).type(user.name)
        cy.get(el.inputEmail).type(user.email)
        cy.get(el.inputPassword).type(user.password)
        if (user.admin === "true" ) cy.get(el.inputAdmin).check()
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