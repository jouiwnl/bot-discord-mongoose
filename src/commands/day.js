const User = require('../model/users');

exports.day = async (message, args) => {
	var contador = 0;

	const usuarios = await User.find({ birthday: args });

	if(usuarios) {
		usuarios.map(item => {
			if (item.birthday == args) {
				contador = contador + 1;
				message.reply(`<@${item.userId}> faz aniversário nesse dia!`);
			} 
		});

		if (contador == 0) {
			message.reply('Ninguém do servidor faz aniversário nesse dia :(');
		}
	}
};
