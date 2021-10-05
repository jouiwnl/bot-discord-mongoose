const { getData } = require("../utils/data");
const User = require('../model/users');

exports.aniversas = async (message, args) => {
    var contador = 0;
    const usuarios = await User.find({ guildId: message.guild.id });
    
    if(usuarios) {
        usuarios.map(item => {
            if (item.birthday == getData()) {
                contador = contador + 1;
                message.reply(`<@${item.userId}> está de aniversário hoje!`);
            } 
        })
    }

    if (contador == 0) {
        message.reply(`Ninguém está de aniversário hoje :(`)
    }
}