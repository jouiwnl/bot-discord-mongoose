import Channel from '../../model/channels.js';
import welcomeEmbed from '../../embeds/welcome.js';

const createChannel= (guild) => {
  guild.channels.create(
    'Parabéns', 
    { type: 'GUILD_TEXT' }
  ).then((channel) => {

    const newChannel = new Channel({ 
      guildId: channel.guildId,
      id: channel.id,
      name: channel.name
    });
    newChannel.save(err => {
      if (err) {
        console.log('Ocorreu um erro ao salvar o cargo!');
      }
    });
    
    channel.send({ embeds: [welcomeEmbed] });
  });
};

export default createChannel;
