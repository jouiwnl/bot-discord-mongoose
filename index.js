const Discord = require("discord.js");
const config = require('./src/configs/config.json');
const openServer = require("./src/server/server");
const Guild = require('./src/model/guilds');
const BirthdayRole = require("./src/model/birthdayrole");
const cron = require('cron').CronJob; 
const { checkMessageAuthor } = require('./src/utils/checkMessageAuthor');
const { getArgs, getCommand } = require('./src/utils/checkCommand');
const { add } = require('./src/commands/add')
const { aniversas } = require('./src/commands/aniversas')
const { day } = require('./src/commands/day');
const { addRole } = require('./src/commands/addRole');


const token = config.BOT_TOKEN + config.BOT_TOKEN2;

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on('guildCreate', async (guild) => {
  const guilda = new Guild({ guildId: guild.id, name: guild.name });
  await guilda.save();
})

client.on('guildDelete', async (guild) => {
  const guilda = Guild.findOne({ guildId: guild.id });
  await guilda.deleteOne();
})

client.on('messageCreate', (message) => {
  checkMessageAuthor(message);

  if(getCommand(message) == 'adc') {
    add(message, getArgs(message));
  } else if(getCommand(message) == 'aniversas') {
    aniversas(message, getArgs(message));
  } else if(getCommand(message) == 'day') {
    day(message, getArgs(message));
  } else if(getCommand(message) == 'role') {
    addRole(message, getArgs(message));
  }
})

client.on('roleDelete', async (role) => {
  const oldRole = BirthdayRole.findOne({ guildId: role.guild.id, name: role.name });
  await oldRole.deleteOne();
})

client.login(token);
openServer();

