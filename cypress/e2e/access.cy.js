import { Access } from "../support/actions/access"
import { Home } from "../support/actions/home"

describe('Dado que estou na página de acesso', function() {

  beforeEach(function(){
    cy.fixture('access').then(function(user){
        this.access = user
        this.missing_fields = user.missing_fields
    })
  })

  context('Quando preencho os campos de cadastro com dados válidos', function() {

    it('Então deve ser possível cadastrar um user comum com sucesso', function() {

      const user = this.access.signup_user

      cy.apiDeleteUser(user)

      Access.visitSignup()
      Access.fillSignupForm(user)
      Access.submit()
      Access.messageShouldBe('Cadastro realizado com sucesso')
      Home.shouldBeVisible()
      
    })

    it('Então deve ser possível cadastrar um user Admin com sucesso', function() {

      const user = this.access.admin_user

      cy.apiDeleteUser(user)

      Access.visitSignup()
      Access.fillSignupForm(user)
      Access.submit()
      Access.messageShouldBe('Cadastro realizado com sucesso')
      Home.shouldBeVisible()
      
    })

  })  

  context('Quando não preencho os campos de cadastro com dados válidos', function() {
    it('Então não deve ser possível cadastrar um user já cadastrado', function() {

      const user = this.access.duplicated_user
  
      cy.apiDeleteUser(user)
      cy.apiPostUser(user)
  
      Access.visitSignup()
      Access.fillSignupForm(user)
      Access.submit()
      Access.messageShouldBe('Este email já está sendo usado')
      
    })

    const missingFields = [
      { field: 'Nome',  data: 'missing_name',     output: 'Nome é obrigatório' },
      { field: 'Email', data: 'missing_email',    output: 'Email é obrigatório' },
      { field: 'Senha', data: 'missing_password', output: 'Password é obrigatório' }
    ]

    missingFields.forEach(function(miss) {
      it(`Então deve retornar "${miss.output}" ao tentar cadastrar um user sem preencher o campo de "${miss.field}"`, function() {

        const user = this.missing_fields[miss.data]

        Access.visitSignup()
        Access.fillSignupForm(user)
        Access.submit()
        Access.messageShouldBe(miss.output)
  
      })
    })
  })

  context('Quando preencho os campos de login com dados válidos', function() {

    it('Então deve ser possível logar como User com sucesso', function() {

      const user = this.access.signup_user

      cy.apiDeleteUser(user)
      cy.apiPostUser(user)

      Access.visitLogin()
      Access.fillLoginForm(user)
      Access.submit()
      Home.shouldBeVisible()
      
    })

    it('Então deve ser possível logar como Admin com sucesso', function() {

      const user = this.access.admin_user

      cy.apiDeleteUser(user)
      cy.apiPostUser(user)

      Access.visitLogin()
      Access.fillLoginForm(user)
      Access.submit()
      Home.shouldBeVisible()
      
    })

  })

  context('Quando não preencho os campos de cadastro com dados válidos', function() {

    it('Então não deve ser possível logar com um user não cadastrado', function() {
  
        const user = this.access.deleted_user
  
        cy.apiDeleteUser(user)
  
        Access.visitLogin()
        Access.fillLoginForm(user)
        Access.submit()
        Access.messageShouldBe('Email e/ou senha inválidos')
    })

    const missingFields = [
      { field: 'Email', data: 'missing_email',    output: 'Email é obrigatório' },
      { field: 'Senha', data: 'missing_password', output: 'Password é obrigatório' }
    ]

    missingFields.forEach(function(miss) {
      it(`Então deve retornar "${miss.output}" ao tentar logar sem preencher o campo de "${miss.field}"`, function() {

        const user = this.missing_fields[miss.data]

        Access.visitLogin()
        Access.fillLoginForm(user)
        Access.submit()
        Access.messageShouldBe(miss.output)
  
      })
    })

  })

})