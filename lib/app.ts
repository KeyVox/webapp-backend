import express = require('express');
const app: express.Application = express();
app.get('/', function (req, res) {
    res.send('Hola pvto');
});
app.listen(6969, function () {
    console.log('Server bootstrap 2');
});