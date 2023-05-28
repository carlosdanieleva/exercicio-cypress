/// <reference types="cypress"/>

const perfil = require('../fixtures/perfil.json')
describe ('Funcionalidade cadastro', () => {

   
    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/')
        cy.get ('.icon-user-unfollow').click ()

        

    });
    it ('Deve completar o login com sucesso', () => {
       cy.get('#username').type('aluno_ebac@teste.com')
       cy.get('#password').type ('teste@teste.com')
       cy.get('.woocommerce-form > .button').click ()
       cy.get('.page-title').should ('contain', 'Minha conta')
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá')


    });
    it ('Deve completar o login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type (perfil.senha, {log: false})
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.page-title').should ('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá')
    });
    it.only ('Deve completar o login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type (dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.page-title').should ('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá')
        
    })
it ('Deve exibir uma mensagem de erro ao inserir um email inválido', () => {
cy.get('#username').type('aluno1_ebac@teste.com')
cy.get('#password').type ('teste@teste.com')
cy.get('.woocommerce-form > .button').click ()
cy.get('.woocommerce-error > li').should ('contain', 'desconhecido')
});

it ('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type ('teste1@teste.com')
    cy.get('.woocommerce-form > .button').click ()
    cy.get('.woocommerce-error > li').should ('contain', 'incorreta')
});

})
})