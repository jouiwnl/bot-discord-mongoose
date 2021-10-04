const mongoose = require('mongoose')
const config = require('../configs/config.json')

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    config.baseUrlMongo,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

mongoose.Promise = global.Promise;

module.exports = mongoose;