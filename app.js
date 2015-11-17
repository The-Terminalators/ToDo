// basic app functionality
var app = require('express')();
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var todoRoutes = require('./routes/todoRoutes.js');

var port = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
// mongodb://<dbuser>:<dbpassword>@ds055584.mongolab.com:55584/todosdb
mongoose.connect('mongodb://master:qwerty1234@ds055584.mongolab.com:55584/todosdb', function(err){
  if(err) console.log(err)
  console.log('connected to mongo')
});

app.use('/api', todoRoutes);

app.listen(port, function(){
  console.log('app running on' + port)
});
