const mongoose = require('mongoose');
const config = require('../configs/config.json');

const url = config.baseUrlMongo;

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(' Mongoose is connected'),
  );
} catch (e) {
  console.log('could not connect');
}

mongoose.Promise = global.Promise;

module.exports = mongoose;
