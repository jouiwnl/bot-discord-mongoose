const BirthdayRole = require('../../model/birthdayrole');
const Channel = require('../../model/channels');
const User = require('../../model/users');
const buildMessage = require('../../embeds/happyBirthday');
const { getData } = require('../../utils/data');

exports.checkbirthday = async (client) => {

	client.guilds.cache.map(async guild => {

		const birthdayRole = await BirthdayRole.findOne({ guildId: guild.id });
		const channel = await Channel.findOne({ guildId: guild.id });
		const usuarios = await User.find({ guildId: guild.id });

		usuarios.map(async usuario => { 
			if (usuario.birthday == getData()) {
				guild.members.cache.map(item => {
					if(item.id == usuario.userId) {
						guild.channels.cache.get(channel.id).send({ 
							embeds: [buildMessage(usuario, guild.channels.cache.get(channel.id))] 
						});
						item.roles.add(guild.roles.cache.get(birthdayRole.birthdayRoleId));
					}
				});
			} else if (usuario.birthday != getData()) {
				guild.members.cache.map(item => {
					if(item.id == usuario.userId && item.roles.cache.get(birthdayRole.birthdayRoleId)) {
						item.roles.remove(guild.roles.cache.get(birthdayRole.birthdayRoleId));
					}
				});
			}
		});
        
	});
};
