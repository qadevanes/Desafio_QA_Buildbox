/// <reference types="cypress"/>
import auth from '../support/actions/authActions'

context('Testes de funcionalidade cadastro Bugereats', () => {
    
    it('Cadastro válido', () => {
    // #Cenário feliz 

    auth.go()
    auth.cadastroParceiroSucesso()

});

    // #Cenários negativos
    it('Cadastro com nome incompleto', () => {
          
    auth.go()
    auth.cadastroNomeIncompleto()
    
    });

      
    it('Cadastro com nome input vazio', () => {
          
    auth.go()
    auth.cadastroNomeInputVazio()
        
    
    });
    
    it('Cadastro com CPF input vazio', () => {
          
     auth.go()
     auth.cadastroCpfInputVazio()
     
    
    });

    it('Cadastro com CPF inválido', () => {
         
        auth.go()
        
        
    
    });

    it('Cadastro com CPF existente', () => {
         //CPF cadastrado no cenário feliz
        auth.go()
        cy.get('a').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
        cy.get('.button-success').click()
        cy.log('Deve exibir uma mensagem de alerta: "Oops! CPF já existente"')
        
    
    });

    it('Cadastro E-mail inválido', () => {  
        auth.go()
        cy.get('a').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
        cy.get(':nth-child(3) > :nth-child(1) > input').type('qadevanes')
        cy.get('.button-success').click()
        cy.log('deve exibir uma mensagem de alerta: "Oops! e-mail inválido"')
    
    });

    it('Cadastro E-mail input vázio', () => {  
        auth.go()
        cy.get('a').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
        cy.get(':nth-child(3) > :nth-child(1) > input').type('a').clear()
        cy.get('.button-success').click()
        cy.log('deve exibir uma mensagem de alerta: "Oops! e-mail inválido"')
    
    });

    it('Cadastro whatsapp com numero inválido', () => {  
        auth.go()
        cy.get('a').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
        cy.get(':nth-child(3) > :nth-child(1) > input').type('celebratte@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input').type('5')
        cy.get('.button-success').click()
        cy.get(':nth-child(3) > :nth-child(2) > .alert-error').should('have.text','Oops! Whatsapp com formato incorreto')
    
    });

    it('Cadastro CEP input vázio', () => {  
        auth.go()
        cy.get('a').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
        cy.get(':nth-child(3) > :nth-child(1) > input').type('celebratte@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input').type('51980268109')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('9').clear()
        cy.get('.button-success').click()
        cy.get(':nth-child(2) > :nth-child(1) > .alert-error').should('have.text','É necessário informar o CEP')
    
    });

    it('Cadastro endereço com numero input vázio', () => {  
        auth.go()
        cy.get('a').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
        cy.get(':nth-child(3) > :nth-child(1) > input').type('celebratte@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input').type('51980268109')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('91740460')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get('.button-success').click()
        cy.get(':nth-child(1) > .alert-error').should('have.text','É necessário informar o número do endereço')
    
    });

    it('Cadastro com método de entrega não selecionado', () => {   
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
        cy.get('.dropzone>input').attachFile('cnh.jpg');
        cy.get('.button-success').click()
        cy.get(':nth-child(4) > .alert-error').should( 'contain','Selecione o método de entrega')
        
    
    });

    it('Cadastro Metódo de entrega seleção multipla', () => {   
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
        cy.get('.delivery-method > :nth-child(1)').click()
        cy.get('.delivery-method > :nth-child(3)').click()
        cy.get('.dropzone>input').attachFile('cnh.jpg');
        cy.get('.button-success').click()
        cy.get(':nth-child(4) > .alert-error').should('contain','Oops! Selecione apenas um método de entrega')
        
    
    });

    it('Cadastro upload de documendo', () => {   
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
        cy.get('.button-success').click()
        cy.get('form > :nth-child(6)').should('contain','Adicione uma foto da sua CNH')
    
    });
});