const Channel = require('../../model/channels');

exports.createChannel= (guild) => {
    guild.channels.create(
        'Parabens', 
        { type: "GUILD_TEXT" }
      ).then((channel) => {

        const newChannel = new Channel({ 
            guildId: channel.guildId,
            id: channel.id,
            name: channel.name
        })
        newChannel.save(err => {
            if (err) {
                console.log(`Ocorreu um erro ao salvar o cargo!`)
            }
        })

        const embed = {
            color: 0x0099df,
            title: 'Olá! Bem-vindo(a) ao bot de aniversários!',
            description: 'Antes de começarmos, aqui vai uma lista de comandos e como o bot funciona!',
            fields : [
                {
                    name: '1. Início',
                    value: `Assim que o bot entra no servidor, o canal de avisos e o cargo já são criados automaticamente, não se preocupe! A principal função do bot é automática, a qual ele checa automaticamente todos os dias se alguém do servidor está de aniversário. Se sim, o cargo é adicionado para a pessoa e um aviso aparecerá no canal #Parabens`
                },
                {
                    name: '2. Como cadastro meu aniversário?',
                    value: `Para cadastrar sua data de aniversário deve-se seguir um padrão. Ex: !add 19/01. Caso dê tudo certo, uma mensagem de sucesso será retornada para você!`
                },
                {
                    name: '3. Como eu edito meu nome?',
                    value: `O bot salva automaticamente seu usuário do discord. Caso não goste do apelido em questão, pode alterá-lo utilizando o comando !editname. Ex: !editname jou.`
                },
                {
                    name: '4. Como eu edito minha data de aniversário?',
                    value: `Caso tenha digitado sua data de aniversário errada, pode alterá-la utilizando o comando !edit. Ex: !edit 25/10.`
                },
                {
                    name: '5. Como eu excluo o meu perfil?',
                    value: `Caso você não queira que o bot avise sobre o seu aniversário, não deveria nem ter se cadastrado. Porém, pode-se utilizar o comando !remove.
                    Obs: não é necessário passar nenhum valor para esse comando, o bot mesmo identifica quem você é e remove seu perfil da base de dados!`
                },
                {
                    name: '6. Comando para saber quem está de aniversário hoje.',
                    value: `Com o comando !aniversas é possivel saber quem está de aniversário na data atual.`
                },
                {
                    name: '7. Comando para saber quem está de aniversário em uma data específica.',
                    value: `Com o comando !day é possivel saber quem está de aniversário em uma data definida pelo(a) autor(a) da mensagem. Ex: !day 19/01.`
                }
            ]
        };
    
        channel.send({ embeds: [embed] });

        console.log(channel);
      })
}
