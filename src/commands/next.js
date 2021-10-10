import moment from 'moment';
import User from '../model/users.js';
import getData from '../utils/data.js';

const nextBirthday = async (message) => {
  var date = new Date();
  const anoAtual = date.getFullYear();
  const dataAtual = `${getData()}/${anoAtual.toString()}`;
  var fakeUsersArray = [];
  var birthdaysArray = [];

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
    }

  });

  birthdays.map(users => {
    if(users != undefined) {
      birthdaysArray.push(users.birthday);
    }
  });

  var nextBirthday = moment.min(birthdaysArray);

  birthdays.map(users => {
    if(users != undefined) {
      if(users.birthday == nextBirthday) {
        message.reply(`O próximo aniversário é dia ${users.birthday.format('DD/MM/YYYY')}! Não esqueça de dar parabéns a <@${users.userId}>!`);
      }
    }
  });
};

export default nextBirthday;
