/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco.page'
const dados = require('../fixtures/perfil.json')
const dadosEndereco = require ('../fixtures/endereco.json')

import { faker } from '@faker-js/faker';
var nome = faker.name.firstName ()
var sobrenome = faker.name.lastName ()
var empresa = faker.company.name ()
var endereco = faker.address.streetAddress ()
var email = faker.internet.email(nome)



describe('Funcionalidade endereço - Faturamento e Entrega', () => {
    
beforeEach(() => {
    cy.visit ('minha-conta')
    cy.login(dados.usuario, dados.senha)  
});

    it('Deve fazer cadastro de faturamento com sucesso', () => {
     EnderecoPage.editarEnderecoFaturamento (nome, sobrenome, empresa, 'Brasil', endereco, '312', 'São Paulo', 'São Paulo', '08759-875', '98745-8548', email)
     cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')


    });

    it.only ('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento 
        (dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email,
            
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
   
})
})