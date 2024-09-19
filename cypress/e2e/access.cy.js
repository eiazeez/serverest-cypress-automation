import { Access } from "../support/actions/access"
import { Home } from "../support/actions/home"

describe('Dado que estou na página de cadastro', function() {

  beforeEach(function(){
    cy.fixture('access').then(function(user){
        this.data = user
    })
  })

  context('Quando preencho os campos com dados válidos', function() {

    it('Então deve ser possível cadastrar um user comum com sucesso', function() {

      const user = this.data.signup_user

      cy.apiDeleteUser(user)

      Access.visitSignup()
      Access.fillSignupForm(user)
      Access.submit()
      Access.messageShouldBe('Cadastro realizado com sucesso')
      Home.shouldBeVisible()
      
    })

    it('Então deve ser possível cadastrar um user Admin com sucesso', function() {

      const user = this.data.admin_user

      cy.apiDeleteUser(user)

      Access.visitSignup()
      Access.fillSignupForm(user)
      Access.submit()
      Access.messageShouldBe('Cadastro realizado com sucesso')
      Home.shouldBeVisible()
      
    })

    it('Então não deve ser possível cadastrar um user já cadastrado', function() {

      const user = this.data.duplicated_user

      cy.apiDeleteUser(user)
      cy.apiPostUser(user)

      Access.visitSignup()
      Access.fillSignupForm(user)
      Access.submit()
      Access.messageShouldBe('Este email já está sendo usado')
      
    })

  })  

})