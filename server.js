//server -> where everything connects
//requiring express or requiring mongoose
//morgan could be used in middleware as a logger

const express = require ("express");
const mongoose = require("mongoose");

//making our express server
const app = express();
const PORT = process.env.PORT || 3000;

//urlencoded -> how we work to data sent to our server
//extended: true -> posts in the way that we can read -> this allows us to work with POSTs
app.use(express.urlencoded({ extended: true}));
//setting type of data we are working with to javascript object notation
app.use(express.json());

//settin the root for our static files. Saying everything is being served from that folder
app.use(express.static("public"));

//checking for environment variable that we added to HEROKU -> in the Mongo Atlas, we created a URL linked to this connection
//In Heroku, use the connection string we gave it. Use the deployed environmental variable we set in Heroku
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

//these are routes we can access on our application
require("./routes/apiRoutes") (app);
require("./routes/htmlRoutes")(app);

//listening to port -> starts waiting for reqs
app.listen(PORT, function(){
  console.log("===> Listening on port %s. Visit http://localhost:%s in your browser", PORT)
 });