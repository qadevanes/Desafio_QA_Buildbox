class AuthAction{
 
//Acesso a página    
go() {
 //Teste de cenarios responsivo console / exemplo: 'iphone-xr', 'sansung-s10' , '1920, 1080'
 cy.viewport('iphone-xr')
 cy.visit('https://buger-eats.vercel.app/')
}

}

export default new AuthAction()