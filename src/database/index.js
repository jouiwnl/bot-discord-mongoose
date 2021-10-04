const mongoose = require('mongoose')

const baseUrl = 'mongodb+srv://jouiwnl:132Natan123!@cluster0.cfyfl.mongodb.net/bot-discord?retryWrites=true&w=majority';

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    baseUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

mongoose.Promise = global.Promise;

module.exports = mongoose;