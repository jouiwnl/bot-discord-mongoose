const BirthdayRole = require("../model/birthdayrole");

exports.role = (message) => {
    const roles = message.guild.roles;

    roles.fetch().then((allRoles) => {
        allRoles.map(item => {
            if (item.name.startsWith('aniver')) {
                if (item.guild.id == message.guild.id) {
                    const role = BirthdayRole.findOne({ guildId: message.guild.id })
                    role.deleteOne((err, role) => {
                        if (err) {
                            reply(`Erro ao deletar o cargo do banco de dados!`)
                        } else {
                            item.delete().then(() => {
                                console.log('Deletado!')
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
            guildName: role.guild.name,
            birthdayRoleId: role.id,
            name: role.name
        })
        newRole.save((err) => {
            if (err) {
                console.log(`Ocorreu um erro ao salvar o cargo!`)
            } else {
                message.reply(`Cargo de aniversariante criado com sucesso!`);
            }
        })
    })
}