const User = require('../model/users');

exports.add = async (message, args) => {
    const usuario = await User.findOne({ userId: message.author.id });
    
    if (usuario) {
        if (usuario.guildId === message.guild.id && usuario.userId === message.author.id) {
            message.reply(`ops! eu já sei o seu aniversário!`)
        }
    } else {
        const user = new User({
            userId: message.author.id,
            username: message.author.username,
            guildId: message.guild.id,
            birthday: args
        });
    
        user.save(err => {
            if(err) {
                message.reply(`Ocorreu um erro ao salvar seu perfil. Tente novamente!`);
            } else {
                message.reply(`Perfil salvo no banco de dados`);
            }
        })
    }
}