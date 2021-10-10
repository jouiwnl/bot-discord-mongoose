import mongoose from '../database/index.js';

const ChannelSchema = new mongoose.Schema({
  guildId: String,
  id: String,
  name: String,
});

const Channel = mongoose.model('Channel', ChannelSchema);

export default Channel;
