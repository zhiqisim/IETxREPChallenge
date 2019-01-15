const express = require('express');

var app = express();

app.use(express.static(__dirname + '/docs'));

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, () => {
    console.log('Local Host 3000 listening!')
});