// adapted from https://github.com/tobilg/docker-mini-webserver
var express = require('express');
var app = express();
var morgan = require('morgan');

var port = process.env.PORT || DOCKER_WEB_APP_PORT;
var host = process.env.HOST || "0.0.0.0";

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.get('/DOCKER_URL_TOKEN', function (req, res) {
    res.send('<html><head><title>top secret</title></head><body bgcolor="white">these are the droids you’re looking for!</body></html>');
});

app.use(function(req, res, next) {
    res.status(404).end();
});

var server = app.listen(port, host);
