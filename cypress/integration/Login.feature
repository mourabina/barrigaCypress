Feature: Logar no Site do Senhor Barriga

    Scenario: Efetuar Login Com Sucesso
        Given que estou na pagina do Senhor Barriga
        When digitos usuario "b@b" e senha "b"
        And clico no botao Entrar
        Then devo visualizar deve ser visualizado a mensagem "Bem vindo, B!"

     

