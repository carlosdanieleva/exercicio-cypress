/// <reference types="cypress"/>

describe ('Funcionalidade cadastro', () => {

   
    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/')
        cy.get ('.icon-user-unfollow').click ()

        

    });
    it ('Deve completar o pré-cadastro com sucesso', () => {
       cy.get('#username').type('aluno_ebac@teste.com')
       cy.get('#password').type ('teste@teste.com')
       cy.get('.woocommerce-form > .button').click ()
       cy.get('.page-title').should ('contain', 'Minha conta')
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá')


    });

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

});