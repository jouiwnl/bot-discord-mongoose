const mongoose = require('../database/index');

const ChannelSchema = new mongoose.Schema({
  guildId: String,
  id: String,
  name: String,
});

const Channel = mongoose.model('Channel', ChannelSchema);

module.exports = Channel;
