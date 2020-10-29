/// <reference types="Cypress" />

/// <reference types="Cypress" />

import LoginElements from '../../support/elements/loctores'
const url = Cypress.config("baseUrl")

class LoginPage {

    acessarSite() {
        cy.visit(url)
        cy.screenshot()
    }

    digitarUsuario(usuario){
        cy.get(LoginElements.LOGIN.USER).type(usuario)
        cy.screenshot()
    } 
    
    digiteSenha(senha){
        cy.get(LoginElements.LOGIN.SENHA).type(senha)
        cy.screenshot()
    }

    clicarBotaoEntrar(){
        cy.get(LoginElements.LOGIN.BTNLOGIN).click()
        cy.screenshot()
    }

    validarMensagem(msg){
        cy.get('.toast-menssage').should('exit')
        

    }
}

export default LoginPage;