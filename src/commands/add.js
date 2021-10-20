import User from '../model/users.js';
import getData from '../utils/data.js';
import aniversas from './aniversas.js';

const add = async (message, args) => {
  const usuario = await User.findOne({ userId: message.author.id, guildId: message.guild.id });

  if (usuario) {        
    message.reply('ops! eu já sei o seu aniversário!');
  } else {
    const user = new User({
      userId: message.author.id,
      username: message.author.username,
      guildId: message.guild.id,
      birthday: args
    });
    
    user.save(err => {
      if(err) {
        message.reply('Ocorreu um erro ao salvar seu perfil. Tente novamente!');
      } else {
        message.reply('Perfil salvo no banco de dados');
      }
    });
  }

  if (args == getData()) {
    aniversas(message, args);
  }
};

export default add;
