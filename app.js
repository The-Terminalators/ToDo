// basic app functionality
var app = require('express')();
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = null;

var port = process.env.PORT || 3000;


app.use(logger('dev'));

app.use(express.static('public'));

mongoose.connect('mongodb://master:qwerty1234@ds055584.mongolab.com:55584/todosdb');


app.listen(port);
