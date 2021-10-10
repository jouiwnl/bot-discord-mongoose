import getData from '../utils/data.js';
import User from '../model/users.js';
import BirthdayRole from '../model/birthdayrole.js';

const aniversas = async (message) => {
  var contador = 0;
  const usuarios = await User.find({ guildId: message.guild.id });
  const birthdayRole = await BirthdayRole.findOne({ guildId: message.guild.id });
    
  if(usuarios) {
    usuarios.map(usuario => {
      if (usuario.birthday == getData()) {
        contador = contador + 1;
        message.guild.members.cache.map(item => {
          if(item.id == usuario.userId) {
            item.roles.add(message.guild.roles.cache.get(birthdayRole.birthdayRoleId));
          }
        });
        message.reply(`<@${usuario.userId}> está de aniversário hoje!`);
      } 
    });

    if (contador == 0) {
      message.guild.members.cache.map(item => {
        if(item.roles.cache.get(birthdayRole.birthdayRoleId)) {
          item.roles.remove(message.guild.roles.cache.get(birthdayRole.birthdayRoleId));
        }
      });
      message.reply('Ninguém está de aniversário hoje :(');
    }
  }
};

export default aniversas;
