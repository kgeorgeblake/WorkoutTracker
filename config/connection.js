//connect to mongoose with config
const mongoose = require("mongoose");

const dbConfig = process.env.MONGODB_URI;

async function connection (){
    await mongoose.connect (dbConfig, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () =>
    console.log ("Connected to DB")
    );
    }

    module.exports = connection;