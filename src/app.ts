import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import database from './config/database';

import web from './controllers/API/index';

const app: express.Application = express();
app.use(bodyParser.json());

app.use('/api', web);

app.listen(6969, function () {
	console.log('Server bootstrap 2');
});

mongoose.connect(
	`mongodb:${database.user}:${database.password}@${database.IP}:${database.port}/?authSource=${database.name}`,
	{
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('Conectado a la base de datos');
	}
);
