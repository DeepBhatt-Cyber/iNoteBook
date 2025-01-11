const mongoose = require('mongoose');

const connectToMongoose = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectToMongoose;
