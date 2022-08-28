/// <reference types="cypress"/>
import auth from '../support/actions/authActions'

context('Testes de funcionalidade cadastro Bugereats', () => {
    
    it('Cadastro válido', () => {
    //Caminho feliz   
    auth.go()
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
    cy.get(':nth-child(3) > :nth-child(1) > input').type('qadevanes@gmail.com')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('51980268109')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('91740460')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
    cy.get(':nth-child(4) > :nth-child(1) > input').type('92')
    cy.get(':nth-child(4) > :nth-child(2) > input').type('casa')
    cy.get('.delivery-method > :nth-child(2)').click()
    cy.get('.dropzone>input').attachFile('cnh.jpg');
    cy.get('.button-success').click()
    cy.get('#swal2-title').should('have.text', 'Aí Sim...')

});

    //Cenários negativos
    it('Cad', () => {
        //Caminho feliz   
        auth.go()
        cy.get('a').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
        cy.get(':nth-child(3) > :nth-child(1) > input').type('qadevanes@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input').type('51980268109')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('91740460')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(4) > :nth-child(1) > input').type('92')
        cy.get(':nth-child(4) > :nth-child(2) > input').type('casa')
        cy.get('.delivery-method > :nth-child(2)').click()
        cy.get('.dropzone>input').attachFile('cnh.jpg');
        cy.get('.button-success').click()
        cy.get('#swal2-title').should('have.text', 'Aí Sim...')
    
    });
    
});