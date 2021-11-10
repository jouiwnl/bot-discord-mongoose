import Discord from 'discord.js';
import openServer from './src/server/server.js';
import BirthdayRole from './src/model/birthdayrole.js';
import Guild from './src/model/guilds.js';
import Channel from './src/model/channels.js';
import ManagerRole from './src/model/botmanagerrole.js';
import { CronJob } from 'cron';
import checkMessageAuthor from './src/utils/checkMessageAuthor.js';
import { getArgs, getCommand } from './src/utils/checkCommand.js';
import add from './src/commands/add.js';
import aniversas from './src/commands/aniversas.js';
import day from './src/commands/day.js';
import createRole from './src/commands/automatics/createRole.js';
import createChannel from './src/commands/automatics/createChannel.js';
import editname from './src/commands/editname.js';
import edit from './src/commands/edit.js';
import remove from './src/commands/remove.js';
import checkbirthday from './src/commands/automatics/checkBirthday.js';
import list from './src/commands/list.js';
import role from './src/commands/role.js';
import howtouse from './src/commands/howtouse.js';
import channel from './src/commands/channel.js';
import nextBirthday from './src/commands/next.js';
import config from './configs/config.js';

const token = config.BOT_TOKEN + config.BOT_TOKEN2;

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

const job = new CronJob('00 10 00 * * *', () => {
  checkbirthday(client);
  console.log('passou');
}, null, true, 'America/Sao_Paulo');

client.on('ready', () => {
  client.user.setActivity('parabéns da xuxa', { type: 'LISTENING' });
});

client.on('guildCreate', async (guild) => {
  const servidor = new Guild({ 
    guildId: guild.id, 
    name: guild.name 
  });
  await servidor.save();
  createChannel(guild);
  createRole(guild);
});

client.on('guildDelete', async (guild) => {
  const servidor = Guild.findOne({ 
    guildId: guild.id 
  });

  await servidor.deleteOne();
});

client.on('roleDelete', async (role) => {
  const oldRoleBirth = BirthdayRole.findOne({ 
    guildId: role.guild.id, 
    name: role.name 
  });

  const oldRoleManager = ManagerRole.findOne({ 
    guildId: role.guild.id, 
    name: role.name 
  });

  await oldRoleBirth.deleteOne();
  await oldRoleManager.deleteOne();
});


client.on('channelDelete', async (channel) => {
  const canal =  Channel.findOne({ 
    guildId: channel.guildId, 
    name: channel.name 
  });

  await canal.deleteOne();
});

client.on('messageCreate', (message) => {

  job.start();

  checkMessageAuthor(message);

  if(getCommand(message) == 'add') {
    add(message, getArgs(message));
  } else if(getCommand(message) == 'aniversas') {
    aniversas(message, getArgs(message));
  } else if(getCommand(message) == 'day') {
    day(message, getArgs(message));
  } else if(getCommand(message) == 'editname') {
    editname(message, getArgs(message));
  } else if(getCommand(message) == 'edit') {
    edit(message, getArgs(message));
  } else if(getCommand(message) == 'remove') {
    remove(message, getArgs(message));
  } else if(getCommand(message) == 'list') {
    list(message, getArgs(message));
  } else if(getCommand(message) == 'role') {
    role(message, getArgs(message));
  } else if(getCommand(message) == 'channel') {
    channel(message, getArgs(message));
  } else if(getCommand(message) == 'helpme') {
    howtouse(message, getArgs(message));
  } else if(getCommand(message) == 'nextbirthday') {
    nextBirthday(message, getArgs(message));
  }
});

client.login(token);
openServer();

