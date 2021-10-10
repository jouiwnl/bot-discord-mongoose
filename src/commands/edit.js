import User from '../model/users.js';
import getData from '../utils/data.js';
import aniversas from './aniversas.js';

const edit = async (message, args) => {

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

export default edit;
