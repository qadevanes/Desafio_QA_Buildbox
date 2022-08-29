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



}

export default new AuthAction()