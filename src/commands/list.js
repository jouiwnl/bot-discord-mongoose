const User = require('../model/users');

exports.list= async (message) => {

	const guild = message.guild;
	const channel = message.channel;

	const usuarios = await User.find({ guildId: guild.id });

	var description = usuarios.map((usuario) => {
		var oldDate = usuario.birthday.split('/');
		var mes = oldDate[1];
		var dia = oldDate[0];

		var finalDia = `${mes}/${dia}`;

		return `${finalDia} - ${usuario.username}\n`;
	});

	var finalDescription = description.sort().join('').toString();

	const embed = {
		color: 0x0099df,
		title: 'Lista de aniversariantes cadastrados',
		description: finalDescription
	};

	channel.send({ embeds: [embed] });
};
