/// <reference types="Cypress" />

import LoginPage from '../../support/pageobjects/LoginPage'
const loginPage = new LoginPage



Given(/^que estou na pagina do Senhor Barriga$/, () => {
	loginPage.acessarSite()
});

When(/^digitos usuario "([^"]*)" e senha "([^"]*)"$/, (user,senha) => {
	console.log(user,senha);
    loginPage.digitarUsuario(user)
    loginPage.digiteSenha(senha)
});

When(/^clico no botao Entrar$/, () => {
	loginPage.clicarBotaoEntrar()
});

Then(/^devo visualizar deve ser visualizado a mensagem "([^"]*)"$/, (msg) => {
	console.log(msg);
});

