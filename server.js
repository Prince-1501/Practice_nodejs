const express = require('express');
const fs = require('fs');
const hbs = require('hbs');

var app = express();

app.use( (req, res, next) => {

  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFileSync('server.log', log +'\n');
  next();

});


hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('currentYear' , () => {
  return new Date().getFullYear();
});
app.get('/', (req,res) => {
  res.render('home.hbs');
});

app.listen(3000, () => {
  console.log('Server is started on port 3000');
});
