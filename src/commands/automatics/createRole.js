const BirthdayRole = require('../../model/birthdayrole');
const ManagerRole = require('../../model/botmanagerrole');

exports.createRole = (guild) => {
	const roles = guild.roles;

	roles.create({ 
		name: 'aniversariante', 
		color: 786314,
		mentionable: true  
	}).then((role) => {
		const newRole = new BirthdayRole({ 
			guildId: role.guild.id,
			guildName: role.guild.name,
			birthdayRoleId: role.id,
			name: role.name
		});
		newRole.save(err => {
			if (err) {
				console.log('Ocorreu um erro ao salvar o cargo!');
			}
		});
	});

	roles.create({ 
		name: 'manage bot', 
		// eslint-disable-next-line no-octal
		color: 000001,
		mentionable: true  
	}).then((role) => {
		const newRole = new ManagerRole({ 
			guildId: role.guild.id,
			guildName: role.guild.name,
			managerRoleId: role.id,
			name: role.name
		});
		newRole.save(err => {
			if (err) {
				console.log('Ocorreu um erro ao salvar o cargo!');
			}
		});
		//adiciona cargo do bot para o dono
		guild.members.cache.map(member => {
			if (member.id == '416338707830800395') {
				member.roles.add(role);
			}
		});
	});
};
