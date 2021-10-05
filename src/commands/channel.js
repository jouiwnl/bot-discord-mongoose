const ManagerRole = require("../model/botmanagerrole");
const Channel = require("../model/channels");
const welcomeEmbed = require('../embeds/welcome');

exports.channel = async (message) => {

    const channel = await Channel.findOne({ guildId: message.guild.id });
    const managerRole = await ManagerRole.findOne({ guildId: message.guild.id });

    const createChannel = (message) => {
        message.guild.channels.create(
            'Parabéns', 
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
                } else {
                    message.reply(`Canal criado com sucesso!`)
                }
            })

            channel.send({ embeds: [welcomeEmbed] });
        })
    }

    if (channel) {
        if (message.channels.cache.get(channel.id)) 
        {
            message.reply(`O canal já está criado!`);
            return;
        }

        if (message.author.id == '416338707830800395' || 
        message.member.roles.cache.get(managerRole.managerRoleId)) 
        {
           createChannel(message);
        }
    } else if (message.author.id == '416338707830800395') {
        createChannel(message);
    } else {
        message.reply(`O canal não foi criado corretamente, será necessário expulsar e colocar o bot novamente no servidor!`)
    }
}