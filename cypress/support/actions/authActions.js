class AuthAction{
 
//Acesso a página    
go() {
 //Teste de cenarios responsivo console / exemplo: 'iphone-xr', 'sansung-s10'
 cy.viewport('macbook-15')
 cy.visit('https://buger-eats.vercel.app/')
}

// Cenário feliz
cadastroParceiroSucesso () {
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
}

// #Cenários negativos
cadastroNomeIncompleto(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes')
    cy.log('Deve exibir uma mensagem de alerta: "Digite seu nome completo"')

}

cadastroNomeInputVazio(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('a').clear()
    cy.get('.button-success').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error').should('have.text', 'É necessário informar o nome')
}

cadastroCpfInputVazio(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('0').clear()
    cy.get('.button-success').click()
    cy.get(':nth-child(2) > :nth-child(2) > .alert-error').should('have.text', 'É necessário informar o CPF')
}

cadastroCpfInválido(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('huhauhauha')
    cy.get('.button-success').click()
    cy.get(':nth-child(2) > :nth-child(2) > .alert-error').should('have.text', 'Oops! CPF inválido')   

}

cadastroCpfExistente(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
    cy.get('.button-success').click()
    cy.log('Deve exibir uma mensagem de alerta: "Oops! CPF já existente"')
    
}

cadasroEmailInvalido(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
    cy.get(':nth-child(3) > :nth-child(1) > input').type('qadevanes')
    cy.get('.button-success').click()
    cy.log('deve exibir uma mensagem de alerta: "Oops! e-mail inválido"')   
}

cadastroInputEmailVazio(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
    cy.get(':nth-child(3) > :nth-child(1) > input').type('a').clear()
    cy.get('.button-success').click()
    cy.log('deve exibir uma mensagem de alerta: "Oops! e-mail inválido"')    
}

cadastroWhatsappNumeroInvalido(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
    cy.get(':nth-child(3) > :nth-child(1) > input').type('celebratte@gmail.com')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('5')
    cy.get('.button-success').click()
    cy.get(':nth-child(3) > :nth-child(2) > .alert-error').should('have.text','Oops! Whatsapp com formato incorreto')   
}

cadastroCepVazio(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
    cy.get(':nth-child(3) > :nth-child(1) > input').type('celebratte@gmail.com')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('51980268109')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('9').clear()
    cy.get('.button-success').click()
    cy.get(':nth-child(2) > :nth-child(1) > .alert-error').should('have.text','É necessário informar o CEP')  
}

cadastroEnderecoNumeroVazio(){
    cy.get('a').click()
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Adevanes Thiago')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('01829747070')
    cy.get(':nth-child(3) > :nth-child(1) > input').type('celebratte@gmail.com')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('51980268109')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('91740460')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
    cy.get('.button-success').click()
    cy.get(':nth-child(1) > .alert-error').should('have.text','É necessário informar o número do endereço')    
}

cadastroMetodoEntregaNaoSelecionado(){
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
}
cadastroMetodoEntregaSelecaoMultipla(){
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
}

cadastroUploadDocumento(){
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
}
}

export default new AuthAction()