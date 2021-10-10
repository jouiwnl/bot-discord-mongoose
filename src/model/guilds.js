import mongoose from '../database/index.js';

const GuildSchema = new mongoose.Schema({
  guildId: String,
  name: String, 
});

const Guild = mongoose.model('Guild', GuildSchema);

export default Guild;
