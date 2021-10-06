const User = require('../model/users');
const { getData } = require('../utils/data');
const { aniversas } = require('./aniversas');

exports.edit = async (message, args) => {

  if (message && args) {        
    await User.findOneAndUpdate(
      { userId: message.author.id, guildId: message.guild.id }, 
      { birthday: args }
    );
    message.reply('Data de aniversário alterada!');

    if (args == getData()) {
      aniversas(message, args);
    } 
  } else {
    message.reply('Ocorreu um erro ao alterar sua data de aniversário. Tente novamente!');
  }
};
