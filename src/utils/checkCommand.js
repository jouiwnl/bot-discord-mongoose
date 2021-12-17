import prefix from './prefix.js';

const getCommand = (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === 'dm') {
    return;
  }

  const commandBody = message.content.slice(prefix.length);
  const argumentos = commandBody.split(' ');
  const command = argumentos.shift().toLowerCase();


  return command;
};

const getArgs = (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === 'dm') {
    return;
  }

  const commandBody = message.content.slice(prefix.length);
  const arg = commandBody.split(' ');
  // eslint-disable-next-line no-unused-vars
  const removeCommand = arg.shift();

  return arg.toString();
};

export {getCommand, getArgs};
