import User from '../model/users.js';

const editname = async (message, args) => {

  if (message && args) {        
    await User.findOneAndUpdate(
      { userId: message.author.id, guildId: message.guild.id }, 
      { username: args }
    );

    message.reply('Nome alterado!');
  } else {
    message.reply('Houve um erro ao editar o seu nome. Tente novamente!');
  }
};

export default editname;
