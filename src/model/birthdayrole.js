const mongoose = require('../database/index');

const BirthdayRoleSchema = new mongoose.Schema({
	guildId: String,
	guildName: String,
	birthdayRoleId: String,
	name: String, 
});

const BirthdayRole = mongoose.model('BirthdayRole', BirthdayRoleSchema);

module.exports = BirthdayRole;
