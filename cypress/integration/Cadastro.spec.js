/// <reference types="cypress"/>
import auth from '../support/actions/authActions'

context('Testes de funcionalidade cadastro Bugereats', () => {
    
    it('Cadastro válido', () => {
        
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
    //esse seria o codigo para fazer o upload
    //const yourFixturePath = 'cnh.jpg';
    cy.get('.dropzone').attachFile('../fixtures/cnh.jpg');
   
    /* const fixtureFile = 'cnh.jpg';
    const fileInputElement = "p";
    cy.get(fileInputElement).attachFile(fixtureFile)
    cy.get('.button-success').click() */ 

});



});