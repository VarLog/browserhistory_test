var path = require('path');
var express = require('express');
var app = express();

var publicPath = path.join(__dirname, 'public');

app.use("*", function (req, res, next) {
    res.set('Cache-Control', 'no-cache, no-store');
    next();
});

app.use('/public', express.static(publicPath));

app.get("/", function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get("/another", function (req, res) {
    res.sendFile(path.join(publicPath, 'another.html'));
});

app.listen(5000, function () {
    console.log('Listening on port 5000');
});

