//connect to mongoose with config
const mongoose = require("mongoose");

const dbConfig = process.env.MONGODB_URI;



async function connection (){
    await mongoose.connect(
        process.env.MONGODB_URI || 'mongodb://localhost/immense-beach-71384',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
        }
      );
    
    }

    module.exports = connection;