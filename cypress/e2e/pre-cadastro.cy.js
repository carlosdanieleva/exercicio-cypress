/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';


describe('Pré-cadastro', () => {

    let nomeFaker = faker.name.firstName ()
    let sobrenomeFaker = faker.name.lastName ()
    let email = faker.internet.email (nomeFaker)
    let senha = faker.internet.password ()
    

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/')
        cy.get ('.icon-user-unfollow').click ()
    
    })

    it('Completa pré-cadastro com sucesso', () => {
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type (senha)
        cy.get(':nth-child(4) > .button').click ()
        cy.get('.page-title').should ('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click ()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click ()
        cy.get('.woocommerce-message').should ('contain', 'modificados com sucesso')
        
    });
});