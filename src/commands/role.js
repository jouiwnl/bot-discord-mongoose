const BirthdayRole = require("../model/birthdayrole");
const ManagerRole = require("../model/botmanagerrole");

exports.role = async (message) => {

    const birthdayRole = await BirthdayRole.findOne({ guildId: message.guild.id });
    const managerRole = await ManagerRole.findOne({ guildId: message.guild.id });


    if (message.guild.roles.cache.get(managerRole.managerRoleId) || 
        message.guild.roles.cache.get(birthdayRole.birthdayRoleId) ) 
    {
        message.reply(`Os cargos já foram criados anteriormente!`);
        return;
    }

    if (message.member.roles.cache.get(managerRole.managerRoleId) || 
        message.author.id == '416338707830800395') 
    {
        const roles = message.guild.roles;
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
}