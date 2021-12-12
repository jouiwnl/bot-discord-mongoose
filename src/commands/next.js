import moment from 'moment';
import User from '../model/users.js';
import getData from '../utils/data.js';

const nextBirthday = async (message) => {
  var date = new Date();
  const anoAtual = date.getFullYear();
  const dataAtual = `${getData()}/${anoAtual.toString()}`;
  var fakeUsersArray = [];
  var birthdaysArray = [];

  var cont = 0;
  var myArrayUsers = [];
  var nextBirthday;

  const usuarios = await User.find({ guildId: message.guild.id });

  usuarios.map(usuario => {
    var fullDate = `${usuario.birthday}/${anoAtual.toString()}`;

    fakeUsersArray.push({ 
      userId: usuario.userId,
      guildId: usuario.guildId,
      username: usuario.username,
      birthday: fullDate,
    });
  });

  var birthdays = fakeUsersArray.map(usuario => {

    let aniversario = moment(usuario.birthday, 'DD/MM/YYYY');
    let data = moment(dataAtual, 'DD/MM/YYYY');

    if (aniversario.format('YYYYMMDD') >= data.format('YYYYMMDD')) {
      return {
        userId: usuario.userId,
        guildId: usuario.guildId,
        username: usuario.username,
        birthday: aniversario,
      };
    } else {
      return null;
    }
  });

  if (birthdays.every(e => e === null)) {
    return message.reply('Ninguém cadastrado faz aniversário esse ano!');
  } else {
    birthdays.map(users => {
      if(users != undefined) {
        birthdaysArray.push(users.birthday);

        nextBirthday = moment.min(birthdaysArray).format('DD/MM/YYYY');

        if(users.birthday.format('DD/MM/YYYY') == nextBirthday) {
          cont += 1;
          myArrayUsers.push(users.username);
        }
      }
    });
    if (cont == 1) {
      message.reply(`O próximo aniversário é dia ${nextBirthday}! Não esqueça de dar parabéns para ${myArrayUsers.toString()}!`);
    } else if (cont > 1) {
      message.reply(`Os próximos aniversários são dia ${nextBirthday}! Não esqueça de dar parabéns para ${myArrayUsers.join(", ")}!`);
    }
  }
};

export default nextBirthday;
