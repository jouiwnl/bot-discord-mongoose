const Discord = require('discord.js');
const config = require('./configs/config.json');
const openServer = require('./src/server/server');
const Guild = require('./src/model/guilds');
const BirthdayRole = require('./src/model/birthdayrole');
const Channel = require('./src/model/channels');
const ManagerRole = require('./src/model/botmanagerrole');
const { CronJob } = require('cron');
const { checkMessageAuthor } = require('./src/utils/checkMessageAuthor');
const { getArgs, getCommand } = require('./src/utils/checkCommand');
const { add } = require('./src/commands/add');
const { aniversas } = require('./src/commands/aniversas');
const { day } = require('./src/commands/day');
const { createRole } = require('./src/commands/automatics/createRole');
const { createChannel } = require('./src/commands/automatics/createChannel');
const { editname } = require('./src/commands/editname');
const { edit } = require('./src/commands/edit');
const { remove } = require('./src/commands/remove');
const { checkbirthday } = require('./src/commands/automatics/checkBirthday');
const { list } = require('./src/commands/list');
const { role } = require('./src/commands/role');
const { howtouse } = require('./src/commands/howtouse');
const { test } = require('./src/commands/tests');
const { channel } = require('./src/commands/channel');
const { nextBirthday } = require('./src/commands/next');

const token = config.BOT_TOKEN + config.BOT_TOKEN2;

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on('guildCreate', async (guild) => {
  const servidor = new Guild({ 
    guildId: guild.id, 
    name: guild.name 
  });
  await servidor.save();
  createChannel(guild);
  createRole(guild);
});

client.on('guildUpdate', async (guild) => {
  const servidor = Guild.findOne(
    { guildId: guild.id, name: guild.name }
  );

  await servidor.updateOne({
    guildId: guild.id, 
    name: guild.name
  });
});

client.on('guildDelete', async (guild) => {
  const servidor = Guild.findOne({ 
    guildId: guild.id 
  });

  servidor.deleteOne();
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

client.on('roleUpdate', async (role) => {
  console.log(role);
  const oldBirthday = BirthdayRole.findOneAndUpdate({ 
    guildId: role.guild.id, 
    name: role.name 
  });
  
  const oldManager = ManagerRole.findOneAndUpdate({ 
    guildId: role.guild.id, 
    name: role.name 
  });

  await oldBirthday.updateOne({ 
    guildId: role.guild.id, 
    name: role.name, 
    guildName: role.guild.name, 
    birthdayRoleId: role.id 
  });

  await oldManager.updateOne({ 
    guildId: role.guild.id, 
    name: role.name, 
    guildName: role.guild.name, 
    managerRoleId: role.id 
  });
});

client.on('channelDelete', async (channel) => {
  const canal =  Channel.findOne({ 
    guildId: channel.guildId, 
    name: channel.name 
  });

  await canal.deleteOne();
});

client.on('channelUpdate', async (channel) => {
  const canal = Channel.findOneAndUpdate({ 
    guildId: channel.guildId, 
    name: channel.name 
  });

  await canal.updateOne({ 
    guildId: role.guild.id, 
    name: role.name, 
    guildName: role.guild.name, 
    birthdayRoleId: role.id 
  });
});

client.on('ready', (client) => {
  new CronJob('10 00 00 * * *', () => {
    checkbirthday(client);
  }, null, true, 'America/Sao_Paulo');
});

client.on('messageCreate', (message) => {

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
  } else if(getCommand(message) == 'test') {
    test(message, getArgs(message));
  } else if(getCommand(message) == 'nextbirthday') {
    nextBirthday(message, getArgs(message));
  }
});

client.login(token);
openServer();

