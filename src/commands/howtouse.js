import welcomeEmbed from '../embeds/welcome.js';

const howtouse = (message) => {
  message.reply({ embeds: [welcomeEmbed] });
};

export default howtouse;
