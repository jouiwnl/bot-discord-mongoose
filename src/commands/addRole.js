const BirthdayRole = require('../model/birthdayrole');

exports.addRole = (message, args) => {
    const roles = message.guild.roles;

    roles.fetch().then((allRoles) => {
        allRoles.map(item => {
            if (item.name.startsWith('aniver')) {
                if (item.guild.id == message.guild.id) {
                    const role = BirthdayRole.findOne({ guildId: message.guild.id })
                    role.deleteOne((err, role) => {
                        if (err) {
                            message.reply(`Erro ao deletar o cargo do banco de dados!`)
                        } else {
                            item.delete().then(() => {
                                message.channel.send(`Já existia um cargo de aniversariante no servidor. Ele foi excluído para a criação de um novo cargo!`)
                            })
                        }
                        
                    })
                }
            }
        })
    })

    roles.create({ 
        name: 'aniversariante', 
        color: 786314,
        mentionable: true  
    }).then((role) => {
        const newRole = new BirthdayRole({ 
            guildId: role.guild.id,
            name: role.name
        })
        newRole.save(err => {
            if (err) {
                message.reply(`Ocorreu um erro ao salvar o cargo!`)
            } else {
                message.reply(`O cargo de aniversariante foi criado com êxito!`);
            }
        })
    })
}