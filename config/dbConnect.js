const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to the database
    await mongoose.connect(process.env.DATABASE_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.log('Error while connecting to the database: ', err);
    process.exit(1); // Exit process with failure
  }
}

module.exports = connectDB;
