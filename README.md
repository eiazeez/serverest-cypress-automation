<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <img src="image/serverest-logo.png" alt="drawing" style="width:300px;"/>
  <h1>Serverest - Cypress Automation [azeez] :rocket:</h1>

  <p>
    Bem-vindo ao projeto Serverest - Cypress Automation! Este projeto é uma estrutura já montada para automação de testes com Cypress no site Serverest. :tada:
  </p>
  
  
<!-- Badges -->
![Static Badge](https://img.shields.io/badge/MIT-brightgreen?style=for-the-badge&label=LICENSE)
![Static Badge](https://img.shields.io/badge/13.14.2-brightgreen?style=for-the-badge&label=CYPRESS)
![Static Badge](https://img.shields.io/badge/DONE-brightgreen?style=for-the-badge&label=STATUS)


</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Índice

- [Sobre o projeto](#star2-sobre-o-projeto)
  * [Time-lapse](#camera-time-lapse)
  * [Tech Stack](#space_invader-tech-stack)
  * [Dev Dependencies](#%EF%B8%8F-dev-dependencies)
  * [Páginas testadas](#-páginas-testadas)
- [Getting Started](#toolbox-getting-started)
  * [Pré-requisitos](#bangbang-pré-requisitos)
  * [Instalação](#gear-instalação)
  * [Rodando os testes](#test_tube-rodando-os-testes)
  * [Rodando em headless](#running-rodando-em-headless)
- [Padronização de Código](#eyes-padronização-de-código)
- [Massa de dados](#card_index_dividers-massa-de-dados)
- [Contato](#handshake-contato)

<!-- About the Project -->
## :star2: Sobre o projeto


<!-- Screenshots -->
### :camera: Time-lapse
 

<div align="center"> 
  <img src="image/timelapse.gif" width="800" height="auto" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack
> ![Static Badge](https://img.shields.io/badge/CYPRESS-brightgreen?style=for-the-badge&logo=cypress&logoColor=%23FFFFFF)

<!-- Dev Dependencies -->
### 🛠️ Dev Dependencies
> ![Static Badge](https://img.shields.io/badge/1.5.0-fe6b5c?style=for-the-badge&logo=cloudfoundry&logoColor=%23ffffff&label=CYPRESS-PLUGIN-API&labelColor=orange)

<!-- Roadmap -->
## 📄 Páginas testadas

* [x] Cart  |  -> Testes limitados devido ao desenvolvimento da funcionalidade estar em andamento
* [x] Home
* [x] Wishlist
* [x] Access
  * [ ] Signup
  * [ ] Login 

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Pré-requisitos

Esse projeto utiliza NPM como Package Manager
> ![Static Badge](https://img.shields.io/badge/20.10.0-GREEN?style=for-the-badge&logo=nodedotjs&logoColor=%23ffffff&label=Node.JS)

> ![Static Badge](https://img.shields.io/badge/10.8.2-GREEN?style=for-the-badge&logo=npm&logoColor=%23ffffff&label=NPM)

<!-- Installation -->
### :gear: Instalação

Clone o repositório para sua máquina
```bash
  git clone https://github.com/eiazeez/serverest-cypress-automation.git
```

Vá para a pasta do repositório

```bash
  cd my-project
```

Instale as depedências do projeto utilizando npm
```bash
  npm install
```
---
<!-- Running Tests -->
### :test_tube: Rodando os testes

Para rodar os testes com a interface gráfica do Cypress, utilize o comando abaixo
```bash
  npx cypress open
```

<!-- Run headless -->
### :running: Rodando em headless

Para rodar em headless, pode utilizar o comando abaixo

```bash
  npx cypress run --browser chrome
```


<!-- Usage -->
## :eyes: Padronização de código

Este projeto trabalha com PageObjects + Cypress Custom Commands


```javascript
import SignupPage from "../support/pages/signup"

it('Então deve ser possível se cadastrar com sucesso', function(){

  const data = this.data.registerUser

  cy.apiDelete(data)

  cy.visit('/login')

  SignupPage.fillSignupForm(data)
  SignupPage.submitSignupForm()

})
```

<!-- Usage -->
## :card_index_dividers: Massa de dados

Este projeto trabalha com massa de dados fixa utilizando a pasta fixture como repositório da massa de dados.

Para os produtos, foi utilizado a nomeclatura "Isaac D." ao final do nome do produto
```json
"add_to_Wishlist": {
      "nome": "Apple MacBook Pro 16 - Isaac D.",
      "preco": 18490,
      "descricao": "Notebook de alta performance",
      "quantidade": 58
    }
```

Quanto aos usuários, os emails são do domínio fictício "@isaac.com" 

```json
 "login_user": {
      "name": "Usuário de Teste - Login",
      "email": "usuario-teste-login@isaac.com",
      "password": "senhaComum",
      "admin": "false"
  }
```

E para garantir que a massa fixa funcione em todas as execuções sem interferências externas, utilizo a preparação de massa para seus respectivos testes. 

```javascript
 it('Então não deve ser possível cadastrar um user já cadastrado', function() {

      const user = this.users.duplicated_user
  
      cy.apiDeleteUser(user)
      cy.apiPostUser(user)
  
      Access.visitSignup()
      Access.fillSignupForm(user)
      Access.submit()
      Access.messageShouldBe('Este email já está sendo usado')
      
    })
  })
```

No caso acima, para garantir a massa fixa, é deletado através do "cy.apiDeleteUser(user)" e criado o usuário usando "cy.apiPostUser(user)" para garantir que o usuário já exista e o teste possar ser validado.

<!-- Contact -->
## :handshake: Contato
O Serverest - Cypress Automation [azeez] é um projeto de automação criado por:

👨‍🏫 - Isaac Douglas
> 🌐 Seu Linkedin é [linkedin.com/in/isaacdouglas](https://www.linkedin.com/in/isaacdouglas/)

> 💻 Seu github é [github.com/eiazeez](https://github.com/eiazeez)