import moment from 'moment';
import User from '../model/users.js';
import getData from '../utils/data.js';

const nextBirthday = async (message) => {
  const dataAgora = moment();
  const anoAtual = dataAgora.year();
  var fakeUsersArray = [];
  var birthdaysArray = [];

  var cont = 0;
  var myArrayUsers = [];
  var nextBirthday;

  const usuarios = await User.find({ guildId: message.guild.id });

  usuarios.map(usuario => {
    var splitado = usuario.birthday.split('/');
    var fullDate = `${anoAtual.toString()}-${splitado[1]}-${splitado[0]}`;

    fakeUsersArray.push({ 
      userId: usuario.userId,
      guildId: usuario.guildId,
      username: usuario.username,
      birthday: fullDate,
    });
  });

  var birthdays = fakeUsersArray.map(usuario => {

    let aniversario = moment(usuario.birthday);

    if (aniversario.isAfter(dataAgora)) {
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
      if (users != undefined) {
        birthdaysArray.push(users.birthday);
        nextBirthday = moment.min(birthdaysArray).format('DD/MM/YYYY');
      }
    });
    birthdays.map(users => {
      if(users != undefined) {
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
