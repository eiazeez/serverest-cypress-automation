<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <img src="https://github.com/eiazeez/AETemplate/assets/92765887/29df0283-cda4-4d6c-8907-e80903ba27c0" alt="logo" width="200" height="auto" />
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

<!-- About the Project -->
## :star2: Sobre o projeto


<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="" width="800" height="auto" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack
> ![Static Badge](https://img.shields.io/badge/CYPRESS-brightgreen?style=for-the-badge&logo=cypress&logoColor=%23FFFFFF)

<!-- Dev Dependencies -->
### 🛠️ Dev Dependencies
> ![Static Badge](https://img.shields.io/badge/1.5.0-fe6b5c?style=for-the-badge&logo=cloudfoundry&logoColor=%23ffffff&label=CYPRESS-PLUGIN-API&labelColor=orange)

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Pré-requisitos

Esse projeto utiliza NPM como Package Manager
> ![Static Badge](https://img.shields.io/badge/20.10.0-GREEN?style=for-the-badge&logo=nodedotjs&logoColor=%23ffffff&label=Node.JS)

> ![Static Badge](https://img.shields.io/badge/10.2.3-GREEN?style=for-the-badge&logo=npm&logoColor=%23ffffff&label=NPM)

<!-- Installation -->
### :gear: Instalação

Clone o repositório para sua máquina
```bash
  git clone https://github.com/eiazeez/AETemplate.git
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

Para rodar os testes, utilize o comando abaixo
```bash
  npx cypress open
```

<!-- Run headless -->
### :running: Rodando em headless

Para rodar emm headless, pode utilizar o comando abaixo

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

<!-- Roadmap -->
## 📄 Páginas testadas

* [x] Cart
* [x] Checkout
* [x] ContactUs
* [x] Home
* [x] Login
* [x] Products
* [x] Signup


<!-- Contact -->
## :handshake: Contato
O Automation Exercise - Cypress Project foi um projeto elaborado em um treinamento mentorado por:

👨‍🏫 - Isaac Douglas
> 🌐 Seu Linkedin é [linkedin.com/in/isaacdouglas](https://www.linkedin.com/in/isaacdouglas/)

> 💻 Seu github é [github.com/eiazeez](https://github.com/eiazeez)

Link para o Projeto Original: [https://github.com/eiazeez/autoExercise](https://github.com/eiazeez/autoExercise)
