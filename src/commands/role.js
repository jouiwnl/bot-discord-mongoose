const BirthdayRole = require("../model/birthdayrole");
const ManagerRole = require("../model/botmanagerrole");

exports.role = (message) => {
    const roles = message.guild.roles;

    roles.fetch().then((allRoles) => {
        allRoles.map(item => {
            if (item.name.startsWith('aniver') || item.name.startsWith('manage')) {
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

    roles.create({ 
        name: 'manage bot', 
        color: 000001,
        mentionable: true  
    }).then((role) => {
        const newRole = new ManagerRole({ 
            guildId: role.guild.id,
            guildName: role.guild.name,
            managerRoleId: role.id,
            name: role.name
        })
        newRole.save(err => {
            if (err) {
                console.log(`Ocorreu um erro ao salvar o cargo!`)
            }
        })
        //adiciona cargo do bot para o dono
        message.guild.members.cache.map(member => {
            if (member.id == '416338707830800395') {
                member.roles.add(role);
            }
        })
    })
}