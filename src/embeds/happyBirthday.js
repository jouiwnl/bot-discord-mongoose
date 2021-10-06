var _ = require('lodash');

const myArray = [
	'https://media.giphy.com/media/3ohs7W7ACsSvyY5WoM/giphy.gif',
	'https://media.giphy.com/media/SwIMZUJE3ZPpHAfTC4/giphy.gif',
	'https://media.giphy.com/media/8aY26sIJiCMtdcDMxk/giphy.gif',
	'https://media.giphy.com/media/Dn5nT3gtXXqiRysvK2/giphy-downsized-large.gif',
	'https://media.giphy.com/media/vSXZHHbjJQqaWxFXHw/giphy.gif',
	'https://media.giphy.com/media/fsE2EPGU9IA0pZBPA7/giphy.gif',
	'https://media.giphy.com/media/l2Sq2ySYEIl3mzVgk/giphy.gif',
	'https://media.giphy.com/media/v8KrT3OnDaNOD6Eyjw/giphy.gif',
	'https://media.giphy.com/media/sNIQI1lIV4inMAm6qB/giphy.gif',
	'https://media.giphy.com/media/okGlMayu79JKoSE7Lt/giphy.gif',
	'https://media.giphy.com/media/fI90a1FdJwczDrlftd/giphy.gif',
	'https://media.giphy.com/media/3o7TKGYmeY2kDqhdU4/giphy.gif',
	'https://media.giphy.com/media/VEc4fcyBWDbNQ1K1xu/giphy.gif',
	'https://media.giphy.com/media/KdC9XVrVYOVu6zZiMH/giphy.gif'
];

const buildMessage = (usuario, channel) => {
	channel.send(`@everyone <@${usuario.userId}>`);
	return {
		color: 10181046,
		title: `FELIZ ANIVERSÁRIO ${usuario.username}!!!!!! :fireworks: :partying_face: :partying_face: :birthday:`,
		description: 'Parabéns pra você, nessa data querida!!!!',
		image: {
			url: _.sample(myArray),
		}
	};
};

module.exports = buildMessage;
