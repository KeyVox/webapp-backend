import express, { Request, Response } from 'express'
import { json } from 'body-parser'
import mongoose from 'mongoose'


const app: express.Application = express();
app.get('/', function (req, res) {
    res.send('Hola pvto')
});
app.listen(6969, function () {
    console.log('Server bootstrap 2');
});
mongoose.connect('mongodb:/localhost:27017/keyvox', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Conectado a la base de datos")
})