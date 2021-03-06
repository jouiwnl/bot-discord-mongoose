const welcomeEmbed = {
  color: 10181046,
  title: 'Olá! Bem-vindo(a) ao bot de aniversários!',
  description: 'Antes de começarmos, aqui vai uma lista de comandos e como o bot funciona!',
  fields : [
    {
      name: '1. Início',
      value: `Assim que o bot entra no servidor, o canal de avisos, cargo de aniversariante e cargo de configuração do bot já são criados automaticamente, não se preocupe! A principal função do bot é automática, a qual ele checa automaticamente todos os dias se alguém do servidor está de aniversário. Se sim, o cargo é adicionado para a pessoa e um aviso aparecerá no canal #Parabens.
            Obs: caso haja outro cargo de aniversariante no servidor, será necessário excluir e usar o comando b!role para a criaçao de um novo.
            Obs: caso o canal não tenha sido criado automaticamente, use o comando b!channel para criá-lo.`
    },
    {
      name: '2. Como cadastro meu aniversário?',
      value: 'Para cadastrar sua data de aniversário deve-se seguir um padrão. Ex: b!add 19/01. Caso dê tudo certo, uma mensagem de sucesso será retornada para você!'
    },
    {
      name: '3. Como eu edito meu nome?',
      value: 'O bot salva automaticamente seu usuário do discord. Caso não goste do apelido em questão, pode alterá-lo utilizando o comando !editname. Ex: b!editname jou.'
    },
    {
      name: '4. Como eu edito minha data de aniversário?',
      value: 'Caso tenha digitado sua data de aniversário errada, pode alterá-la utilizando o comando b!edit. Ex: b!edit 25/10.'
    },
    {
      name: '5. Como eu excluo o meu perfil?',
      value: `Caso você não queira que o bot avise sobre o seu aniversário, não deveria nem ter se cadastrado. Porém, pode-se utilizar o comando b!remove.
            Obs: não é necessário passar nenhum valor para esse comando, o bot mesmo identifica quem você é e remove seu perfil da base de dados!`
    },
    {
      name: '6. Comando para saber quem está de aniversário hoje.',
      value: 'Com o comando b!aniversas é possivel saber quem está de aniversário na data atual.'
    },
    {
      name: '7. Comando para saber quem está de aniversário em uma data específica.',
      value: 'Com o comando b!day é possivel saber quem está de aniversário em uma data definida pelo(a) autor(a) da mensagem. Ex: b!day 19/01.'
    },
    {
      name: '8. Como vejo quem está cadastrado?',
      value: 'Com o comando b!list é possivel saber quais são as pessoas que já cadastraram sua data de aniversário no bot!'
    },
    {
      name: '9. Como eu sei de quem é o próximo aniversário?',
      value: 'Além da lista, também há o comando b!nextbirthday, que mostra qual o dia do aniversário mais próximo!'
    }
  ]
};

export default welcomeEmbed;
