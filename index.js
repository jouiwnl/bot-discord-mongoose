const Discord = require("discord.js");
const config = require('./src/configs/config.json');
const openServer = require("./src/server/server");
const Guild = require('./src/model/guilds');
const cron = require('cron').CronJob; 
const { checkMessageAuthor } = require('./src/utils/checkMessageAuthor');
const { getArgs, getCommand } = require('./src/utils/checkCommand');
const { add } = require('./src/commands/add')
const { aniversas } = require('./src/commands/aniversas')
const { day } = require('./src/commands/day');
const { addRole } = require("./src/commands/addRole");

const token = config.BOT_TOKEN + config.BOT_TOKEN2;

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });


client.on('guildCreate', (guild) => {
  const guilda = new Guild({ guildId: guild.id, name: guild.name });
  guilda.save((err, guilda) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(guilda);
    }
  })
})

client.on('guildDelete', (guild) => {
  const guilda = Guild.find({ guildId: guild.id });
  guilda.deleteOne((err, guilda) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(guilda);
      console.log('guilda deletada do banco de dados');
    }
  })
})

client.on('messageCreate', (message) => {
  checkMessageAuthor(message);

  if(getCommand(message) == 'adc') {
    add(message, getArgs(message));
  } else if(getCommand(message) == 'aniversas') {
    aniversas(message, getArgs(message))
  } else if(getCommand(message) == 'day') {
    day(message, getArgs(message))
  } else if(getCommand(message) == 'addRole') {
    addRole(message, getArgs(message))
  }
})


client.login(token);
openServer();

