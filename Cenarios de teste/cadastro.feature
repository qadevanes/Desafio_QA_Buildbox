#language: pt

Funcionalidade: Cadastrar
Como novo parceiro da BurgerEats
Quero me cadastrar
Para ter acesso as oportunidades de entrega tradicionais

Cenário: Cadastro válido 
Dado que acesso a página de cadastro
Quando submeto o meu cadastro com todos os dados obrigatórios 
Então deve ser redirecionado para a área parceiro logada

Cenário: Nome incompleto
Dado que acesso a página de cadastro
Quando submeto o meu cadastro sem o nome completo
Então deve exibir uma mensagem de alerta: "Digite seu nome completo"

Cenário: Nome input vazio 
Dado que acesso a página de cadastro
Quando submeto o meu cadastro sem digitar meu nome
Então deve exibir uma mensagem de alerta: "É necessário informar o nome"

Cenário: CPF input vázio 
Dado que acesso a página de cadastro
Quando submeto o meu cadastro sem digitar meu CPF
Então deve exibir uma mensagem de alerta: "É necessário informar o CPF"

Cenário: CPF inválido
Dado que acesso a página de cadastro
Quando submeto o meu cadastro com um CPF inválido
Então deve exibir uma mensagem de alerta: "Oops! CPF inválido"

Cenário: E-mail inválido
Dado que acesso a página de cadastro
Quando submeto o meu cadastro com um e-mail inválido
Então deve exibir uma mensagem de alerta: "Oops! e-mail inválido"

Cenário: E-mail input vázio
Dado que acesso a página de cadastro
Quando submeto o meu cadastro sem digitar meu e-mail
Então deve exibir uma mensagem de alerta: "É necessário informar o email"

Cenário: whatsapp com numero inválido
Dado que acesso a página de cadastro
Quando submeto o meu cadastro com numero inválido
Então deve exibir uma mensagem de alerta: "Oops! Whatsapp com formato incorreto"

