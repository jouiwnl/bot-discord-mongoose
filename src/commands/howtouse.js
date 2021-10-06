const welcomeEmbed = require('../embeds/welcome');

exports.howtouse = (message) => {
  message.reply({ embeds: [welcomeEmbed] });
};
