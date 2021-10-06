const mongoose = require('../database/index');

const GuildSchema = new mongoose.Schema({
	guildId: String,
	name: String, 
});

const Guild = mongoose.model('Guild', GuildSchema);

module.exports = Guild;
