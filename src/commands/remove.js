import User from '../model/users.js';

const remove = async (message, args) => {

  if (message && args) {        
    await User.findOneAndDelete({ userId: message.author.id, guildId: message.guild.id });
    message.reply('Perfil excluído da base de dados!');
  } else {
    message.reply('Houve um erro ao deletar seu perfil. Tente novamente!');
  }
};

export default remove;
