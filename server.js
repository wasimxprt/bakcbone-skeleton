var express = require('express'),
    app = express(),
    http = require('http'),
    httpServer = http.Server(app);

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});
app.listen(4200);
