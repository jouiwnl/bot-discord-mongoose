const BirthdayRole = require('../model/birthdayrole');

exports.addRole = async (message, args) => {
    
    const role = new BirthdayRole({
        guildId: message.guild.id,
        name: args 
    });

    role.save(err => {
        if(err) {
            message.reply(`Ocorreu um erro ao salvar o cargo. Tente novamente!`);
        } else {
            message.reply(`Cargo salvo no banco de dados`);
        }
    })

}