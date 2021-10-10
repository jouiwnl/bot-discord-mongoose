import mongoose from '../database/index.js';

const BirthdayRoleSchema = new mongoose.Schema({
  guildId: String,
  guildName: String,
  birthdayRoleId: String,
  name: String, 
});

const BirthdayRole = mongoose.model('BirthdayRole', BirthdayRoleSchema);

export default BirthdayRole;
