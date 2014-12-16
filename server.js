/**
 * Ad Astra Games
 * Squadron Strike Strategic Game
 *
 * Created by Jerome on 12/16/2014.
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/static'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello from Squadron Strike Strategic Game!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
