/// <reference types="cypress"/>

//Caminho feliz
context('Testes de funcionalidade cadastro bugereats', () => {
    
    it('Cadastro válido', () => {
    cy.visit('https://buger-eats.vercel.app/')
    cy.viewport(1440, 900)
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
    const fixtureFile = 'cnh.jpg';
    const fileInputElement = ".dropzone";
    cy.get(fileInputElement).attachFile(fixtureFile)
    cy.get('.button-success').click() 

});



});