import mongoose from '../database/index.js';

const ManagerRoleSchema = new mongoose.Schema({
  guildId: String,
  guildName: String,
  managerRoleId: String,
  name: String, 
});

const ManagerRole = mongoose.model('ManagerRole', ManagerRoleSchema);

export default ManagerRole;
