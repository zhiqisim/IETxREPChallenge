const express = require('express');

var app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Local Host 3000 listening!')
});