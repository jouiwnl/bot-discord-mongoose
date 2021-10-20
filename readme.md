# Aniversas!

Bem-vindo ao bot de aniversários!

## 🚀 Começando

**O bot apresenta a seguinte função:**
Uma lista de pessoas são cadastradas e cada uma delas tem seu perfil específico com sua data de aniversário. O bot entende a data em si, e automaticamente gera um canal de parabéns, onde todos do servidor serão avisados quando for o aniversário de uma pessoa! 

**Obs:** o usuário também ganha um cargo diferente no dia do seu aniversário, o qual será retirado quando o dia acabar.

### 🔧 Instalação

Será necessário um convite para ingressar o bot em seu servidor.

Aqui está o link de convite:

```
https://discord.com/api/oauth2/authorize?client_id=875734322567585802&permissions=21408507121&scope=bot
```

Assim que o bot entrar no servidor, ele automaticamente cria um canal de parabéns e dois cargos: aniversariante e manage bot.

**O cargo de aniversariante vai ser dado para o usuário na data que estiver cadastrada no banco de dados.**

**O cargo manage bot pode ser utilizado diretamente com os admnistradores do servidor, onde apenas eles terão acesso a um comando.**

## 🛠️ Como usar?

**Comandos**
* b!aniversas - **Ex**: b!aniversas - mostra o aniversariante do dia!
* b!day data - **Ex**: b!day 19/01 - mostra quem faz aniversário nesse dia em específico!
* b!add data - **Ex**: b!add 19/01 - adiciona o seu perfil na lista de usuários!
* b!editname nickname - **Ex**: !editname jou - edita seu nome na lista de usuários!
* b!edit data - **Ex**: b!edit 25/10 - edita sua data na lista de usuários!
* b!next - **Ex**: b!nextbirthday - mostra qual dia do aniversário mais próximo!

**Obs: o comando !remove não necessita de nenhum parâmetro, pois o bot identifica seu perfil e remove da base de dados**
* b!remove - **Ex**: !remove

* b!role - **Ex**: !role - **Esse comando funciona apenas para quem possuir o cargo manage bot, ele serve em casos onde o bot não tenha criado corretamente os cargos quando foi ingressado no servidor.**

---

## Quero contribuir. Como posso?
Caso queira fazer alguma contribuição, é necessário compreender a documentação do DiscordJs que é o core do bot. Disponível em:

```
https://discord.js.org/#/docs/main/stable/general/welcome
```
### 🔧 Instalação
Instale as dependências necessárias para o projeto:

```
npm install
```

**Caso use yarn**
```
yarn install
```

Após isso, você não conseguirá rodar o bot localmente, devido a ausência das configurações da API_KEY e credenciais do banco de dados, que são essenciais para o deploy do projeto. Porém, caso queira fazer um **Pull Request** como contribuição para melhorar ou resolver algum problema encontrado no bot, fique à vontade!

⌨️ com ❤️ por [João Henrique](https://github.com/jouiwnl) 😊
