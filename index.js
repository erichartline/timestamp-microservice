// establish variables
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// set view engine to EJS
app.set('view engine', 'ejs');

// require timestamp route
app.use('/', require('./routes/timestamp'));

// render views/index.ejs
app.get('/', function(req, res) {
  res.render('index');
});

// start up the server
app.listen(port, function() {
  console.log('Server is running');
});
