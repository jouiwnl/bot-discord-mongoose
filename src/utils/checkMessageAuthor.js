const prefix = '!';

exports.checkMessageAuthor = (message) => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.channel.type === 'dm') return;        
};
