var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/:id', function(req, res) {
  const id = req.params.id;
  console.log(id);
  res.send(id);
});

// start up the server
app.listen(3000, function() {
  console.log('server is started');
});
