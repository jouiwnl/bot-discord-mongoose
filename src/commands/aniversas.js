import getData from '../utils/data.js';
import User from '../model/users.js';
import BirthdayRole from '../model/birthdayrole.js';
import Channel from '../model/channels.js';

const aniversas = async (message) => {
  var counting = 0;
  const usuarios = await User.find({ guildId: message.guild.id });
  const birthdayRole = await BirthdayRole.findOne({ guildId: message.guild.id });
  const channel = await Channel.findOne({ guildId: message.guild.id });

  if(usuarios) {
    usuarios.map(usuario => {
      if (usuario.birthday == getData()) {
        counting = counting + 1;
        const canal = message.guild.channels.cache.get(channel.id);

        if(counting > 1) {
          var desc = `-${usuario.username}`;
          var descFinal = `${desc}-${usuario.username}`;

          canal.setName(`〚🤖〛parabéns${descFinal}`);
        } else if (counting == 1) {
          console.log(canal);
          canal.setName(`〚🤖〛parabéns-${usuario.username}`);
        }

        message.guild.members.cache.map(item => {
          if(item.id == usuario.userId) {
            item.roles.add(message.guild.roles.cache.get(birthdayRole.birthdayRoleId));
          }
        });
        message.reply(`<@${usuario.userId}> está de aniversário hoje!`);
      } 
    });

    if (counting == 0) {
      const canal = message.guild.channels.cache.get(channel.id);
      canal.setName('〚🤖〛parabéns');

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
