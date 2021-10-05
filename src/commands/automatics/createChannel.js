const Channel = require('../../model/channels');
const welcomeEmbed = require('../../embeds/welcome');

exports.createChannel= (guild) => {
    guild.channels.create(
        'Parabens', 
        { type: "GUILD_TEXT" }
      ).then((channel) => {

        const newChannel = new Channel({ 
            guildId: channel.guildId,
            id: channel.id,
            name: channel.name
        })
        newChannel.save(err => {
            if (err) {
                console.log(`Ocorreu um erro ao salvar o cargo!`)
            }
        })
    
        channel.send({ embeds: [welcomeEmbed] });

        console.log(channel);
      })
}
