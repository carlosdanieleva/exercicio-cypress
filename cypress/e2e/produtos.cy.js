/// <reference types="cypress"/>

describe ('Funcionalidade página de produtos', () => {
beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    cy.get(':nth-child(2) > .page-numbers').click ()
});
    it ('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.eq(2)
        .contains ('Atomic Endurance Running ')
        .click()
    });
    
    it ('Deve adicionar o produto ao carrinho', () => {
        var quantidade = 7
        
        cy.get('[class="product-block grid"]')
        .contains ('Atomic Endurance Running ').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click ()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should ('contain', quantidade)
        cy.get('.woocommerce-message').should ('contain', quantidade + ' × “Atomic Endurance Running Tee (Crew-Neck)” foram adicionados no seu carrinho.')
        
    });
});