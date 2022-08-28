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

Cenário: CPF existente
Dado que acesso a página de cadastro
Quando submeto o meu cadastro com um CPF existente
Então deve exibir uma mensagem de alerta: "Oops! CPF já existente"

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

Cenário: CEP input vázio
Dado que acesso a página de cadastro
Quando submeto o meu cadastro sem digitar meu CEP
Então deve exibir uma mensagem de alerta: "É necessário informar o CEP"

Cenário: endereço com numero input vázio
Dado que acesso a página de cadastro
Quando submeto o meu cadastro sem digitar o numero do meu endereço
Então deve exibir uma mensagem de alerta: "É necessário informar o número do endereço"

Cenário: Metódo de entrega não selecionado
Dado que acesso a página de cadastro
Quando submeto o meu cadastro sem selecionar o método de entrega
Então deve exibir uma mensagem de alerta: "Selecione o método de entrega"

Cenário: Metódo de entrega seleção multipla
Dado que acesso a página de cadastro
Quando submeto o meu cadastro selecionando mais de um método de entrega
Então deve exibir uma mensagem de alerta: "Oops! Selecione apenas um método de entrega"

Cenário: upload de documendo
Dado que acesso a página de cadastro
Quando submeto o meu cadastro sem adicionar meu documento
Então deve exibir uma mensagem de alerta: "Adicione uma foto da sua CNH"

