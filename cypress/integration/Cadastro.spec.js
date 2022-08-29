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
        auth.cadastroCpfInválido()
        
    });

    it('Cadastro com CPF existente', () => {
    // CPF cadastrado já no cenário feliz, não deveria deixar cadastrar novamente
         
        auth.go()
        auth.cadastroCpfExistente()

    });

    it('Cadastro E-mail inválido', () => {  
        auth.go()
        auth.cadastroCpfInválido()

    });


    it('Cadastro E-mail input vázio', () => {  
        auth.go()
        auth.cadastroInputEmailVazio()
    
    });

    it('Cadastro whatsapp com numero inválido', () => {  
        auth.go()
        auth.cadastroWhatsappNumeroInvalido()
        
    });

    it('Cadastro CEP input vázio', () => {  
        auth.go()
        auth.cadastroCepVazio()
    
    });

    it('Cadastro endereço com numero input vázio', () => {  
        auth.go()
        auth.cadastroEnderecoNumeroVazio()

    });

    it('Cadastro com método de entrega não selecionado', () => {   
        auth.go()
        auth.cadastroMetodoEntregaNaoSelecionado()

    });

    it('Cadastro Metódo de entrega seleção multipla', () => {   
        auth.go()
        auth.cadastroMetodoEntregaSelecaoMultipla()
    });

    it('Cadastro upload de documendo', () => {   
        auth.go()
        auth.cadastroUploadDocumento()
    
    });


});