const mongoose = require('../database/index');

const ManagerRoleSchema = new mongoose.Schema({
  guildId: String,
  guildName: String,
  managerRoleId: String,
  name: String, 
});

const ManagerRole = mongoose.model('ManagerRole', ManagerRoleSchema);

module.exports = ManagerRole;
