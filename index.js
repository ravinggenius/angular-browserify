var express = require('express');
var fs = require('fs');

var app = express();


app.get('/', function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/html' });
	var stream = fs.createReadStream(__dirname + '/views/index.html');
	stream.pipe(response);
});


var clientBundle = require('browserify')('./client', { debug: true });

app.get('/assets/application.js', function (request, response) {
	response.writeHead(200, { 'Content-Type': 'application/javascript' });
	clientBundle.bundle().pipe(response);
});


app.listen(4567);
