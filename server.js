<<<<<<< HEAD
var express = require('express'),
    app = express(),
    http = require('http'),
    httpServer = http.Server(app);

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});
app.listen(4200);
=======
var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(8080);
>>>>>>> 07827857f1e398ce760cfde90b6c5ab30623aad7
